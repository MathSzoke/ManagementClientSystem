import { Router } from "express";
import { clientController } from "./useCases/CreateClient";
import { routeController } from "./useCases/ClientRoute";

const router = Router()

router.post('/Client', (request, response) => {
    return clientController.handle(request, response);
});

router.get('/GetClientByName', (request, response) => {
    return clientController.getClientByName(request, response);
})

router.get('/GetClientByEmail', (request, response) => {
    return clientController.getClientByEmail(request, response);
})

router.get('/GetClientByPhone', (request, response) => {
    return clientController.getClientByPhone(request, response);
})

router.post('/GetBestRoute', (request, response) => {
    return routeController.getBestRoute(request, response);
})

export { router }