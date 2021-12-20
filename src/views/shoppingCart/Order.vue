<template>
  <TitleBarVue title="个人订单页面" class="TitleStyle"></TitleBarVue>
  <!--个人订单-->
  <div class="order" v-for="(item,index) in bookBriefVOList.bookBriefVOList" :key="index">
    <order-item
      :bookName="item.bookName"
      :bookCount="item.bookCount"
      :price="item.price"
      :bookImg="item.bookImg"
    />
  </div>
  <div class="buy">
    总价：
    <span class="price">￥{{ bookBriefVOList.totalPrice }}</span>
    <a-button type="primary" class="buy--submit" @click="handleSubmit">确定</a-button>
    <a-button class="buy--cancle" @click="handleCancle">返回</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, toRefs, watch } from "vue";
import { Checkbox, CheckboxGroup } from "ant-design-vue";
import OrderItem from "../../components/OrderItem.vue";
import BaseNav from "../../components/BaseNav.vue";
import { useHandleOrder, useOrder } from "../../controllers/order";
import { useRoute } from "vue-router";
import { GetAllOrderDetail } from "../../controllers/cart";
import TitleBarVue from "../../components/TitleBar.vue";

export default defineComponent({
  components: {
    "a-checkbox": Checkbox,
    "a-checkbox-group": CheckboxGroup,
    OrderItem,
    TitleBarVue,
  },
  setup() {
    /**
     * 个人订单的数据来自于书籍详情中的购买
     * 点击确认购买后调用远程接口存入数据库
     * 进入用户订单详情时通过用户 id 获取订单列表
     */
    const route = useRoute()
    const orderId = route.params.orderId as any
    const bookBriefVOList = ref([]) as any

    onMounted(async () => {
      console.log(orderId);


      bookBriefVOList.value = await GetAllOrderDetail(orderId)
      console.log(bookBriefVOList.value);


    })

    const { handleSubmit, handleCancle } = useHandleOrder();

    return {
      handleSubmit,
      handleCancle,
      bookBriefVOList
    };
  },
});
</script>

<style scoped>
/*底部购买按钮*/
.buy {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: right;
  background-color: rgb(241, 239, 239);
}
.buy--submit {
  margin-right: 20px;
}

.price {
  margin-right: 130px;
  font-size: larger;
  color: red;
}
.TitleStyle {
  margin: 40px 30vw;
}
</style>
