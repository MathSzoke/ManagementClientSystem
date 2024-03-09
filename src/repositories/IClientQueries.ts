import { Client } from "../entities/Client";

export interface IClientQueries
{
    getAllClients(): Promise<any>;
    getClientByID(id: string): Promise<Client[]>;
    getClientByName(name: string): Promise<any>;
    getClientByEmail(email: string): Promise<any>;
    getClientByPhone(phone: string): Promise<any>;

    addClient(client: Client): Promise<void>;
}