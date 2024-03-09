import { uuid } from "uuidv4";
import { IRouteDTO, Point } from "../../useCases/ClientRoute/IRouteDTO";

function calcDistance(A: Point, B: Point): number
{
    // Calculate the distance between to points.
    return Math.sqrt(Math.pow(Math.abs(B.x - A.x), 2) + Math.pow(Math.abs(B.y - A.y), 2));
}
    
function bestRouteCalc(company: Point, clients: IRouteDTO[]): Point[]
{
    const clientPoints: Point[] = clients.map(client => client.Coordinates);

    const route: Point[] = [];
    let currentPoint: Point = company;

    while (clientPoints.length > 0)
    {
        let shortestDistance = Infinity;
        let closestPoint: Point | undefined = undefined;
        let closestPointIndex: number | undefined = undefined;

        for (let i = 0; i < clientPoints.length; i++)
        {
            const distance = calcDistance(currentPoint, clientPoints[i]);
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

// Exemplo de utilização
const company: Point = { x: 0, y: 0 };
const clients: IRouteDTO[] = [
    { ClientID: uuid(), Coordinates: { x: 10, y: 20 } },
    { ClientID: uuid(), Coordinates: { x: 5, y: 15 } },
    { ClientID: uuid(), Coordinates: { x: 3, y: 7 } },
    { ClientID: uuid(), Coordinates: { x: 8, y: 2 } },
];

const bestRoute = bestRouteCalc(company, clients);
console.log('Melhor rota:', bestRoute);