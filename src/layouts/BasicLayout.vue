<template>
  <div class="basic-layout app-wrapper">
    <!--app-main-->
    <app-main has-padding/>
    <!--tabbar-->
    <md-tab-bar v-model="active" :items="items" :has-ink="false">
      <template slot="item" slot-scope="{ item }">
        <div class="custom-item" @click="$router.push(item.path)">
          <div class="icon">
            <md-icon :name="item.icon"/>
          </div>
          <div class="text">
            <span>{{item.label}}</span>
          </div>
        </div>
      </template>
    </md-tab-bar>
  </div>
</template>

<script>
  // vuex
  import {mapGetters} from 'vuex'
  // components
  import {TabBar, Icon} from 'mand-mobile'
  import AppMain from './components/AppMain'

  export default {
    name: 'basic-layout',
    data() {
      return {
        items: [
          {name: 'home', label: '首页', icon: 'home', path: '/home'},
          {name: 'transactions', label: '理财', icon: 'rmb', path: '/transactions'},
          {name: 'discovery', label: '发现', icon: 'discovery', path: '/discovery'},
          {name: 'mall', label: '商城', icon: 'profession', path: '/mall'},
          {name: 'my', label: '我的', icon: 'user', path: '/my'},
        ],
      }
    },
    computed: {
      active: {
        get() {
          return this.$route.name
        },
        set(val) {

        }
      },
    },
    components: {
      [TabBar.name]: TabBar,
      [Icon.name]: Icon,
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

  .md-tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;

    .custom-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      flex: 1;

      .text {
        font-size: 20px;
      }
    }
  }
</style>
