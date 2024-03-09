import { Request, Response } from 'express'
import { ClientUseCase } from './ClientUseCase';

export class ClientController
{
    constructor(private ClientUseCase: ClientUseCase) {}

    async handle(request: Request, response: Response): Promise<Response>
    {
        const { name, email, phone, coordinates } = request.body;

        try
        {
            await this.ClientUseCase.execute({
                name, email, phone, coordinates
            })

            return response.status(200).send();
        }
        catch(err)
        {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }

    async getAllClients(response: Response): Promise<Response>
    {
        return response.status(200).json(await this.ClientUseCase.getAllClients());
    }

    async getClientByID(request: Request, response: Response): Promise<Response>
    {
        const { id } = request.body;
        return response.status(200).json(await this.ClientUseCase.getClientByID(id));
    }

    async getClientByName(request: Request, response: Response): Promise<Response>
    {
        const {name} = request.body;
        return response.status(200).json(await this.ClientUseCase.getClientByName(name));
    }

    async getClientByEmail(request: Request, response: Response): Promise<Response>
    {
        const {email} = request.body;
        return response.status(200).json(await this.ClientUseCase.getClientByEmail(email));
    }

    async getClientByPhone(request: Request, response: Response): Promise<Response>
    {
        const {phone} = request.body;
        return response.status(200).json(await this.ClientUseCase.getClientByPhone(phone));
    }
}