import React, { useState, useEffect } from 'react';
import CartesianPlane from './CartesianPlane/CartesianPlane';
import { getApiData } from '../../apis/callApi';
import './RouteClient.css';

export function RouteClient() {
    const [clients, setClients] = useState([]);
    const [filteredClients, setFilteredClients] = useState([]);
    const [selectedClients, setSelectedClients] = useState([]);
    const [clientColors, setClientColors] = useState({});
    const [nameFilter, setNameFilter] = useState('');
    const [emailFilter, setEmailFilter] = useState('');
    const [phoneFilter, setPhoneFilter] = useState('');

    useEffect(() => {
        const getAllClients = async () => {
            try {
                const data = await getApiData('getAllClients');
                setClients(data);
                setFilteredClients(data);
                setSelectedClients(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getAllClients();
    }, []);

    useEffect(() => {
        // Generate colors for each client
        const colors = clients.reduce((acc, client) => {
            acc[client.id] = generateRandomColor();
            return acc;
        }, {});
        setClientColors(colors);
    }, [clients]);

    useEffect(() => {
        // Filter clients based on name, email, and phone
        const filtered = clients.filter(client =>
            client.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
            client.email.toLowerCase().includes(emailFilter.toLowerCase()) &&
            client.phone.includes(phoneFilter)
        );
        setFilteredClients(filtered);
        setSelectedClients(filtered);
    }, [nameFilter, emailFilter, phoneFilter, clients]);

    const generateRandomColor = () => {
        const randomColor = () => Math.floor(Math.random() * 256);
        return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    };

    const formatPhoneNumber = (value) => {
        let formattedNumber = "";
        const regex = value.replace(/\D/g, ""); // Remove non-numeric characters

        if (regex.length >= 2) {
            formattedNumber = `+${regex.substring(0, 2)} `; // Country code
            if (regex.length >= 3) {
                formattedNumber += `(${regex.substring(2, 4)}) `; // Area code
                if (regex.length >= 7) {
                    formattedNumber += `${regex.substring(4, 5)} ${regex.substring(5, 9)}`; // First part of number
                    if (regex.length >= 13) {
                        formattedNumber += `-${regex.substring(9)}`; // Second part of number
                    } else {
                        formattedNumber += `-${regex.substring(9)}`; // Second part of number
                    }
                } else {
                    formattedNumber += regex.substring(4); // Remaining digits
                }
            } else {
                formattedNumber += regex.substring(2); // Remaining digits
            }
        } else {
            formattedNumber = regex; // Only one or no digit entered
        }

        return formattedNumber;
    };

    const handleClientClick = (client) => {
        setSelectedClients((prevSelectedClients) => {
            const isSelected = prevSelectedClients.some((selectedClient) => selectedClient.id === client.id);
            if (isSelected) {
                return prevSelectedClients.filter((selectedClient) => selectedClient.id !== client.id);
            } else {
                return [...prevSelectedClients, client];
            }
        });
    };

    return (
        <section className="route section" id="Route">
            <h1>Clientes</h1>
            <div className="filterFields">
                <input
                    type="text"
                    name='name'
                    className='filterField'
                    placeholder="Pesquisar por nome"
                    value={nameFilter}
                    onChange={(e) => setNameFilter(e.target.value)}
                />
                <input
                    type="text"
                    name='email'
                    className='filterField'
                    placeholder="Pesquisar por email"
                    value={emailFilter}
                    onChange={(e) => setEmailFilter(e.target.value)}
                />
                <input
                    type="text"
                    className='filterField'
                    name='phone'
                    placeholder="Pesquisar por telefone"
                    value={phoneFilter}
                    onChange={(e) => setPhoneFilter(formatPhoneNumber(e.target.value))}
                />
            </div>
            <div className="container contentsClients">
                <div className="clients left">
                    {filteredClients.map(client => (
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
                <div className='right'>
                    <CartesianPlane coordinates={selectedClients.map(client => ({ coordinateX: client.coordinateX, coordinateY: client.coordinateY, color: clientColors[client.id] }))} />
                </div>
            </div>
        </section>
    );
}