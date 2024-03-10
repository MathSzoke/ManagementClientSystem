import { uuid } from "uuidv4";

export class Client
{
  // Props all properties from Client and omit only ID. ID is nullable for methods like getClientByID
  constructor(props, ID) {
    Object.assign(this, props)

    if (!ID) this.ID = uuid()
  }
}