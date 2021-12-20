<template>
  <!--结算页面  html格式接受后端返回的form表单-->
  <div>
    <div v-html="settlement" class="settlement"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const settlement = ref();

    return {
      settlement,
    };
  },
});
</script>
