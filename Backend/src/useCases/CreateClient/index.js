import { ClientUseCase } from "./ClientUseCase.js"
import { ClientController } from "./ClientController.js"
import { ClientQueries } from "../../repositories/queries/ClientQueries.js"

const clientQueries = new ClientQueries()
const clientUseCase = new ClientUseCase(clientQueries)

const clientController = new ClientController(clientUseCase)

export { clientUseCase, clientController }