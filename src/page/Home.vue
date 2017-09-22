<template>
  <div>
    <div class="" :key="i" v-for="(item,i) in list">
      <h3>{{item.title}}</h3>
      <router-link :to="component.name.replace(/ /, '-')" class="box" :key="j"  v-for="(component,j) in item.components"><mt-cell  is-link  :title="component.name"></mt-cell></router-link>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        list: [{
          title: 'JS Components',
          components: [
            {
              name: 'Toast',
              icon: 'Toast'
            },
            {
              name: 'Indicator',
              icon: 'Toast'
            },
            {
              name: 'Pull down',
              icon: 'Toast'
            },
            {
              name: 'Pull up',
              icon: 'Toast'
            },
            {
              name: 'Infinite scroll',
              icon: 'Toast'
            },
            {
              name: 'Message box',
              icon: 'Toast'
            },
            {
              name: 'Action sheet',
              icon: 'Toast'
            },
            {
              name: 'Popup',
              icon: 'Toast'
            },
            {
              name: 'Swipe',
              icon: 'Toast'
            },
            {
              name: 'Lazy load',
              icon: 'Toast'
            },
            {
              name: 'Range',
              icon: 'Toast'
            },
            {
              name: 'Progress',
              icon: 'Toast'
            },
            {
              name: 'Picker',
              icon: 'Toast'
            },
            {
              name: 'Datetime Picker',
              icon: 'Toast'
            },
            {
              name: 'Index List',
              icon: 'Toast'
            },
            {
              name: 'Palette Button',
              icon: 'Toast'
            }
          ]
        },
        {
          title: 'CSS Components',
          components: [
            {
              name: 'Header',
              icon: 'Toast'
            },
            {
              name: 'Tabbar',
              icon: 'Toast'
            },
            {
              name: 'Navbar',
              icon: 'Toast'
            },
            {
              name: 'Button',
              icon: 'Toast'
            },
            {
              name: 'Cell',
              icon: 'Toast'
            },
            {
              name: 'Cell Swipe',
              icon: 'Toast'
            },
            {
              name: 'Spinner',
              icon: 'Toast'
            },
            {
              name: 'TabContainer',
              icon: 'Toast'
            },
            {
              name: 'Search',
              icon: 'Toast'
            }
          ]
        },
        {
          title: 'Form Components',
          components: [
            {
              name: 'Switch',
              icon: 'Toast'
            },
            {
              name: 'Checklist',
              icon: 'Toast'
            },
            {
              name: 'Radio',
              icon: 'Toast'
            },
            {
              name: 'Field',
              icon: 'Toast'
            },
            {
              name: 'Badge',
              icon: 'Toast'
            }
          ]
        }]
      }
    }
  }
</script>
<style lang="less">
  .box{
    color: #000;
    text-decoration: none;
  }
  h3{
    padding: 10px 20px;
  }

</style>
