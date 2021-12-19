<template>
  <!--个人订单-->
  <base-nav label="个人订单" />
  <div class="order">
    <!--全选按钮-->
    <a-checkbox
      v-model:checked="checkAll"
      :indeterminate="indeterminate"
      @change="handleChange"
    ></a-checkbox>
    <a-checkbox-group v-model:value="checkList">
      <a-row>
        <!--value绑定的是订单 ip
        v-for 遍历a-col得到页面列表-->
        <a-col v-for="item in orders" :key="item" :span="24">
          <a-checkbox :value="item">
            <order-item :order="item" />
          </a-checkbox>
        </a-col>
      </a-row>
    </a-checkbox-group>
  </div>
  <div class="buy">
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

    const { data, orderList, handleChange } = useOrder();
    const { handleSubmit, handleCancle } = useHandleOrder();

    // 动态更新全选按钮
    watch(
      () => data.checkList,
      (val) => {
        data.indeterminate = !!val.length && val.length < orderList.orders.length;
        data.checkAll = val.length === orderList.orders.length;
      }
    );

    return {
      ...toRefs(data),
      ...toRefs(orderList),
      handleChange,
      handleSubmit,
      handleCancle,
    };
  },
});
</script>

<style scoped>
.order {
  width: 70%;
  margin: auto;
}
.ant-checkbox-wrapper {
  width: 100%;
}
.ant-checkbox-group {
  width: 100%;
}

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
</style>
