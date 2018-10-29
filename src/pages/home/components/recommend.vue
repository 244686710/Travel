<template>
<div>
  <div class="recommend-title">热销推荐</div>
  <ul>
    <li class="item">
      <div class="item-img-wrapper">
        <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1810/4c/4c3e7f52ffd973b0a3.water.jpg_200x200_65b5a07f.jpg" alt="">
      </div>
      <div class="item-info">
        <p class="item-title">世界之窗</p>
        <p class="item-desc">是指通过景区指定窗口售卖的纸质门票上标注的价格</p>
        <button class="item-button">查看详情</button>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'Recommend',
  data () {
    return {}
  }
}
</script>
<style lang="stylus">
  .recommend-title {
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  }
  .item
    display flex
    overflow hidden
    height 2rem
    .item-img
      height 2rem
      width 2rem
    .item-info
      flex 1
      padding .1rem
      .item-title
        line-height .54rem
        font-size .32rem
      .item-desc
        color #ccc
        line-height .4rem
      .item-button
        background #ff9300
        padding 0 .2rem
        line-height .4rem
        border-radius .05rem
</style>
