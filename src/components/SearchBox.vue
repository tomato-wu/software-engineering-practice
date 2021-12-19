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
import { SearchBook } from '../controllers/homepage';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: "SearchBox",
  components: {
    'a-input': Input,
    'a-input-search': Input.Search
  },
  setup() {
    const value = ref<string>('');
    const router = useRouter();

    const onSearch = async (keyword: string) => {

      await router.push("/search-detail/" + keyword);
      location.reload();
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
