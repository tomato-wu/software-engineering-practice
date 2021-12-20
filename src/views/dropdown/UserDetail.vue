<template>
  <div @click="setBack" class="back">返回首页</div>
  <base-nav label="基本信息" />
  <div class="user-detail">
    <!--基本信息区-->
    <div class="for-detail">
      <get-detail v-if="tagName === 'get-detail'" @switch-edit="handleEdit" />
      <update-detail v-else @handleCancle="handleCancle"></update-detail>
    </div>
  </div>
  <base-nav label="收货地址" />
  <div class="user-address">
    <!--收获地址-->
    <div class="for-address">
      <user-address
        v-if="addressName === 'get-address'"
        @switch-edit="handleAddressEdit"
      />
      <user-address-delete
        v-else
        @handleCancle="handleAddressCancle"
      ></user-address-delete>
    </div>
  </div>
</template>

<script lang="ts">
import { Card } from "ant-design-vue";
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import getDetail from "./UserDetailLook.vue";
import updateDetail from "./UserDetailUpdate.vue";
import BaseNav from "../../components/BaseNav.vue";
import UserAddress from "./UserAddress.vue";
import { useGo } from "../../utils/usePage";

export default defineComponent({
  components: {
    getDetail,
    updateDetail,
    "a-card": Card,
    BaseNav,
    UserAddress,
  },
  setup() {
    const route = useRoute();
    const user_id = ref("");
    onMounted(() => {
      user_id.value = route.params.id as string;
    });

    // 基本信息编辑保存的逻辑
    const tagName = ref("get-detail");
    const handleEdit = () => {
      tagName.value = "update-detail";
    };
    const handleCancle = () => {
      tagName.value = "get-detail";
    };

    // 收款地址编辑保存的逻辑
    const addressName = ref("get-address");
    const handleAddressEdit = () => {
      addressName.value = "delete-address";
    };
    const handleAddressCancle = () => {
      addressName.value = "get-address";
    };

    //返回
    const setBack = () => {
      useGo()("/homePage");
    };

    return {
      handleEdit,
      handleCancle,
      handleAddressEdit,
      handleAddressCancle,
      setBack,
      tagName,
      addressName,
    };
  },
});
</script>

<style scoped>
.back {
  float: right;
  font-size: 1rem;
  margin: 50px 100px 0 0;
  color: grey;
  cursor: pointer;
}
.back::before {
  clear: left;
}
.user-detail {
  overflow: hidden;
  box-sizing: border-box;
  width: 600px;
  margin: 30px auto;
  transition: 0.8s;
}

.user-address {
  width: 600px;
  margin: auto;
}
.address-detail {
  margin: auto;
}

.user-detail:hover {
  /* box-shadow: 0 0 30px rgb(182, 180, 180); */
}
</style>
