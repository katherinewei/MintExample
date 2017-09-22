<template>
  <div >
    <div class="page-button-group">
      <mt-button type="default" size="large" @click="alert1">打开 alert 提示框</mt-button>
      <mt-button type="default" size="large" @click="alert2">打开 confirm 提示框</mt-button>
      <mt-button type="default" size="large" @click="alert3">打开 prompt 提示框</mt-button>
    </div>

  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
export default {
  name: 'Indicator',
  data () {
    return {

    }
  },
  methods: {
    alert1 () {
      MessageBox('提示', '操作成功')
    },
    alert2 () {
      MessageBox.confirm('确定执行此操作?')
    },
    alert3 () {
      MessageBox.prompt('请输入姓名').then(({ value, action }) => {
        console.log(value, action)
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
