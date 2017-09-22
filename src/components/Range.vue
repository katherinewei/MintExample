<template>
  <div class="page-range">
  <p>基本功能</p>
  <mt-cell title="默认"  :label="val+value1">
    <mt-range v-model="value1"></mt-range>
  </mt-cell>
    <mt-cell title="预设 value"  :label="val+value2">
      <mt-range v-model="value2"></mt-range>
    </mt-cell>

    <mt-cell title="左右文字"  :label="val+value3">
      <mt-range v-model="value3">
          <div slot="start">0</div>
          <div slot="end">100</div>
      </mt-range>
    </mt-cell>

    <p>自定义</p>

    <mt-cell title="定义步长"  :label="val+value4">
      <mt-range v-model="value4" :step="10">
      </mt-range>
    </mt-cell>
    <mt-cell title="定义区间"  :label="val+value5">
      <mt-range v-model="value5"  :min="10" :max="90" >
        <div slot="start">10</div>
        <div slot="end">90</div>
      </mt-range>
    </mt-cell>
    <mt-cell title="定义线宽"  :label="val+value6">
      <mt-range v-model="value6"   :bar-height="3" >
      </mt-range>
    </mt-cell>
    <mt-cell title="置为无效"  :label="val+value7">
      <mt-range disabled v-model="value7"   >
      </mt-range>
    </mt-cell>
    <p>场景举例</p>
    <mt-cell title="字体大小"  :label="val+value8">
      <mt-range v-model="value8" :min="14" :max="22"   >
        <div slot="start">14</div>
        <div slot="end" style="font-size: 22px;">22</div>
      </mt-range>
    </mt-cell>
  </div>
</template>

<style lang="less">

  .mt-range {
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
  p{
    margin: 28px 15px 8px;
  }

</style>
<script>
  export default {
    data () {
      return {
        value1: 0,
        value2: 20,
        value3: 0,
        value4: 0,
        value5: 10,
        value6: 0,
        value7: 30,
        value8: 14,
        val: 'value:'
      }
    }
  }
</script>

