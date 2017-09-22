import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Toast from '@/components/Toast'
import Indicator from '@/components/Indicator'
import PullDown from '@/components/Pull-down'
import PullUp from '@/components/Pull-up'
import InfiniteScroll from '@/components/Infinite-scroll'
import MessageBox from '@/components/Message-box'
import ActionSheet from '@/components/Action-sheet'
import Popup from '@/components/Popup'
import Swipe from '@/components/Swipe'
import LazyLoad from '@/components/LazyLoad'
import Range from '@/components/Range'
import Progress from '@/components/Progress'
import Picker from '@/components/Picker'
import DatetimePicker from '@/components/Datetime-picker'
import IndexList from '@/components/Index-List'
import PaletteButton from '@/components/Palette-button'
import Header from '@/components/Header'
import Tabbar from '@/components/Tabbar'
import Navbar from '@/components/Navbar'
import Button from '@/components/Button'
import Cell from '@/components/Cell'
import CellSwipe from '@/components/Cell-swipe'
import Spinner from '@/components/Spinner'
import TabContainer from '@/components/Tab-container'
import Search from '@/components/Search'
import Badge from '@/components/Badge'
import Field from '@/components/Field'
import Radio from '@/components/Radio'
import Checklist from '@/components/Checklist'
import Switch from '@/components/Switch'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Toast',
      name: 'Toast',
      component: Toast
    },
    {
      path: '/Indicator',
      name: 'Indicator',
      component: Indicator
    },
    {
      path: '/Pull-down',
      name: 'PullDown',
      component: PullDown
    },
    {
      path: '/Pull-up',
      name: 'PullUp',
      component: PullUp
    },
    {
      path: '/Infinite-scroll',
      name: 'InfiniteScroll',
      component: InfiniteScroll
    },
    {
      path: '/Message-box',
      name: 'MessageBox',
      component: MessageBox
    },
    {
      path: '/Action-sheet',
      name: 'ActionSheet',
      component: ActionSheet
    },
    {
      path: '/Popup',
      name: 'Popup',
      component: Popup
    },
    {
      path: '/Swipe',
      name: 'Swipe',
      component: Swipe
    },
    {
      path: '/Lazy-load',
      name: 'LazyLoad',
      component: LazyLoad
    },
    {
      path: '/Range',
      name: 'Range',
      component: Range
    },
    {
      path: '/Progress',
      name: 'Progress',
      component: Progress
    },
    {
      path: '/Picker',
      name: 'Picker',
      component: Picker
    },
    {
      path: '/Datetime-picker',
      name: 'DatetimePicker',
      component: DatetimePicker
    },
    {
      path: '/Index-List',
      name: 'IndexList',
      component: IndexList
    },
    {
      path: '/Palette-button',
      name: 'PaletteButton',
      component: PaletteButton
    },
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/Tabbar',
      name: 'Tabbar',
      component: Tabbar
    },
    {
      path: '/Navbar',
      name: 'Navbar',
      component: Navbar
    },
    {
      path: '/Button',
      name: 'Button',
      component: Button
    },
    {
      path: '/Cell',
      name: 'Cell',
      component: Cell
    },
    {
      path: '/Cell-Swipe',
      name: 'CellSwipe',
      component: CellSwipe
    },
    {
      path: '/Spinner',
      name: ' Spinner',
      component: Spinner
    },
    {
      path: '/TabContainer',
      name: 'TabContainer',
      component: TabContainer
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/Badge',
      name: ' Badge',
      component: Badge
    },
    {
      path: '/Field',
      name: 'Field',
      component: Field
    },
    {
      path: '/Radio',
      name: 'Radio',
      component: Radio
    },
    {
      path: '/Checklist',
      name: 'Checklist',
      component: Checklist
    },
    {
      path: '/Switch',
      name: 'Switch',
      component: Switch
    }
  ]
})

