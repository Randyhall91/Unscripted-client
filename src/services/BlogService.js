import { AppState } from "../AppState.js";
import { Post } from "../models/Post";
import { api } from "./AxiosService"




class BlogService {


  async GetBlogPosts() {
    const res = await api.get('api/blog-posts', {
      params:
        { 'populate': "*" },
    })
    // console.log(res.data.data);
    console.log(res.data.data.map(p => new Post(p)))
    AppState.posts = res.data.data.map(p => new Post(p))


  }

  async getBlogPostbyId(id) {
    const res = await api.get('api/blog-posts/' + id, {
      params:
        { 'populate': "*" },
    })
    console.log(res.data.data);

    AppState.activePost = new Post(res.data.data)
  }





}


export const blogService = new BlogService