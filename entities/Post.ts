export default class Post {
    constructor(
      public id: number,
      public title: string,
      public content: string,
      public dateCreated: Date
    ) {}
  }