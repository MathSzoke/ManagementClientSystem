import React, { useState, useEffect } from 'react';
import CartesianPlane from './CartesianPlane/CartesianPlane';
import { getApiData } from '../../apis/callApi';

export function RouteClient() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const getAllClients = async () => {
            try {
                const data = await getApiData('getAllClients');
                console.log("data: ", data);
                setClients(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getAllClients();
    }, []);

    return (
        <section className="route section" id="Route">
            <div className="clients">
                {clients.map(client => (
                    <div key={client.id} style={{ width: '100px', height: '50px', border: '1px solid black', margin: '5px', padding: '5px' }}>
                        <p>Name: {client.name}</p>
                        <p>Email: {client.email}</p>
                        <p>Phone: {client.phone}</p>
                    </div>
                ))}
            </div>
            <div style={{right: "1%", position: "fixed", top: "1%"}}>
                <CartesianPlane coordinates={[{ coordinateX: 23, coordinateY: -95 }, { coordinateX: 48, coordinateY: 75 }]} />
            </div>
        </section>
    );
}
