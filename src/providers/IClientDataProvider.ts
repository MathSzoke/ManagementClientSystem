import { IRouteDTO, Point } from "../useCases/ClientRoute/IRouteDTO";

export interface IClientDataProvider
{
    calcDistance(A: Point, B: Point): number;
    bestRouteCalc(company: Point, clients: IRouteDTO[]): Point[];
}