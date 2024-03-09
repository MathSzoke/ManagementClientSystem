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

    async getRouteByClientID(request: Request, response: Response): Promise<Response>
    {
        const { clientId } = request.params;
        return response.status(200).json(await this.RouteUseCase.getRouteByClientID(clientId));
    }

    async getRouteByName(request: Request, response: Response): Promise<Response>
    {
        const { name } = request.params;
        return response.status(200).json(await this.RouteUseCase.getRouteByName(name));
    }

    async getRouteByEmail(request: Request, response: Response): Promise<Response>
    {
        const { email } = request.params;
        return response.status(200).json(await this.RouteUseCase.getRouteByEmail(email));
    }

    async getRouteByPhone(request: Request, response: Response): Promise<Response>
    {
        const { phone } = request.params;
        return response.status(200).json(await this.RouteUseCase.getRouteByPhone(phone));
    }

    async getAllRoutesClients(response: Response): Promise<Response>
    {
        return response.status(200).json(await this.RouteUseCase.getAllRoutesClients());
    }
}