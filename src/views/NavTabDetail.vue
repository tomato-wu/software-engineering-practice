<template>
  <TitleBar title="文学"></TitleBar>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { Button, Row, Col, Tag } from "ant-design-vue";
import { useRoute } from "vue-router";
import { BookDetail, GetComments, GetNavDetail } from "../controllers/homepage";
import Comments from "../components/Comments.vue"
import TitleBar from '../components/TitleBar.vue'

export default defineComponent({
  name: "BookDetail",
  components: {
    "a-button": Button,
    "a-row": Row,
    "a-col": Col,
    'a-tag': Tag,
    Comments,
    TitleBar
  },
  setup() {
    const route = useRoute()
    const typeId = route.params.typeid as string
    const NavDetail = ref([]) as any
    onMounted(async () => {

      NavDetail.value = await GetNavDetail(typeId)

    })

    return {

      NavDetail

    }
  },
});
</script>

<style scoped>
</style>
