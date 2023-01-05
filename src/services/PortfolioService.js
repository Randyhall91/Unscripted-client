import { AppState } from "../AppState.js";
import { PortfolioImgs } from "../models/PortfolioImgs.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js"



class PortfolioService {

  async getPortfolio() {
    const res = await api.get('api/portfolio', {
      params:
        { 'populate': "*" },
    })
    console.log(res.data.data.attributes.imgs.data);
    AppState.portfolioImgs = res.data.data.attributes.imgs.data.map(img => new PortfolioImgs(img))
  }
}

export const portfolioService = new PortfolioService()