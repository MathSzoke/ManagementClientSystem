import { Client } from "../../entities/Client";
import { IRouteProvider } from "../../providers/IRouteProvider";
import { IClientQueries } from "../../repositories/IClientQueries";

export class RouteUseCase
{
    constructor(private Client: IClientQueries, private RoutesProvider: IRouteProvider) { }

    async getBestRoute(clientIds: string[] | null)
    {
        let entities: Client[] | null = null;
    
        if (clientIds != null)
        {
            entities = [];
            for (const clientId of clientIds)
            {
                const entity = await this.Client.getClientByID(clientId);
                if (entity)
                {
                    entities = entities.concat(entity);
                }
            }
        }
        else
        {
            entities = await this.Client.getAllClients();
        }
    
        return this.RoutesProvider.bestRouteCalc(entities);
    }
}