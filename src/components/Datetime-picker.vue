<template>
  <div >
    <div class="page-button-group">
      <mt-button @click.native="open('picker1')" size="large">点击弹出 DateTime Picker</mt-button>
      <mt-button @click.native="open('picker2')" size="large">点击弹出 Date Picker</mt-button>
      <mt-button @click.native="open('picker3')" size="large">点击弹出 Time Picker</mt-button>
      <mt-button @click.native="open('picker4')" size="large">自定义模板</mt-button>
      <mt-button @click.native="open('picker5')" size="large">设定初始值</mt-button>
    </div>
    <mt-datetime-picker
      ref="picker1"
      v-model="value"
      @confirm="handleChange">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="picker2"
      type="date"
      v-model="value2"
      @confirm="handleChange">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="picker3"
      type="time"
      v-model="value3"
      @confirm="handleChange">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="picker4"
      type="date"
      v-model="value4"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleChange">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="picker5"
      type="time"
      v-model="value5"
      @confirm="handleChange">
    </mt-datetime-picker>
  </div>
</template>


<script type="text/babel">
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      value: null,
      value2: null,
      value3: null,
      value4: null,
      value5: '04:32',
      visible: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false
    }
  },
  methods: {
    open (picker) {
      this.$refs[picker].open()
    },
    handleChange (value) {
      Toast({
        message: '已选择 ' + value.toString(),
        position: 'bottom'
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
