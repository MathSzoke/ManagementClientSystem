import { RouteUseCase } from './RouteUseCase';
import { RouteController } from './RouteController';
import { RouteClientQueries } from './../../repositories/queries/RouteClientQueries';

const routeQueries = new RouteClientQueries()

const routeUseCase = new RouteUseCase(
    routeQueries,
)

const routeController = new RouteController(routeUseCase);

export { routeUseCase, routeController }