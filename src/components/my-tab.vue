<template>
    <ul class='my-tab'>
      <router-link 
        tag='li'
        v-for='(item,index) in tab'
        :key='index'
        :to='item.path'
        active-class="sel"
      >
       <span>{{item.name}}</span>
      </router-link>
    </ul>

</template>

<script>
export default {
   data(){
     return{
       tab:[{name:'职位',path:'/position'},
       {name:'搜寻',path:'/search'},
       {name:'我的',path:'/mine'},
       
      ]
     }
   }
}
</script>
<style scoped lang="less">
//样式中使用别名+‘~’
@import  '~style/index.less';
.my-tab{
  display: flex;
  .w(375);
  height: 44px;
  // background:skyblue;
  color:@white_o5;
  font-size: @fs-s;
  border-top: 1px solid @gray;
  width:100%;
  position:fixed;bottom:0;
  li{
    width: 33%;
    text-align: center;
    line-height: 44px;
    color: @gray;
    
  }
  .sel{
    color: @blue;
  
  }
  
}

</style>
