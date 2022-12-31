import { Imgs } from "./Imgs.js"



export class Home {
  constructor(data) {
    this.carousel = data.carousel.data.map(img => new Imgs(img))
    this.quote = data.quote
    this.aboutHeader = data.aboutHeader
    this.aboutContent = data.aboutContent
    this.mugshot = data.mugshot.data.attributes.formats.medium.url
    this.aboutLifeStyleHeader = data.aboutLifeStyleHeader
    this.aboutLifeStyleContent = data.aboutLifeStyleContent
    this.lifeStylePicture = data.lifeStylePicture.data.attributes.formats.medium.url
    this.letsChatHeader = data.letsChatHeader
    this.letsChatContent = data.letsChatContent
    this.logo = data.logo.data.attributes.formats.thumbnail.url
  }
}