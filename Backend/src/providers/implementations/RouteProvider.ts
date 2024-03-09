import { Client } from "../../entities/Client";
import { IRouteProvider } from "../IRouteProvider";


export class Coordinates
{
    public coordinateX: number;
    public coordinateY: number;
}

export class RouteProvider implements IRouteProvider
{
    calcDistance(A: Coordinates, B: Coordinates): number
    {
        // Calculate the distance between to points.
        return Math.sqrt(Math.pow(Math.abs(B.coordinateX - A.coordinateX), 2) + Math.pow(Math.abs(B.coordinateY - A.coordinateY), 2));
    }

    bestRouteCalc(clients: Client[]): Coordinates[]
    {
        const company: Coordinates = { coordinateX: 0, coordinateY: 0 };
        const clientPoints: Coordinates[] = clients.map(client => ({
            coordinateX: client.coordinateX,
            coordinateY: client.coordinateY
        }));

        // Ordenar os clientes pela distância da empresa
        clientPoints.sort((a, b) => this.calcDistance(company, a) - this.calcDistance(company, b));

        // Adicionar as coordenadas dos clientes na ordem da rota
        const route: Coordinates[] = [company, ...clientPoints];

        return route;
    }
}