


export class PortfolioImgs {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.url = data.formats.medium.url
  }
}