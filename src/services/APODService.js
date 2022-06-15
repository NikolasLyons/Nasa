import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"



class APODService{
  async getAPOD(){
    const res = await api.get()
    logger.log('-getAPOD-',res.data)
    AppState.APOD = res.data
  }
  async getDate(date){
    logger.log(date)
    const res = await api.get('', {params: {date}})
    logger.log(res.data)
    AppState.APOD = res.data
  }

}
export const apodService = new APODService()