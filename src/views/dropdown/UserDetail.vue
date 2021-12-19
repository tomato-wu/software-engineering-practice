<template>
  <div class="user-detail">
    <!--基本信息区-->
    <div>
      <a-card class="for-card" title="基本信息">
        <get-detail v-if="tagName === 'get-detail'" @switch-edit="handleEdit" />
        <update-detail v-else @handleCancle="handleCancle"></update-detail>
      </a-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Card } from "ant-design-vue";
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import getDetail from "./UserDetailLook.vue";
import updateDetail from "./UserDetailUpdate.vue";

export default defineComponent({
  components: { getDetail, updateDetail, "a-card": Card },
  setup() {
    const route = useRoute();
    const user_id = ref("");
    onMounted(() => {
      user_id.value = route.params.id as string;
    });

    // 编辑保存的逻辑
    const tagName = ref("get-detail");
    const handleEdit = () => {
      tagName.value = "update-detail";
    };

    const handleCancle = () => {
      tagName.value = "get-detail";
    };

    return {
      handleEdit,
      handleCancle,
      tagName,
    };
  },
});
</script>

<style scoped>
.user-detail {
  overflow: hidden;
  box-sizing: border-box;
  width: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px rgb(175, 171, 171);
  transition: 0.8s;
}

.user-detail:hover {
  box-shadow: 0 0 30px rgb(182, 180, 180);
}
</style>
