<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item, index) in swiperList" :key="index">
        <img class="swiper-img" :src="item.imgURL" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperList: [
        {imgURL: 'http://image.btc1999.com/img/logo/6b3e7f9b-f923-4c8c-8066-62e3a6b7342e.jpg'},
        {imgURL: 'http://image.btc1999.com/img/logo/fcf67ce5-3eda-45ac-8253-20581397574d.jpg'}
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }

      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .swiper >>> .swiper-pagination-bullet-active
    background #fff
  .swiper
    box-sizing border-box
    width 100%
    height 0
    padding-bottom 35.25%
    background #eee
    .swiper-img
      width 100%
      height 100%;
</style>
