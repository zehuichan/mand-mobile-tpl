<template>
  <div class="app-wrapper">
    <app-main/>
    <md-tab-bar v-model="active" :items="items" :has-ink="false" v-if="tabbar">
      <template slot="item" slot-scope="{item}">
        <div class="icon">
          <i class="iconfont icon-shouye"></i>
        </div>
        <div class="text">
          <span>{{item.label}}</span>
        </div>
      </template>
    </md-tab-bar>
  </div>
</template>

<script>
  // vuex
  import {mapGetters} from 'vuex'
  // components
  import {TabBar} from 'mand-mobile'
  import AppMain from './components/AppMain'

  export default {
    name: 'layout',
    data() {
      return {
        items: [
          {name: 1, label: '首页'},
          {name: 2, label: '首页'},
          {name: 3, label: '我的'}
        ],
      }
    },
    computed: {
      active: {
        get() {
          const map = {
            '/home': 0,
            '/message': 1,
            '/me': 2,
          }
          return map[this.$route.path]
        },
        set(val) {
        }
      },
      ...mapGetters([
        'tabbar'
      ])
    },
    components: {
      [TabBar.name]: TabBar,
      AppMain
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .app-wrapper {
    position: relative;
    height: 100%;
    overflow: hidden;
  }

  .van-tabbar-item__icon {
    .iconfont {
      font-size: inherit;
    }
  }
</style>
