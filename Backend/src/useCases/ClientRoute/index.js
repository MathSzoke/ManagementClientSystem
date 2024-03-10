import { RouteUseCase } from "./RouteUseCase.js";
import { RouteController } from "./RouteController.js";
import { RouteProvider } from "../../providers/implementations/RouteProvider.js";
import { ClientQueries } from "../../repositories/queries/ClientQueries.js";

const routeQueries = new ClientQueries()
const routeProvider = new RouteProvider()

const routeUseCase = new RouteUseCase(routeQueries, routeProvider)

const routeController = new RouteController(routeUseCase)

export { routeUseCase, routeController }