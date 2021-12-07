<template>
  <a-input-search
    v-model:value="value"
    placeholder="书名 作者 ISBN"
    enter-button="搜索"
    size="large"
    @search="onSearch"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Input } from 'ant-design-vue'

export default defineComponent({
  name: "SearchBox",
  components: {
    'a-input': Input,
    'a-input-search': Input.Search
  },
  setup() {
    const value = ref<string>('');

    const onSearch = (searchValue: string) => {
      console.log('use value', searchValue);
      console.log('or use this.value', value.value);
    };

    return {
      value,
      onSearch,
    };
  },
});
</script>

<style scoped>
</style>
