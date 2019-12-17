//和职位相关的接口处理
import axios from 'utils/axios.js'
//获取getlist数据
export const getList=()=>{
    return new Promise((resolve,reject)=> { 
        let url='/hehe/listmore.json?pageNo=2&pageSize=15' 
      axios.get(url).then((data)=>{resolve(data)})
      .catch((err)=>{reject(err)})
    })
  }