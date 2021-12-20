import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { API } from '../enum/api';
import { XRequest } from '../utils/axios';
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

async function GetPayMent(orderId: Number) {
  return XRequest({
    url: `${API.PayMent}/${orderId}`,
    method: 'get',
  }).then(async (data) => {
    return Promise.resolve(data)
  }).catch(e => {
    console.log('报错了')
    console.log(e)
  })

}

export function useHandleOrder() {
  const router = useRouter()
  const PayString = ref('') as any
  // 提交订单
  const handleSubmit = async (orderId: number) => {
    PayString.value =  await GetPayMent(orderId)
    console.log("haha");
    console.log(PayString.value);
    console.log(router);
    router.push({path: '/orderAlipay', query: {htmlData: PayString.value}})
  }

  // 取消 => 返回上一页
  const handleCancle = () => {
    console.log("返回上一层");
    window.history.go(-1);
  }

  return {
    handleSubmit,
    handleCancle,
    PayString
  }
}