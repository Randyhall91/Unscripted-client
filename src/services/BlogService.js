import { AppState } from "../AppState.js";
import { Post } from "../models/Post";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService"




class BlogService {


  async GetBlogPosts() {
    const res = await api.get('api/blog-posts', {
      params:
        { 'populate': "*" },
    })
    logger.log(res.data.data);
    logger.log(res.data.data.map(p => new Post(p)))
    AppState.posts = res.data.data.map(p => new Post(p))


  }

  async getBlogPostbyId(id) {
    const res = await api.get('api/blog-posts/' + id, {
      params:
        { 'populate': "*" },
    })
    logger.log(res.data.data);

    AppState.activePost = new Post(res.data.data)
  }





}


export const blogService = new BlogService