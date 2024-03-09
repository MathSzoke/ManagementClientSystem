import { Router } from "express";
import { clientController } from "./useCases/CreateClient";

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

export { router }