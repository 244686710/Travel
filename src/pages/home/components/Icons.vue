<template>
  <div class="icons">
    <swiper>
      <swiper-slide>
        <div class="icon" v-for="item in iconsList" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgURL" alt=""/>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconsList: [
        {
          id: '0001',
          imgURL: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        }, {
          id: '0002',
          imgURL: 'http://img1.qunarzz.com/piao/fusion/1803/12/216ce2e78b5f5f02.png',
          desc: '万圣狂欢'
        }, {
          id: '0003',
          imgURL: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
          desc: '游乐场'
        }, {
          id: '0004',
          imgURL: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
          desc: '海洋馆'
        }, {
          id: '0005',
          imgURL: 'http://img1.qunarzz.com/piao/fusion/1803/12/216ce2e78b5f5f02.png',
          desc: '万圣狂欢'
        }, {
          id: '0006',
          imgURL: 'http://img1.qunarzz.com/piao/fusion/1803/12/216ce2e78b5f5f02.png',
          desc: '万圣狂欢'
        }, {
          id: '0007',
          imgURL: 'http://img1.qunarzz.com/piao/fusion/1803/12/216ce2e78b5f5f02.png',
          desc: '万圣狂欢'
        }, {
          id: '0008',
          imgURL: 'http://img1.qunarzz.com/piao/fusion/1803/12/216ce2e78b5f5f02.png',
          desc: '万圣狂欢'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.icons
  height 0
  overflow hidden
  padding-bottom 50%
.icon
  overflow hidden
  position relative
  float left
  width: 25%
  padding-bottom 25%
  .icon-img
    position absolute
    top 0
    right 0
    left 0
    bottom .44rem
    box-sizing border-box
    padding .1rem
    .icon-img-content
      display block
      margin 0 auto
      height 100%
  .icon-desc
    position absolute
    left 0
    right 0
    bottom .18rem
    text-align center
</style>
