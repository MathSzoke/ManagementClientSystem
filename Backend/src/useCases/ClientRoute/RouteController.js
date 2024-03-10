export class RouteController {
  constructor(RouteUseCase) {
    this.RouteUseCase = RouteUseCase
  }

  async getBestRoute(request, response) {
    const { clientId } = request.body

    return response
      .status(200)
      .json(await this.RouteUseCase.getBestRoute(clientId))
  }
}
