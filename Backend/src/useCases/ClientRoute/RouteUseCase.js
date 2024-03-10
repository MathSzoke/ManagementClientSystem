export class RouteUseCase {
  constructor(Client, RoutesProvider) {
    this.Client = Client
    this.RoutesProvider = RoutesProvider
  }

  async getBestRoute(clientIds) {
    let entities = null

    if (clientIds != null && clientIds.length > 0) {
      entities = []
      for (const clientId of clientIds) {
        const entity = await this.Client.getClientByID(clientId)
        if (entity) {
          entities = entities.concat(entity)
        }
      }
    } else {
      entities = await this.Client.getAllClients()
    }

    return this.RoutesProvider.bestRouteCalc(entities)
  }
}
