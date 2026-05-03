import { AppDataModel } from "../model/App";
import { useAppStore } from "../stores/index";
import { INews } from "../types/News";

export class AppController extends AppDataModel {
  constructor() {
    super();
  }
}

export const appController = new AppController();
