import { AppState } from "../AppState.js";
import { Home } from "../models/Home.js";
import { api } from "./AxiosService.js";



class PageContentService {


  async getHomePageContent() {
    const res = await api.get('api/home-pages', {
      params:
        { 'populate': "*" },
    })
    console.log(res.data.data[0]);
    console.log(new Home(res.data.data[0]));
    AppState.homePage = new Home(res.data.data[0])
  }
}

export const pageContentService = new PageContentService()