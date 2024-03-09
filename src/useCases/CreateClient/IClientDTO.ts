import { Coordinates } from "../../entities/Client";

export interface IClientDTO
{
    name: string;
    email: string;
    phone: string;
    coordinates: Coordinates
}