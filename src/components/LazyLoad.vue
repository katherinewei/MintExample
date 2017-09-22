<template>
  <ul>
    <li v-for="item in list">
      <img v-lazy="item">
    </li>
  </ul>
</template>
<script>
  export default {
    data () {
      return {
        list: [
          'http://fuss10.elemecdn.com/7/85/e478e4b26af74f4539c79f31fde80jpeg.jpeg',
          'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg',
          'http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg',
          'http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg',
          'http://fuss10.elemecdn.com/7/85/e478e4b26af74f4539c79f31fde80jpeg.jpeg',
          'http://fuss10.elemecdn.com/7/a5/596ab03934612236f807b92906fd8jpeg.jpeg'
        ]
      }
    }
  }
</script>
<style lang="less">
  img{
    width:100%;margin-bottom: 10px;}
  img[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
  }
</style>
