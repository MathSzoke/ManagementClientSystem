import { Client, Coordinates } from "../entities/Client";

export interface IRouteProvider
{
    calcDistance(A: Coordinates, B: Coordinates): number;
    bestRouteCalc(client: Client[]): Coordinates[];
}