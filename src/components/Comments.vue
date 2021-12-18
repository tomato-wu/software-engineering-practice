<template>
  <!-- 评论 -->
  <a-comment>
    <!-- 用户id -->
    <template #author>
      <a>{{ username }}</a>
    </template>
    <!-- 用户头像 -->
    <template #avatar>
      <img src="../assets/user.png" alt="Han Solo" />
    </template>
    <!-- 评论 -->
    <template #content>
      <p>{{ comment }}</p>
    </template>
    <!-- 时间 -->
    <template #datetime>
      <a-tooltip>
        <span>{{ time }}</span>
      </a-tooltip>
    </template>
  </a-comment>
</template>

<script lang="ts">
import { Comment, Avatar } from 'ant-design-vue'
import { LikeFilled, LikeOutlined, DislikeFilled, DislikeOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: "Comments",
  components: {
    'a-avatar': Avatar,
    'a-comment': Comment,
    LikeFilled,
    LikeOutlined,
    DislikeFilled,
    DislikeOutlined,
  },
  props: {
    username: {
      type: String,
      default: "",
    },
    comment: {
      type: String,
      default: "",
    },
    time: {
      type: String,
      default: "",
    },
  },
  setup() {


    return {

    };
  },
});
</script>

<style scoped>
</style>
