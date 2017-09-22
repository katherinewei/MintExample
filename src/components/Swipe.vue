<template>
  <div class="page-swipe">
    <p>基础用法</p>
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <p>隐藏 indicators</p>
    <mt-swipe :show-indicators="false">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <p>取消自动播放</p>
    <mt-swipe :auto="0">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <p>设置默认显示页</p>
    <mt-swipe :auto="0" :defaultIndex="1">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <p>单个幻灯片</p>
    <mt-swipe :auto="0" :show-indicators="false">
      <mt-swipe-item>1</mt-swipe-item>
    </mt-swipe>
  </div>

</template>
<style lang="less">
  p{
    text-align: center;
    margin-bottom: 15px;
  }
  .page-swipe .mint-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
    .mint-swipe-item{
      line-height:200px;
      background-color: #29aeff;
    }
  }
</style>
