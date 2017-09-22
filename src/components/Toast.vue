<template>
  <div >
    <div class="page-button-group">
      <mt-button type="default" size="large" @click="toast1">点击弹出 Toast</mt-button>
      <mt-button type="default" size="large" @click="toast2">点击弹出带有 icon 的 Toast</mt-button>
      <mt-button type="default" size="large" @click="toast3">自定义 Toast 位置</mt-button>
    </div>

  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  name: 'Toast',
  data () {
    return {

    }
  },
  methods: {
    toast1 () {
      Toast('提示信息')
    },
    toast2 () {
      Toast({
        message: '提示信息',
        iconClass: 'icon icon-success'
      })
    },
    toast3 () {
      Toast({
        message: '提示信息',
        position: 'bottom',
        duration: 5000
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.page-button-group{
  margin:30px 15px 15px;
  button{
    margin-bottom: 20px;
  }
}
</style>
