import { AppState } from "../AppState.js";
import { PortfolioImgs } from "../models/PortfolioImgs.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js"



class PortfolioService {

  async getPortfolio() {
    const res = await api.get('api/upload/files')
    // console.log(res.data);
    AppState.portfolioImgs = res.data.map(img => new PortfolioImgs(img))
  }
}

export const portfolioService = new PortfolioService()