<template>
  <div >
    <div class="page-button-group">
      <mt-button type="default" size="large" @click="pop1">上侧弹出 popup</mt-button>
      <mt-button type="default" size="large" @click="popupVisible2 = true">中部弹出 popup</mt-button>
      <mt-button type="default" size="large" @click="popupVisible3 = true">下侧弹出 popup</mt-button>
      <mt-button type="default" size="large" @click="pop4">右侧弹出 popup</mt-button>
      <mt-popup
        :modal="false"
        v-model="popupVisible1"
        position="top"
        popup-transition="popup-top">
        <p>This is top!</p>
      </mt-popup>
      <mt-popup
        v-model="popupVisible2"
        position="center"
        popup-transition="popup-fade">
        <p>This is center!</p>
      </mt-popup>
      <mt-popup

        v-model="popupVisible3"
        position="bottom"
        popup-transition="popup-bottom">
        <p>This is bottom!</p>
      </mt-popup>
      <mt-popup
        :modal="false"
        v-model="popupVisible4"
        position="right"
        popup-transition="popup-right">
        <p>This is right!</p>
      </mt-popup>
    </div>

  </div>
</template>

<script>
export default {
  name: 'PopUp',
  data () {
    return {
      popupVisible1: false,
      popupVisible2: false,
      popupVisible3: false,
      popupVisible4: false,
      actions: []
    }
  },
  methods: {
    pop1 () {
      this.popupVisible1 = true
      setTimeout(() => { this.popupVisible1 = false }, 2000)
    },
    pop4 () {
      this.popupVisible4 = true
      setTimeout(() => { this.popupVisible4 = false }, 2000)
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

  p{
    padding:15px;
  }
}
</style>
