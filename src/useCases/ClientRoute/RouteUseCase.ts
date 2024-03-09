import { RouteClient } from "../../entities/RouteClient";
import { IRouteClientQueries } from "../../repositories/IRouteClientQueries";
import { IRouteDTO } from "./IRouteDTO";

export class RouteUseCase
{
    constructor(private Routes: IRouteClientQueries) { }

    async execute(data: IRouteDTO)
    {
        const routeAlreadyExists = await this.Routes.getRouteByClientID(data.ClientID);

        if(routeAlreadyExists) 
            throw new Error('Route already exists for this client');

        const rc = new RouteClient(data);

        await this.Routes.addRoute(rc);
    }

    async getRouteByClientID(clientId: string)
    {
        return await this.Routes.getRouteByClientID(clientId);
    }

    async getRouteByName(name: string)
    {
        return await this.Routes.getRouteByName(name);
    }

    async getRouteByEmail(email: string)
    {
        return await this.Routes.getRouteByEmail(email);
    }

    async getRouteByPhone(phone: string)
    {
        return await this.Routes.getRouteByPhone(phone);
    }

    async getAllRoutesClients()
    {
        return await this.Routes.getAllRoutesClients();
    }
}