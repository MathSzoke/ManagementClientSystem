import { RouteClient } from "../../entities/RouteClient";
import { IRouteClientQueries } from "../IRouteClientQueries";
import { QueryTypes } from 'sequelize';
import { sequelize } from '../../repositories/sequelize/models';

export class RouteClientQueries implements IRouteClientQueries
{
    async getAllRoutesClients(): Promise<RouteClient[]>
    {
        try
        {
            const query = `SELECT * FROM public."RouteClients"`;
        
            const routes = await sequelize.query<RouteClient>(query, {
                type: QueryTypes.SELECT
            });
            return routes;
        }
        catch (error)
        {
            throw error;
        }
    }

    async getRouteByClientID(clientId: string): Promise<RouteClient[]>
    {
        try
        {
            const query = `SELECT * FROM public."RouteClients" WHERE "ClientID" = :clientId`;
        
            const routes = await sequelize.query<RouteClient>(query, {
                replacements: { clientId },
                type: QueryTypes.SELECT
            });
            return routes;
        }
        catch (error)
        {
            throw error;
        }
    }
    
    async getRouteByName(name: string): Promise<RouteClient[]>
    {
        try
        {
            const routes = await sequelize.query<RouteClient>(this.select("name", name), {
                replacements: { name },
                type: QueryTypes.SELECT
            });
            return routes;
        }
        catch (error)
        {
            throw error;
        }
    }
    
    async getRouteByEmail(email: string): Promise<RouteClient[]>
    {
        try
        {
            const routes = await sequelize.query<RouteClient>(this.select("email", email), {
                replacements: { email },
                type: QueryTypes.SELECT
            });
            return routes;
        }
        catch (error)
        {
            throw error;
        }
    }
    
    async getRouteByPhone(phone: string): Promise<RouteClient[]>
    {
        try
        {
            const routes = await sequelize.query<RouteClient>(this.select("phone", phone), {
                replacements: { phone },
                type: QueryTypes.SELECT
            });
            return routes;
        }
        catch (error)
        {
            throw error;
        }
    }

    async addRoute(route: RouteClient): Promise<void>
    {
        try
        {
            const query = `INSERT INTO public."RouteClients" ("ClientID", "CoordinateX", "CoordinateY") VALUES (:ClientID, :CoordinateX, :CoordinateY)`;
        
            const { ClientID, CoordinateX, CoordinateY } = route;
        
            await sequelize.query(query,
            {
                replacements: { ClientID, CoordinateX, CoordinateY },
                type: QueryTypes.INSERT
            });
        }
        catch (error)
        {
            throw error;
        }
    }

    select = (column: string, value: string) => `SELECT * FROM public."RouteClients" WHERE "ClientID" = (SELECT "id" FROM public."Clients" WHERE "${column}" = :${value})`;
}