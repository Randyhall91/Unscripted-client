import { Imgs } from "./Imgs.js"



export class Post {
  constructor(data) {
    this.id = data.id
    this.title = data.attributes.title
    this.body = data.attributes.body
    this.headerImg = data.attributes.headerImg.data.attributes.formats.medium
    this.extraImgs = data.attributes.extraImgs.data.map(img => new Imgs(img))

  }
}