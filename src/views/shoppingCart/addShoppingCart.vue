<template>
  <TitleBar title="我的购物车" class="titleStyle"></TitleBar>
  <a-steps :current="1" class="StepStyle">
    <a-step>
      <!-- <span slot="title">Finished</span> -->
      <template #title>Finished</template>
      <template #description>
        <span>This is a description.</span>
      </template>
    </a-step>
    <a-step title="In Progress" sub-title="Left 00:00:08" description="This is a description." />
    <a-step title="Waiting" description="This is a description." />
  </a-steps>
  <ShoppingCartItem></ShoppingCartItem>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs, watch } from "vue";
import { Button, Row, Col, Tag, Checkbox, Steps, Step } from "ant-design-vue";
import { useRoute } from "vue-router";
import { GetCartItem } from "../../controllers/cart";
import TitleBar from "../../components/TitleBar.vue";
import ShoppingCartItem from "../../components/ShoppingCartItem.vue";



export default defineComponent({
  name: "BookDetail",
  components: {
    "a-button": Button,
    "a-row": Row,
    "a-col": Col,
    'a-tag': Tag,
    'a-checkbox': Checkbox,
    'a-steps': Steps,
    'a-step': Step,
    TitleBar,
    ShoppingCartItem
  },
  setup() {
    const route = useRoute()
    const BookId = route.params.BookId as string
    const cartItem = ref([])
    const plainOptions = ['Apple', 'Pear', 'Orange'];


    const state = reactive({
      indeterminate: true,
      checkAll: false,
      checkedList: ['Apple', 'Orange'],
    });
    const onCheckAllChange = (e: any) => {
      Object.assign(state, {
        checkedList: e.target.checked ? plainOptions : [],
        indeterminate: false,
      });
    };

    watch(
      () => state.checkedList,
      val => {
        state.indeterminate = !!val.length && val.length < plainOptions.length;
        state.checkAll = val.length === plainOptions.length;
      },
    );

    onMounted(async () => {
      cartItem.value = await GetCartItem()
      console.log(cartItem.value);
    })

    return {

      ...toRefs(state),
      plainOptions,
      onCheckAllChange,


    }
  },
});
</script>

<style scoped>
.titleStyle {
  margin-left: 20vw;
}
.StepStyle {
  padding: 0 290px;
}
</style>