import { Client } from "../../entities/Client.js";

class ClientUseCase {
  constructor(Client) {
    this.Client = Client
  }

  async execute(data)
  {
    const clientAlreadyExists = await this.Client.getClientByEmail(data.email)

    if (clientAlreadyExists) throw new Error("Client already exists")

    const c = new Client(data)

    await this.Client.addClient(c)
  }

  async getAllClients()
  {
    return await this.Client.getAllClients()
  }

  async getClientByID(id)
  {
    return await this.Client.getClientByID(id)
  }

  async getClientByName(name)
  {
    return await this.Client.getClientByName(name)
  }

  async getClientByEmail(email)
  {
    return await this.Client.getClientByEmail(email)
  }

  async getClientByPhone(phone)
  {
    return await this.Client.getClientByPhone(phone)
  }
}

export {ClientUseCase};