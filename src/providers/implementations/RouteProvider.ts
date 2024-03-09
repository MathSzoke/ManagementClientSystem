import { Client, Coordinates } from "../../entities/Client";
import { IRouteProvider } from "../IRouteProvider";

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

        const clientPoints: Coordinates[] = clients.map(client => client.coordinates);
    
        const route: Coordinates[] = [];
        let currentPoint: Coordinates = company;
    
        while (clientPoints.length > 0)
        {
            let shortestDistance = Infinity;
            let closestPoint: Coordinates | undefined = undefined;
            let closestPointIndex: number | undefined = undefined;
    
            for (let i = 0; i < clientPoints.length; i++)
            {
                const distance = this.calcDistance(currentPoint, clientPoints[i]);
                if (distance < shortestDistance)
                {
                    shortestDistance = distance;
                    closestPoint = clientPoints[i];
                    closestPointIndex = i;
                }
            }
    
            if (closestPoint)
            {
                route.push(closestPoint);
                currentPoint = closestPoint;
                clientPoints.splice(closestPointIndex, 1);
            }
        }
    
        return route;
    }
}