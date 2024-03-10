class ClientController
{
  constructor(ClientUseCase)
  {
    this.ClientUseCase = ClientUseCase
  }

  async handle(request, response)
  {
    const { name, email, phone, coordinateX, coordinateY } = request.body

    try {
      await this.ClientUseCase.execute({
        name,
        email,
        phone,
        coordinateX,
        coordinateY
      })

      return response.status(200).send()
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }

  async getAllClients()
  {
    return await this.ClientUseCase.getAllClients()
  }

  async getClientByID(request, response)
  {
    const { id } = request.body
    return response.status(200).json(await this.ClientUseCase.getClientByID(id))
  }

  async getClientByName(request, response)
  {
    const { name } = request.body
    return response
      .status(200)
      .json(await this.ClientUseCase.getClientByName(name))
  }

  async getClientByEmail(request, response)
  {
    const { email } = request.body
    return response
      .status(200)
      .json(await this.ClientUseCase.getClientByEmail(email))
  }

  async getClientByPhone(request, response)
  {
    const { phone } = request.body
    return response
      .status(200)
      .json(await this.ClientUseCase.getClientByPhone(phone))
  }
}

export {ClientController};