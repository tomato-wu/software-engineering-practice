<template>
  <div>
    <!--个人订单-->
    <a-card>
      <div class="card-content">
        <div class="card-content__picture">
          <img :src="bookImg" alt="无法显示" />
        </div>
        <div class="card-content__detail">
          <div class="card-content__name col">{{ bookName }}</div>
          <div class="card-content__good col">
            <span class="price">￥{{ price }}</span>
            <span class="number">× {{ bookCount }}</span>
          </div>
        </div>
      </div>
      <div class="card-deliver">
        <div class="card-deliver__left">
          <span>配送</span>
          <span class="tag">可选京准达</span>
        </div>
        <div class="card-deliver__right">
          <span>京东快递（送货上门）</span>
          <span>{{ new Date().toLocaleDateString() }}</span>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { Card } from "ant-design-vue";

export default defineComponent({
  components: {
    "a-card": Card,
  },
  props: {
    bookName: {
      type: String,
      default: "",
    },
    price: {
      type: String,
      default: "",
    },
    bookImg: {
      type: String,
      default: "",
    },
    bookCount: {
      type: String,
      default: "",
    },
  },
  setup() { },
});
</script>

<style scoped>
/*容器设置 */
.ant-card {
  width: 40%;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0 0 5px rgb(221, 216, 216);
  margin-bottom: 50px;
}
.card-content {
  display: flex;
  box-sizing: border-box;
  padding: 10px;
}

/*左右宽度设置*/
.card-content__picture {
  width: 30%;
}
.card-content__detail {
  width: 63%;
}

/*容器内容设置*/
.card-content__picture img {
  width: 100%;
  height: 180px;
}

.card-content__detail {
  display: flex;
  flex-direction: column;
  font-size: 20px;
  margin-left: 50px;
}
.card-content__name {
  font-family: sans-serif;
}
.card-content__good {
  display: flex;
  justify-content: space-between;
}
.card-content__good .price {
  color: red;
  margin-right: 20px;
}
.col {
  /*设置省略文本*/
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 20px 0;
}

/*下方配送信息设置 */
.card-deliver {
  display: flex;
  justify-content: space-between;
}
.card-deliver__left .tag {
  display: inline-block;
  box-sizing: border-box;
  margin-left: 20px;
  padding: 2px;
  color: red;
  border: rgb(240, 128, 128) 1px solid;
  background-color: transparent;
  border-radius: 5px;
  font-weight: 5px;
}

.card-deliver__right {
  display: flex;
  flex-direction: column;
}
</style>
