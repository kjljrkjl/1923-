<template>
  <div class="my-header">
   拉勾网

  </div>
</template>


<script>


export default {
  
}
</script>

<style lang="less">
@import '../style/index.less';
.my-header{
    .w(375);
    width: 100%;
    height: 44px;
    line-height: 44px;
    background:@blue;
    color: white;
    text-align: center;
    font-size: @fs-l;
    position:fixed;top:0;z-index: 999;

        
}

</style>
