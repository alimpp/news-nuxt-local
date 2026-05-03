import { NewsDataModel } from "../model/News";
import { useNewsStore } from "../stores/index";
import { ICreateNews, INews } from "../types/News";
import { useUserStore } from "../stores/index";
import { navigateTo } from "nuxt/app";

import { useToast } from "../composables/useToast";
const { success, error } = useToast();

export class NewsController extends NewsDataModel {
  constructor() {
    super();
  }

  private newsStore = useNewsStore();
  private userStore = useUserStore();

  getAllNews(): void {
    const allNews: INews[] = this.newsStore.getNews();
    const formatData = this.newsFormater(allNews);
    this.newsStore.setNews(formatData);
  }

  liked(id: number | string): void {
    try {
      if (this.userStore.getAuthenticated) {
        const allNews: INews[] = this.newsStore.getNews();
        const targetNews = allNews.find((news) => {
          return news.id === id;
        });
        if (targetNews) {
          targetNews.likeFlag = true;
          targetNews.likes = targetNews.likes + 1;
        }
        localStorage.setItem("newsMockData", JSON.stringify(allNews));
      } else {
        navigateTo("/auth/login");
      }
    } catch (err) {
      error("Like news has functional error");
    }
  }

  disLiked(id: number | string): void {
    try {
      if (this.userStore.getAuthenticated) {
        const allNews: INews[] = this.newsStore.getNews();
        const targetNews = allNews.find((news) => {
          return news.id === id;
        });
        if (targetNews) {
          targetNews.likeFlag = false;
          targetNews.likes = targetNews.likes - 1;
        }
        localStorage.setItem("newsMockData", JSON.stringify(allNews));
      } else {
        navigateTo("/auth/login");
      }
    } catch (err) {
      error("Dislike news has functional error");
    }
  }

  createNews(data: ICreateNews): void {
    try {
      const creator = {
        ...this.userStore.getUser,
      };
      const id = this.newsStore.getNews().length
        ? this.newsStore.getNews().length + 1
        : 0;
      const formatData: INews = this.createNewsFormater({
        ...data,
        creator,
        id,
      });
      let allNews: INews[] = this.newsStore.getNews();
      allNews.push({ ...formatData });
      localStorage.setItem("newsMockData", JSON.stringify(allNews));
      success("News added to explore");
    } catch (err) {
      error("Create news has functional error");
    }
  }
}

export const newsController = new NewsController();
