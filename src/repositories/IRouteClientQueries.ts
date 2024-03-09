import { RouteClient } from "../entities/RouteClient";

export interface IRouteClientQueries
{
    getRouteByClientID(clientId: string): Promise<RouteClient[]>;
    getRouteByName(name: string): Promise<any>;
    getRouteByEmail(email: string): Promise<any>;
    getRouteByPhone(phone: string): Promise<any>;
    getAllRoutesClients(): Promise<any>;

    addRoute(route: RouteClient): Promise<void>;
}