<template>
  <!--添加/修改收获地址-->
  <div v-if="!data.cityName" class="address--create" @click="setAddAddress">
    新增收货地址
  </div>
  <a-tag class="address__detail">
    <div class="col">
      <p>收货人</p>
      <p>{{ data.userName || "暂无" }}</p>
    </div>
    <div class="col">
      <p>所在地区</p>
      <p>{{ location || "暂无" }}</p>
    </div>
    <div class="col">
      <p>地址</p>
      <p>{{ data.detailAddress || "暂无" }}</p>
    </div>
    <div class="col">
      <p>手机</p>
      <p>{{ data.userPhone || "暂无" }}</p>
    </div>
    <div class="address--edit">
      <span @click="setUpdateAddress" class="address--edit__update">编辑</span>
      <a-popconfirm title="确认删除?" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <span class="address--edit__delete">删除</span>
      </a-popconfirm>
    </div>
  </a-tag>

  <!--修改收货地址-->
  <teleport to="body">
    <a-modal
      title="修改地址"
      v-model:visible="update_visible"
      :confirm-loading="confirmUpdateLoading"
      width="600px"
      @ok="handleUpdate"
    >
      <UserAddressUpdate ref="update" />
    </a-modal>
  </teleport>

  <!--新增收货地址-->
  <teleport to="body">
    <a-modal
      title="新增地址"
      v-model:visible="add_visible"
      :confirm-loading="confirmAddLoading"
      width="600px"
      @ok="handleAdd"
    >
      <UserAddressAdd ref="add" />
    </a-modal>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, ref, watch, computed } from "vue";
import { Space, Select, Input, Tag, Modal, Popconfirm, message } from "ant-design-vue";
import { XRequest } from "../../utils/axios";
import { API } from "../../enum/api";
import UserAddressUpdate from "./UserAddressUpdate.vue";
import UserAddressAdd from "./UserAddressAdd.vue";

interface UserAddress {
  userId: number;
  userName: string;
  cityName: string;
  detailAddress: string;
  userPhone: string;
  provinceName: string;
  regionName: string;
}

export default defineComponent({
  components: {
    "a-space": Space,
    "a-select": Select,
    "a-input": Input,
    "a-tag": Tag,
    "a-modal": Modal,
    "a-popconfirm": Popconfirm,
    UserAddressUpdate,
    UserAddressAdd,
  },
  setup() {
    const details = reactive({
      data: {
        userName: "",
        cityName: "",
        detailAddress: "",
        userPhone: "",
        provinceName: "",
        regionName: "",
      },
    });
    const getAddress = async () => {
      const res = await XRequest({
        url: API.ADDRESS,
      });
      details.data = res.data || details.data;
    };
    onMounted(() => {
      getAddress();
    });
    const location = computed(() => {
      return (
        details.data.provinceName +
        "-" +
        details.data.cityName +
        "-" +
        details.data.regionName
      );
    });

    // 新增地址
    const add = ref();
    const add_visible = ref(false);
    const confirmAddLoading = ref(false);
    const handleAdd = async () => {
      const obj = Object.assign({}, add.value.state);
      const res = await XRequest({
        url: API.ADDRESS,
        method: "POST",
        param: obj,
      });
      if (res.code === 200) {
        message.success("新增收货地址成功");
        window.location.reload();
        add_visible.value = false;
      }
    };
    const setAddAddress = () => {
      add_visible.value = true;
    };

    // 修改地址
    const update = ref();
    const update_visible = ref(false);
    const confirmUpdateLoading = ref(false);
    const handleUpdate = async () => {
      const obj = Object.assign({}, update.value.state);
      const res = await XRequest({
        url: API.ADDRESS,
        method: "PUT",
        param: obj,
      });
      if (res.code === 200) {
        message.success("修改收货地址成功");
        window.location.reload();
        update_visible.value = false;
      }
    };
    const setUpdateAddress = () => {
      update_visible.value = true;
    };

    // 删除地址
    const confirm = async () => {
      const res = await XRequest({
        url: API.DELETE_ADDRESS,
        method: "DELETE",
      });
      if (res.code === 200) {
        message.success("删除成功");
      }
    };

    return {
      add,
      update,
      add_visible,
      update_visible,
      ...toRefs(details),
      confirmUpdateLoading,
      confirmAddLoading,
      location,
      handleAdd,
      handleUpdate,
      setAddAddress,
      setUpdateAddress,
      confirm,
    };
  },
});
</script>

<style scoped>
/*按钮区域*/
.address--create {
  width: 100px;
  color: black;
  background-color: rgb(207, 245, 170);
  padding: 8px;
  margin-bottom: 20px;
  box-sizing: border-box;
  font-weight: bold;
  cursor: pointer;
}

/*操作文本区域 */
.address--edit {
  text-align: right;
}
.address--edit__update {
  color: rgb(145, 145, 235);
  cursor: pointer;
  margin: 5px;
}
.address--edit__delete {
  color: red;
  cursor: pointer;
}

.address__detail {
  display: flex;
  flex-direction: column;
  margin: auto;
  font-size: 0.9rem;
}
.col {
  display: flex;
  justify-content: start;
}
.col p:last-child {
  margin-left: 50px;
  justify-self: center;
}
.col p {
  margin: 10px 0;
}
</style>
