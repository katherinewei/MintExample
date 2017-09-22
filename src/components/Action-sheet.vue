<template>
  <div >
    <div class="page-button-group">
      <mt-button type="default" size="large" @click="sheetVisible = true">点击上拉 action sheet</mt-button>
      <mt-button type="default" size="large" @click="sheetVisible2 = true">不带取消按钮的 action sheet</mt-button>
      <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
      <mt-actionsheet :actions="actions2" v-model="sheetVisible2" cancelText=""></mt-actionsheet>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Actionsheet',
  data () {
    return {
      sheetVisible: false,
      sheetVisible2: false,
      actions: []
    }
  },

  methods: {
    takePhoto () {
      console.log('taking photo')
    },
    openAlbum () {
      console.log('opening album')
    }
  },
  mounted () {
    this.actions = [{
      name: '拍照',
      method: this.takePhoto
    }, {
      name: '打开相册',
      method: this.openAlbum
    }]
    this.actions2 = [{
      name: '确定'
    }, {
      name: '返回上一步'
    }]
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
