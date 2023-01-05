


export class PortfolioImgs {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.url = data.attributes.formats.medium.url
  }
}