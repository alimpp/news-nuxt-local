import { BaseStore } from "../../core/BaseStore";
import { StoreManager } from "../../core/StoreManager";

import { news } from "../../mock/news";
import { INews } from "../../types/News";

interface IState {
  news: INews[];
}

export class NewsStore extends BaseStore<IState> {
  private static _instance: NewsStore;

  public static getInstance(): NewsStore {
    if (!NewsStore._instance) {
      NewsStore._instance = new NewsStore();
    }
    return NewsStore._instance;
  }

  private constructor() {
    super("application", {
      news: [],
    });
    StoreManager.register(this);
  }

  public getNews(): INews[] {
    return this._state.news;
  }

  public setNews(data: INews[]) {
    this._state.news = data;
  }

  public configNewsMock(): void {
    const newsList = localStorage.getItem("newsMockData");
    if (!newsList) {
      const json = JSON.stringify(news);
      localStorage.setItem("newsMockData", json);
      this._state.news = news;
    } else {
      const parse = JSON.parse(newsList);
      this._state.news = parse;
    }
  }

  public reset() {
    this._state.news = [];
  }
}
