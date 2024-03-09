import { Point } from "../useCases/ClientRoute/IRouteDTO";

export class RouteClient
{
    public ClientID: string;
    public Coordinates: Point;

    constructor(props: RouteClient)
    {
        Object.assign(this, props);
    }
}