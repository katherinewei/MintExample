<template>
  <div class="page-tabbar">
    <div class="page-wrap">
      <div>
        <mt-cell class="page-part" title="当前选中" :value="selected" />
      </div>
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="外卖">
          <mt-cell v-for="n in 10" :key="n" :title="'餐厅 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="订单">
          <mt-cell v-for="n in 5" :key="n" :title="'订单 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="发现">
          <mt-cell v-for="n in 7" :key="n" :title="'发现 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="我的">
          <div class="page-part">
            <mt-cell v-for="n in 12"  :key="n" :title="'我的 ' + n" />
          </div>
          <router-link to="/">
            <mt-button type="danger" size="large">退出</mt-button>
          </router-link>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="外卖">
        <img slot="icon" >
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" >
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" >
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" >
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'page-tabbar',
    data () {
      return {
        selected: '外卖'
      }
    }
  }
</script>

<style>
  .page-tabbar {
    overflow: hidden;
    height: 100vh;
  }
  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }
  .page-wrap img{
    width:24px;
    height:24px;
    background-color: #ccc;
  }
</style>
