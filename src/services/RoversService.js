import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { Roverapi } from "./AxiosService"


class RoversService{
  async getRovers(){
    const res = await Roverapi.get()
    logger.log(res.data)
    AppState.rovers = res.data

  }

}
export const roversService = new RoversService()