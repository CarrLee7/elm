<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab boder-1px">
      <div class="tab-item">
        <router-link to="/goods">
          商品
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/rating">
          评论
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">
          商家
        </router-link>
      </div>
    </div>
    <router-view>
      
    </router-view>
    
  </div>
</template>

<script>
import header from './components/header/header.vue'
export default {
  name: 'App',
  components: {
    'v-header': header
  }
}
</script>
<style lang="stylus">
@import './common/stylus/mixin.styl'

#app
  .tab
    display: flex
    width: 100%
    height 40px
    line-height 40px
    boder-1px(rgba(7,17,27,0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a 
        display: block
        font-size: 14px
        color: rgb(77,85,93)
        &.active-link
          color: rgb(240,20,20)

</style>
