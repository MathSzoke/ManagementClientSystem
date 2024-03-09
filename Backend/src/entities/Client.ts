import { uuid } from "uuidv4";

export class Client
{
    // Readonly to be not changed when already setted
    public readonly ID: string;

    public name: string;
    public email: string;
    public phone: string;
    public coordinateX: number;
    public coordinateY: number;

    // Props all properties from Client and omit only ID. ID is nullable for methods like getClientByID
    constructor(props: Omit<Client, 'ID'>, ID?: string)
    {
        Object.assign(this, props);

        if(!ID) 
            this.ID = uuid();
    }
}