import { AppState } from "../AppState.js";
import { Home } from "../models/Home.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";



class PageContentService {


  async getHomePageContent() {
    const res = await api.get('api/home-pages', {
      params:
        { 'populate': "*" },
    })
    logger.log(res.data);
    logger.log(new Home(res.data.data[0]));
    AppState.homePage = new Home(res.data.data[0])
  }
}

export const pageContentService = new PageContentService()