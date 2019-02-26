<template>
  <div class="header">
    城市选择
    <span class="iconfont header-back" @click="$router.push('/')">&#xe624;</span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
  .header
    overflow hidden
    height .86rem
    line-height .86rem
    text-align center
    color #fff
    background $bgColor
    font-size .32rem
    .header-back
      position absolute
      top 0
      left 0
      width .64rem
      text-align center
      font-size .4rem
</style>
