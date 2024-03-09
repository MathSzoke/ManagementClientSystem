import { ClientUseCase } from './ClientUseCase';
import { ClientController } from './ClientController';
import { ClientQueries } from './../../repositories/queries/ClientQueries';

const clientQueries = new ClientQueries()
const clientUseCase = new ClientUseCase(
    clientQueries,
)

const clientController = new ClientController(clientUseCase);

export { clientUseCase, clientController }