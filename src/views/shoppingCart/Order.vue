<template>
  <!--个人订单-->
  <base-nav label="个人订单" />
  <div class="order">
    <order-item />
    <order-item />
    <order-item />
  </div>
  <div class="buy">
    总价：<span class="price"></span>
    <a-button type="primary" class="buy--submit" @click="handleSubmit">确定</a-button>
    <a-button class="buy--cancle" @click="handleCancle">返回</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, watch } from "vue";
import { Checkbox, CheckboxGroup } from "ant-design-vue";
import OrderItem from "../../components/OrderItem.vue";
import BaseNav from "../../components/BaseNav.vue";
import { useHandleOrder, useOrder } from "../../controllers/order";

export default defineComponent({
  components: {
    "a-checkbox": Checkbox,
    "a-checkbox-group": CheckboxGroup,
    OrderItem,
    BaseNav,
  },
  setup() {
    /**
     * 个人订单的数据来自于书籍详情中的购买
     * 点击确认购买后调用远程接口存入数据库
     * 进入用户订单详情时通过用户 id 获取订单列表
     */
    const { handleSubmit, handleCancle } = useHandleOrder();

    return {
      handleSubmit,
      handleCancle,
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
  text-align: right;
  background-color: rgb(241, 239, 239);
}
.buy--submit {
  margin-right: 20px;
}

.price {
  margin-right: 150px;
}
</style>
