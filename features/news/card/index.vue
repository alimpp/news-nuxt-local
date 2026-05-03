<template>
  <BaseCard px="px-10" py="py-10">
    <div class="flex flex-column">
      <div class="flex">
        <div class="flex w-70">
          <BaseAvatar
            :character="source.creator.fristChar"
            :bg="source.creator.avatarColor"
          />
          <div class="flex flex-column justify-center px-7">
            <span class="f-s-13 f-w-500">{{ source.creator.fullname }}</span>
            <span class="f-s-11 f-w- 400 color-gray">{{
              source.creator.email
            }}</span>
          </div>
        </div>
        <div class="flex flex-column align-end w-30">
          <span class="color-gray f-s-10 f-w-100">{{ source.createAt }}</span>
          <span class="color-gray f-s-10 f-w-100">{{ source.category }}</span>
        </div>
      </div>
      <span class="f-s-14 f-w-500 pt-10">{{ source.title }}</span>
      <div class="news-content-custom-style py-10 px-10 mt-5">
        <span class="f-s-12 f-w-400 pt-10">{{ source.content }}</span>
      </div>
      <div class="flex mt-10">
        <div class="flex align-center">
          <IconHeartFill
            @click="disLiked"
            class="cursor-pointer"
            v-if="source.likeFlag"
          />
          <IconHeart @click="liked" class="cursor-pointer" v-else />
          <span class="color-red f-s-12 px-5">{{ source.likes }}</span>
        </div>
        <div
          @click="share"
          class="flex align-center cursor-pointer mx-5"
          v-if="userStore.getUser.id != source.creator.id"
        >
          <IconShare />
          <span class="color-gray f-s-10 px-5">Share With You</span>
        </div>
      </div>
    </div>
  </BaseCard>
</template>

<script setup>
import { useUserStore } from "../../../stores";
import { newsController } from "../../../controllers/News";
import { navigateTo } from "nuxt/app";

const userStore = useUserStore();

const props = defineProps({
  source: { default: {}, type: Object },
});

const liked = () => {
  newsController.liked(props.source.id);
};

const disLiked = () => {
  newsController.disLiked(props.source.id);
};

const share = () => {
  const shareData = {
    title: props.source.title,
    content: props.source.content,
    category: props.source.category,
  };
  newsController.createNews(shareData);
  navigateTo("/profile/myNews");
};
</script>

<style scoped>
.news-content-custom-style {
  background: rgba(255, 0, 0, 0.184);
  border-left: 2px solid red;
  border-radius: 0 5px 5px 0;
}
</style>
