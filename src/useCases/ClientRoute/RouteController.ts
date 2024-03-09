import { Request, Response } from 'express';
import { RouteUseCase } from './RouteUseCase';

export class RouteController
{
    constructor(private RouteUseCase: RouteUseCase) {}

    async handle(request: Request, response: Response): Promise<Response>
    {
        const { ClientID, Coordinates } = request.body;

        try
        {
            await this.RouteUseCase.execute({ ClientID, Coordinates })
            return response.status(200).send();
        }
        catch(err)
        {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }

    async getRouteByClientID(clientId: string)
    {
        return await this.RouteUseCase.getRouteByClientID(clientId);
    }

    async getRouteByName(name: string)
    {
        return await this.RouteUseCase.getRouteByName(name);
    }

    async getRouteByEmail(email: string)
    {
        return await this.RouteUseCase.getRouteByEmail(email);
    }

    async getRouteByPhone(phone: string)
    {
        return await this.RouteUseCase.getRouteByPhone(phone);
    }

    async getAllRoutesClients()
    {
        return await this.RouteUseCase.getAllRoutesClients();
    }
}