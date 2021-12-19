import { reactive } from 'vue'
import { useRouter } from 'vue-router'
/**
 * 订单
 */


export function useOrder() {
  // 多选框参数
  const data = reactive({
    checkList: [],
    checkAll: false,
    indeterminate: true,
  });

  // 订单列表  => 请求后台返回(后续可以再新增一个 ids 数组存储订单id)
  const orderList = reactive({
    orders: ["a", "b", "c", "d"],
  });

  // 触发全选按钮
  const handleChange = (e: any) => {
    Object.assign(data, {
      checkList: e.target.checked ? orderList.orders : [],
      indeterminate: false,
    });
    console.log(data.checkList);
  };


  return {
    data,
    orderList,
    handleChange
  }
}


export function useHandleOrder() {
  
  // 提交订单
  const handleSubmit = () => {}

  // 取消 => 返回上一页
  const handleCancle = () => {
    useRouter().go(-1)
  }

  return {
    handleSubmit,
    handleCancle
  }
}