import { Client } from "../../entities/Client";
import { IClientQueries } from "../../repositories/IClientQueries";
import { IClientDTO } from "./IClientDTO";

export class ClientUseCase
{
    constructor(private Client: IClientQueries) { }

    async execute(data: IClientDTO)
    {
        const clientAlreadyExists = await this.Client.getClientByEmail(data.email);

        if(clientAlreadyExists) 
            throw new Error('Client already exists');

        const c = new Client(data);

        await this.Client.addClient(c);
    }

    async getAllClients()
    {
        return await this.Client.getAllClients();
    }

    async getClientByID(id: string)
    {
        return await this.Client.getClientByID(id);
    }

    async getClientByName(name: string)
    {
        return await this.Client.getClientByName(name);
    }

    async getClientByEmail(email: string)
    {
        return await this.Client.getClientByEmail(email);
    }

    async getClientByPhone(phone: string)
    {
        return await this.Client.getClientByPhone(phone);
    }
}