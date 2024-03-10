import { Router } from "express";
import { clientController } from "./useCases/CreateClient/index.js";
import { routeController } from "./useCases/ClientRoute/index.js";

const router = Router()

router.post('/client', (request, response) => {
    return clientController.handle(request, response);
});

router.get('/getAllClients', (response) => {
    return clientController.getAllClients(response);
})

router.get('/getClientByName', (request, response) => {
    return clientController.getClientByName(request, response);
})

router.get('/getClientByEmail', (request, response) => {
    return clientController.getClientByEmail(request, response);
})

router.get('/getClientByPhone', (request, response) => {
    return clientController.getClientByPhone(request, response);
})

router.post('/getBestRoute', (request, response) => {
    return routeController.getBestRoute(request, response);
})

export { router }