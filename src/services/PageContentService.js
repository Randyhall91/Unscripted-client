import { AppState } from "../AppState.js";
import { Home } from "../models/Home.js";
import { PricingPage } from "../models/PricingPage.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";



class PageContentService {


  async getHomePageContent() {
    const res = await api.get('api/homepage', {
      params:
        { 'populate': "*" },
    })
    // logger.log(res.data.data.attributes);
    // logger.log(new Home(res.data.data.attributes));
    AppState.homePage = new Home(res.data.data.attributes)
  }
  async getPricingPageContent(){
    const res = await api.get('api/investmentpage', {
      params:
        { 'populate': "*" },
    })
    // logger.log(new PricingPage(res.data.data.attributes))
    AppState.pricingPage = new PricingPage(res.data.data.attributes)
  }
}

export const pageContentService = new PageContentService()