


export class Contact{
  constructor(data){
    this.review = data.review
    this.reviewName = data.reviewName
    this.reviewImg = data.reviewImg.data.attributes.formats.thumbnail.url
  }
}