import { IRouteDTO, Point } from "../useCases/ClientRoute/IRouteDTO";

export interface IRouteProvider
{
    calcDistance(A: Point, B: Point): number;
    bestRouteCalc(company: Point, clients: IRouteDTO[]): Point[];
}