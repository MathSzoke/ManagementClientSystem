import { Router } from "express";
import { clientController } from "./useCases/CreateClient/index.js";
import { routeController } from "./useCases/ClientRoute/index.js";

const router = Router()

router.post('/client', (request, response) => {
    return clientController.handle(request, response);
});

router.get('/getAllClients', async (req, res) => {
    try
    {
        const clients = await clientController.getAllClients();

        res.json(clients);
    }
    catch (error)
    {
        console.error('Error fetching clients:', error);
        res.status(500).json({ error: 'Failed to fetch clients' });
    }
});

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