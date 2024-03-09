import { Request, Response } from 'express';
import { RouteUseCase } from './RouteUseCase';

export class RouteController
{
    constructor(private RouteUseCase: RouteUseCase) {}
    
    async getBestRoute(request: Request | null, response: Response): Promise<Response>
    {
        const { clientId } = request.body;

        return response.status(200).json(await this.RouteUseCase.getBestRoute(clientId));
    }
}