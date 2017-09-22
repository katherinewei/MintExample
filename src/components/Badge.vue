<template>
  <div class="page">
    <div>
      <mt-badge size="large" type="primary">30</mt-badge>
      <mt-badge size="large" type="error">30</mt-badge>
      <mt-badge size="large" type="success">30</mt-badge>
      <mt-badge size="large" type="warning">30</mt-badge>
    </div>

    <div>
      <mt-badge size="normal" type="primary">30</mt-badge>
      <mt-badge size="normal" type="error">30</mt-badge>
      <mt-badge size="normal" type="success">30</mt-badge>
      <mt-badge size="normal" type="warning">30</mt-badge>
    </div>
    <div>
      <mt-badge size="small" type="primary">30</mt-badge>
      <mt-badge size="small" type="error">30</mt-badge>
      <mt-badge size="small" type="success">30</mt-badge>
      <mt-badge size="small" type="warning">30</mt-badge>
    </div>
    <div>
      <mt-badge size="small" color="#ccc">自定义颜色</mt-badge>
    </div>
    <div>
      <mt-cell title="徽章" >
        未读消息 <mt-badge size="small" type="error">30</mt-badge>
      </mt-cell>
    </div>
  </div>
</template>
<style lang="less">
  .page{
  margin-left:10px;
  &>div{
      margin-top: 10px;
   }
  }
</style>
