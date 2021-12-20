<template>
  <div class="whole-address">
    <a-space class="address__city">
      <a-select
        v-model:value="state.provinceName"
        style="width: 120px"
        :options="provinceData.map((pro) => ({ value: pro }))"
      >
      </a-select>
      <a-select
        v-model:value="state.cityName"
        style="width: 120px"
        :options="cities.map((city) => ({ value: city }))"
      >
      </a-select>
      <a-select
        v-model:value="state.regionName"
        style="width: 120px"
        :options="regions.map((region) => ({ value: region }))"
      >
      </a-select>
    </a-space>
    <div class="address__location mar-top">
      <a-input v-model:value="state.detailAddress"></a-input>
    </div>
    <div class="address__username mar-top">
      <a-input v-model:value="state.userName"></a-input>
    </div>
    <div class="address__phone mar-top">
      <a-input v-model:value="state.userPhone"></a-input>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, watch, onMounted } from "vue";
import { Space, Select, Input } from "ant-design-vue";
import { XRequest } from "../../utils/axios";
import { API } from "../../enum/api";

/*假数据模拟*/
const provinceData = ["广东", "Guangdong", "Zhejiang"];
const cityData = {
  广东: ["广州", "Guangzhou", "Dongguan", "Foshan"],
  Guangdong: ["广州", "Guangzhou", "Dongguan", "Foshan"],
  Zhejiang: ["Hangzhou", "Ningbo", "Wenzhou"],
};
const regionData = {
  广州: ["荔湾", "Tianhe", "Panyu"],
  Guangzhou: ["荔湾", "Tianhe", "Panyu"],
  Dongguan: ["Nancheng", "Wancheng"],
  Foshan: ["Nanhai", "Chancheng"],
  Hangzhou: ["Shangcheng"],
  Ningbo: ["Jiangdong"],
  Wenzhou: ["Lucheng"],
};

export default defineComponent({
  components: {
    "a-space": Space,
    "a-select": Select,
    "a-input": Input,
  },
  setup() {
    const province = provinceData[0];
    const city = cityData[province][0];
    const state = reactive({
      provinceName: province,
      cityName: cityData[province][0],
      regionName: regionData[city][0],
      detailAddress: "",
      userName: "jzy",
      userPhone: "13726779599",
    });
    // init data
    onMounted(async () => {
      const res = await XRequest({
        url: API.ADDRESS,
      });
      Object.assign(state, res.data || {});
    });
    // 市
    const cities = computed(() => {
      return cityData[state.provinceName];
    });
    // 区
    const regions = computed(() => {
      return regionData[state.cityName];
    });

    watch(
      () => state.provinceName,
      (val) => {
        state.cityName = cityData[val][0];
      }
    );

    watch(
      () => state.cityName,
      (val) => {
        state.regionName = regionData[val][0];
      }
    );

    return {
      state,
      cities,
      regions,
      provinceData,
    };
  },
});
</script>

<style scoped>
.whole-address {
  margin-left: 20px;
}
.whole-address >>> .ant-input {
  width: 300px;
}
.address__city::before {
  content: "省市区";
  margin-right: 90px;
}

.address__location::before {
  content: "详细住址";
  margin-right: 70px;
}
.address__username::before {
  content: "收货人地址";
  margin-right: 60px;
}
.address__phone::before {
  content: "收获人电话号码";
  margin-right: 40px;
}
.mar-top {
  margin-top: 20px;
}

/*按钮区域*/
.address--create {
  width: 100px;
  color: black;
  background-color: chartreuse;
  padding: 5px;
  box-sizing: border-box;
  font-weight: bold;
  cursor: pointer;
}
</style>
