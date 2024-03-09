export interface IClientDataProvider
{
    getClientCoordinates(clientID: string): Promise<{ x: number, y: number }>;
    getAllClients(): Promise<{ clientID: string, x: number, y: number }[]>;
}

export interface IRouteCalculator
{
    calculateRoute(clientCoordinates: { x: number, y: number }[]): Promise<string[]>;
}