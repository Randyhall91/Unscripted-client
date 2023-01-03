

export class PricingPage{
  constructor(data){
    this.header = data.header
    this.headerImg= data.headerImg.data.attributes.formats.medium.url
    this.description = data.description
    this.descriptionImg = data.descripitionImg.data.attributes.formats.medium.url
    this.session = data.ession
  }
}