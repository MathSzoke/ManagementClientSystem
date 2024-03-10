export class RouteProvider
{
    calcDistance(A, B)
    {
        // Calculate the distance between to points.
        return Math.sqrt(
            Math.pow(Math.abs(B.coordinateX - A.coordinateX), 2) +
                Math.pow(Math.abs(B.coordinateY - A.coordinateY), 2)
        )
    }

    bestRouteCalc(clients) {
        const company = { coordinateX: 0, coordinateY: 0 }
        const clientPoints = clients.map(client => ({
            coordinateX: client.coordinateX,
            coordinateY: client.coordinateY
        }))

        // Ordenar os clientes pela distância da empresa
        clientPoints.sort(
            (a, b) => this.calcDistance(company, a) - this.calcDistance(company, b)
        )

        // Adicionar as coordenadas dos clientes na ordem da rota
        const route = [company, ...clientPoints]

        return route
    }
}
