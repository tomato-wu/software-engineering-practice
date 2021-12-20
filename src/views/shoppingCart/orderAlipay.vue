<template>
  <div>
    <div v-html="htmlData"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'orderAlipay',
  setup() {
    const route = useRoute()
    const htmlData = route.query.htmlData
    onMounted(() => {
      console.log(htmlData);

      document.forms[0].submit();
    })
    return {
      htmlData
    }

  },
})
</script>

<style scoped>
</style>