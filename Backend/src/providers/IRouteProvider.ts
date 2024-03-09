import { Client } from "../entities/Client";
import { Coordinates } from "./implementations/RouteProvider";

export interface IRouteProvider
{
    calcDistance(A: Coordinates, B: Coordinates): number;
    bestRouteCalc(client: Client[]): Coordinates[];
}