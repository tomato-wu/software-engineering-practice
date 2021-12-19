<template>
  <!--更新表单区域-->
  <div class="form">
    <a-form :model="formItem" :label-col="{ span: 3 }">
      <a-form-item label="用户名">
        <a-input v-model:value="formItem.loginName" />
      </a-form-item>
      <a-form-item label="用户昵称">
        <a-input v-model:value="formItem.nickName" />
      </a-form-item>
      <a-form-item label="个人简介">
        <a-textarea v-model:value="formItem.introduceSign" />
      </a-form-item>
      <a-form-item label="密码">
        <a-input v-model:value="formItem.password" />
      </a-form-item>
      <a-form-item style="text-align: center">
        <a-button class="suc-btn" @click="handleSubmit">完成</a-button>
        <a-button class="can-btn" @click="handleCancle">取消</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { Textarea, message, Card, Input, Form, FormItem } from "ant-design-vue";
import { XRequest } from "../../utils/axios";

export default defineComponent({
  components: {
    "a-textarea": Textarea,
    "a-card": Card,
    "a-input": Input,
    "a-form": Form,
    "a-form-item": FormItem,
  },
  setup(props, { emit }) {
    // 取消编辑
    const handleCancle = () => {
      emit("handleCancle");
    };

    // 更新个人信息
    const handleSubmit = async () => {
      if (formItem.introduceSign && formItem.nickName && formItem.password) {
        const res = await XRequest({
          url: "/user/update",
          method: "post",
          param: formItem,
        });
        if (res.code === 200) {
          message.success("修改成功");
          emit("handleCancle");
        }
      } else {
        message.warn("数据信息未填写齐全！");
      }
    };

    const formItem = reactive({
      loginName: localStorage.getItem("username") || "",
    } as any);

    return {
      handleCancle,
      handleSubmit,
      formItem,
    };
  },
});
</script>

<style scoped>
/*设置输入框的长度*/
.ant-input {
  width: 30vw;
}
.suc-btn {
  margin-right: 20px;
}
</style>
