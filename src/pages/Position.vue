<template>
  <div class="recommend">
    <div class="wrapper">
      <div class="content">
        <ul class="list">
          <li v-for='(item,index) in result'
            :key='index'
          >
          <img :src="item.companyLogo" alt="">
          <div class="div1">
            <h2>{{item.companyName}}</h2>
            <div class="div2">
              <p class="p1">{{item.positionName}}</p>
              <p class="p2">{{item.city}}</p>
            </div>
           
            <p class="p3">{{item.createTime}}</p>
          </div>
          <p class="p4">{{item.salary}}</p>
          
          </li>
        </ul>
      </div>
    </div>
    
  </div>
</template>


<script>
import {getList} from 'api/position.js'
import BS from 'better-scroll'

export default {
  components:{},
  data(){
    return {
      result:[]
    }
  },
 methods:{
   inirBS(){
      this.bs=new BS('.wrapper',{})
    }
 },
  created(){
    getList().then((res)=>{
      // this.list=res.data.list
      console.log(res)
      let list=res.content.data.page.result
      list.map((item,index)=>{
        let s1=item.companyLogo
        let s2='http://www.lgstatic.com/'
        let s3=s2+s1
        item.companyLogo=s3  
        return list
      })
      this.result=list
 
    })
  },
    mounthed(){
      this.initBS()
    }
}
</script>

<style lang="less" >
@import '~style/index';
.recommend{
  .wrapper{
    background: pink;
    overflow: auto;
    position: fixed;
    top: 44px;
    bottom: 45px;
    right: 0;
    left: 0;
    font-size: @fs-s;
    .list{
      li{
        .w(375);
        height: 82px;
        background: skyblue;
        padding: 15px 10px 15px 15px;
        box-sizing: border-box;
        display: flex;
        img{
          width: 60px;
          height: 60px;
        }
        .div1{
          margin-left: 15px;
          background: red;
          width: 177px;
          h2{
            color: #333333;
            font-size: 16px;
          }
          .div2{
            display: flex;
            flex-direction: row;
            justify-content:flex-start; 
             color: #333333;
            font-size: 12px; 
          }
          .p3{
            color: #888888;
            font-size:10px;
            margin-top: 10px;
          }
        }
        .p4{
          color: @blue;
          font-size: 16px;
          text-align: center;
          line-height: 62px;
          // margin-left: 10px;
        }
      }
    }
  }
}
</style>
