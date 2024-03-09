import { RouteUseCase } from './RouteUseCase';
import { RouteController } from './RouteController';
import { RouteProvider } from '../../providers/implementations/RouteProvider';
import { ClientQueries } from '../../repositories/queries/ClientQueries';

const routeQueries = new ClientQueries()
const routeProvider = new RouteProvider();

const routeUseCase = new RouteUseCase(
    routeQueries,
    routeProvider
)

const routeController = new RouteController(routeUseCase);

export { routeUseCase, routeController }