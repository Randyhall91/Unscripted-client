import { Imgs } from "./Imgs.js"
import { SingleImg } from "./SingleImg.js"



export class Home {
  constructor(data) {
    this.carousel = data.attributes.carousel.data.map(img => new Imgs(img))
    this.firstCarouselImg = this.carousel.slice(0, 1)
    this.carouselImgs = this.carousel
    this.quote = data.attributes.quote
    this.aboutHeader = data.attributes.aboutHeader
    this.aboutContent = data.attributes.aboutContent
    this.mugshot = data.attributes.mugshot.data.attributes.formats.medium.url
    this.aboutLifeStyleHeader = data.attributes.aboutLifeStyleHeader
    this.aboutLifeStyleContent = data.attributes.aboutLifeStyleContent
    this.lifeStylePicture = data.attributes.lifeStylePicture.data.attributes.formats.medium.url
    this.letsChatHeader = data.attributes.letsChatHeader
    this.letsChatContent = data.attributes.letsChatContent
  }
}