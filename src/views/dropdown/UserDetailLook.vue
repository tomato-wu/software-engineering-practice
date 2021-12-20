<template>
  <a-row :gutter="30">
    <a-col class="flex key" :lg="6">
      <div v-for="item in keys" :key="item">{{ item }}</div>
    </a-col>

    <a-col class="flex value" :span="12" :md="10" :pull="2">
      <div v-for="item in user_detail" :key="item">{{ item }}</div>
    </a-col>
    <a-col class="is-active editor" :span="4">
      <a-button type="primary" @click="handleClick">编辑</a-button>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { XRequest } from "../../utils/axios";

export default defineComponent({
  setup(props, { emit }) {
    const keys = ["登录用户名", "用户昵称", "个人简介"];
    const user_detail = ref<string[]>([]);

    onMounted(() => {
      getValues();
    });

    // 获取用户详情信息
    const getValues = async () => {
      const value = await XRequest({
        url: "/user/info",
        options: {
          isToken: true,
        },
      });
      user_detail.value.push(value.data["loginName"]);
      user_detail.value.push(value.data["nickName"]);
      user_detail.value.push(value.data["introduceSign"]);
      console.log(user_detail.value);
    };

    const handleClick = () => {
      emit("switchEdit");
    };

    return {
      keys,
      user_detail,
      handleClick,
    };
  },
});
</script>

<style scoped>
.flex {
  display: flex;
  flex-direction: column;
  text-align: left;
  box-sizing: border-box;
}
.flex div {
  padding: 20px;
}
</style>
