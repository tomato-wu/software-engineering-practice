<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal" theme="dark">
    <a-menu-item
      v-for="item in NavItem"
      :key="item.categoryId"
      @click="GetNavTagDetail(item.categoryId)"
      >{{ item.categoryName }}</a-menu-item
    >
  </a-menu>

  <!--个人信息/退出登录-->
  <a-dropdown class="dropdown">
    <a-avatar>
      <template #icon>
        <UserOutlined />
      </template>
    </a-avatar>
    <template #overlay>
      <a-menu>
        <a-menu-item @click="handleUserDetail">
          <a href="javascript:;">个人信息</a>
        </a-menu-item>
        <a-menu-item @click="handleUserOrder">
          <a href="javascript:;">购物车</a>
        </a-menu-item>
        <a-menu-item @click="handleLogout">
          <a href="javascript:;">退出登录</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>

  <!-- 顶部搜索栏 -->
  <a-row class="margin-top-30">
    <a-col :span="3" :offset="4">
      <span class="logoText">叮叮图书</span>
    </a-col>
    <a-col :span="12">
      <SearchBoxVue />
    </a-col>
  </a-row>

  <!-- 图书项 -->
  <a-row :gutter="16" class="row">
    <a-col
      class="gutter-row margin-top-30"
      :span="4"
      v-for="(item, index) in bookItem.records"
      :key="index"
    >
      <!--到时v-for拿数据渲染然后用 handleDetail跳转详情-->
      <BaseBookItemVue
        @click="handleDetail(item.id)"
        :bookName="item.bookName"
        :author="item.author"
        :img-url="item.imgUrl"
      />
    </a-col>
  </a-row>

  <!-- 分页 -->
  <!--感觉一个row来包裹应该就好-->
  <a-row style="margin-top: 80px" justify="end">
    <a-col :span="9">
      <a-pagination
        :total="85"
        :show-total="(total) => `一共 ${total} 本图书`"
        :page-size="20"
        v-model:current="current1"
      />
    </a-col>
  </a-row>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { Menu, Row, Col, Pagination, Avatar, Dropdown, message } from "ant-design-vue";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";
import BaseBookItemVue from "../components/BaseBookItem.vue";
import SearchBoxVue from "../components/SearchBox.vue";
import { useRouter } from "vue-router";
import { BookItem, GetNavItem } from "../controllers/homepage";
import { useGo } from "../utils/usePage";
import { XRequest } from "../utils/axios";
import { API } from "../enum/api";

export default defineComponent({
  name: "homePage",
  components: {
    "a-menu": Menu,
    "a-menu-item": Menu.Item,
    "a-row": Row,
    "a-col": Col,
    "a-pagination": Pagination,
    "a-avatar": Avatar,
    "a-dropdown": Dropdown,
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
    BaseBookItemVue,
    SearchBoxVue,
    UserOutlined,
  },
  setup() {
    const current = ref<string[]>(["mail"]);
    const router = useRouter();
    const NavItem = ref([]) as any;
    const bookItem = ref([]) as any;
    const current1 = ref<number>(1);

    const go = useGo();

    onMounted(async () => {
      NavItem.value = await GetNavItem();
      bookItem.value = await BookItem(1);
      console.log(bookItem.value);
    });

    // 图书详情
    const handleDetail = (item: any) => {
      router.push("/detail/" + item);
    };
    const GetNavTagDetail = (item: Number) => {
      router.push("/nav-detail/" + item);
    };

    // 分页
    const onChange = (pageNumber: number) => {
      console.log("Page: ", pageNumber);
    };

    // 个人详情跳转
    const handleUserDetail = () => {
      go("/user-detail");
    };

    // 个人订单
    const handleUserOrder = () => {
      go("/order");
    };

    // 退出登录
    const handleLogout = async () => {
      const res = await XRequest({
        url: API.LOGIN_OUT,
        method: "POST",
      });
      if (res.code === 200) {
        message.success("退出登录成功");
        go("/");
      }
    };

    return {
      current,
      handleDetail,
      NavItem,
      current1,
      bookItem,
      onChange,
      GetNavTagDetail,
      handleUserDetail,
      handleUserOrder,
      handleLogout,
    };
  },
});
</script>

<style scoped>
.margin-top-30 {
  margin-top: 30px;
}
.logoText {
  font-size: 25px;
}

.row {
  margin: 30px 0 0 !important;
}
.gutter-row {
  text-align: center;
}
.dropdown {
  top: -39px;
  right: 20px;
  float: right;
}
.dropdown::after {
  clear: left;
}
</style>
