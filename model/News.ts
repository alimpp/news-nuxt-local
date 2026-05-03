import { BaseApp } from "../core/BaseApp";
import { INews } from "../types/News";
import { ICreateNews } from "../types/News";

export class NewsDataModel extends BaseApp<any> {
  constructor() {
    super("news");
  }

  newsFormater(data: INews[]) {
    return data.map((news: INews) => {
      return {
        ...news,
        createAt: news.createAt.slice(0, 10),
        creator: {
          ...news.creator,
          fullname: news.creator.firstname + " " + news.creator.lastname,
          fristChar:
            news.creator.firstname[0].toUpperCase() +
            news.creator.lastname[0].toUpperCase(),
        },
      };
    });
  }

  createNewsFormater(param: ICreateNews): INews {
    const date = new Date();
    const createAt = date.toISOString();

    const data = { ...param, likes: 0, likeFlag: false, createAt };
    return data;
  }
}
