<template>
  <!-- 说明 -->
  <TitleBar title="我的购物车" class="titleStyle"></TitleBar>
  <!-- 步骤条 -->
  <a-steps :current="1" class="StepStyle">
    <a-step>
      <!-- <span slot="title">Finished</span> -->
      <template #title>我的购物车</template>
      <template #description>
        <span>This is a description.</span>
      </template>
    </a-step>
    <a-step title="填写订单" sub-title="Left 00:00:08" description="This is a description." />
    <a-step title="完成订单" description="This is a description." />
  </a-steps>
  <div v-for="(item,index) in cartItem" :key="index">
    <!-- 付款项 -->
    <ShoppingCartItem
      :bookName="item.bookName"
      :author="item.author"
      :publishingHouse="item.publishingHouse"
      :originalPrice="item.originalPrice"
      :bookCount="item.bookCount"
      :imgUrl="item.imgUrl"
      :bookId="item.bookId"
    ></ShoppingCartItem>
  </div>

  <div class="payStyle">
    <a-button type="primary" @click="GetAllCartToOrder">结算</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs, watch } from "vue";
import { Button, Row, Col, Tag, Checkbox, Steps, Step } from "ant-design-vue";
import { useRoute } from "vue-router";
import { addBookCartItem, GetAllCartToOrderFun, GetCartItem } from "../../controllers/cart";
import TitleBar from "../../components/TitleBar.vue";
import ShoppingCartItem from "../../components/ShoppingCartItem.vue";
import router from "../../router";



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
    const BookId = route.params.BookId as any
    const cartItem = ref([]) as any
    const orderId = ref<number>(1)

    onMounted(async () => {

      cartItem.value = await GetCartItem()
      console.log(cartItem.value);
    })
    const GetAllCartToOrder = async () => {
      // 点击结算获取购物单ID
      orderId.value = await GetAllCartToOrderFun()
      router.push("/order/" + orderId.value);


    }
    return {
      cartItem,
      GetAllCartToOrder
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
.payStyle {
  width: 20vw;
  margin: 50px 70vw 0;
}
.totalStyle {
  margin: 30px;
}
</style>