<template>
  <div class="page">
    <mt-cell title="默认">
      <mt-progress :value="0" ></mt-progress>
    </mt-cell>
    <mt-cell title="设置value">
      <mt-progress :value="20" ></mt-progress>
    </mt-cell>
    <mt-cell title="左右文字">
      <mt-progress :value="40">
        <div slot="start">0%</div>
        <div slot="end">100%</div>
      </mt-progress>
    </mt-cell>
    <mt-cell title="定义线宽">
      <mt-progress :value="50" :bar-height="8"></mt-progress>
    </mt-cell>
    <mt-button type="primary" size="large" @click="uploadFile" >上传</mt-button>
      <mt-progress :value="value" v-if="progressVisible" transition="progress-fade">
        <div slot="end">{{value}}%</div>
      </mt-progress>

  </div>

</template>
<script>
  import { Toast } from 'mint-ui'
  export default {
    data () {
      return {
        progressVisible: false,
        value: 0,
        timer: null
      }
    },
    watch: {
      value (val) {
        if (val > 100) {
          this.progressVisible = false
          setTimeout(() => Toast({message: '上传成功！', position: 'bottom', duration: 3000}), 1000)
          clearTimeout(this.timer)
        }
      }
    },
    methods: {
      uploadFile () {
        if (!this.progressVisible) {
          this.value = 0
          this.progressVisible = true
          this.timer = setInterval(() => this.value++, 10)
        }
      }
    }
  }
</script>
<style lang="less">
  .page{
    padding:20px;}
  .mt-progress {
    width:100%;
  }
  .mint-cell{
    padding: 5px 0;
  .mint-cell-wrapper{
    background-image: none;
  }
  .mint-cell-value {
    -webkit-box-flex: 2.5;
    -ms-flex: 2.5;
    flex: 2.5;
    position: relative;
  }
  }
</style>
