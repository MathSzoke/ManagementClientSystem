import React, { useState, useEffect } from 'react';
import CartesianPlane from './CartesianPlane/CartesianPlane';
import { getApiData } from '../../apis/callApi';
import './RouteClient.css';

export function RouteClient() {
    const [clients, setClients] = useState([]);
    const [selectedClients, setSelectedClients] = useState([]);
    const [clientColors, setClientColors] = useState({});

    useEffect(() => {
        const getAllClients = async () =>
        {
            try
            {
                const data = await getApiData('getAllClients');
                setClients(data);
                setSelectedClients(data);
            }
            catch (error)
            {
                console.error('Error fetching data:', error);
            }
        };

        getAllClients();
    }, []);

    useEffect(() =>
    {
        // Generate colors for each client
        const colors = clients.reduce((acc, client) =>
        {
            acc[client.id] = generateRandomColor();
            return acc;
        }, {});
        setClientColors(colors);
    }, [clients]);

    const generateRandomColor = () => {
        const randomColor = () => Math.floor(Math.random() * 256);
        return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    };

    const handleClientClick = (client) =>
    {
        if (selectedClients.includes(client))
        {
            setSelectedClients(selectedClients.filter(selectedClient => selectedClient !== client));
        }
        else
        {
            setSelectedClients([...selectedClients, client]);
        }
    };

    return (
        <section className="route section" id="Route">
            <h1>Clientes</h1>
            <div className="clients">
                {clients.map(client => (
                    <div key={client.id} className={`cardClient ${selectedClients.includes(client) ? 'selected' : ''}`} onClick={() => handleClientClick(client)}>
                        <div className="contentCard">
                            <div className="colorDot" style={{ backgroundColor: clientColors[client.id] }}></div>
                            <p className='clientProp clientName'>{client.name}</p>
                            <p className='clientProp'>{client.email}</p>
                            <p className='clientProp'>{client.phone}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ right: "1%", position: "fixed", top: "1%" }}>
                <CartesianPlane coordinates={selectedClients.map(client => ({ coordinateX: client.coordinateX, coordinateY: client.coordinateY, color: clientColors[client.id] }))} />
            </div>
        </section>
    );
}
