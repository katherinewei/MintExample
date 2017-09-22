<template>
  <div >
    <div class="page-button-group">
      <mt-button type="default" size="large" @click="Indicator1">点击弹出 Indicator</mt-button>
      <mt-button type="default" size="large" @click="Indicator2">可配置 spinner</mt-button>
      <mt-button type="default" size="large" @click="Indicator3">点击弹出带有文字的 Indicator</mt-button>
    </div>

  </div>
</template>

<script>
import { Indicator } from 'mint-ui'
export default {
  name: 'Indicator',
  data () {
    return {

    }
  },
  methods: {
    Indicator1 () {
      Indicator.open()
      setTimeout(() => Indicator.close(), 2000)
    },
    Indicator2 () {
      Indicator.open('Loading...')
      setTimeout(() => Indicator.close(), 2000)
    },
    Indicator3 () {
      Indicator.open({
        text: 'Loading...',
        spinnerType: 'fading-circle'
      })
      setTimeout(() => Indicator.close(), 2000)
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
