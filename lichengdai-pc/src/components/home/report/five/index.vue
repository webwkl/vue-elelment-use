<template>
  <div class="yearend">
  <Header></Header>

  <Footer></Footer>
  </div>
</template>
<script>
  import Header from '@/components/common/Header'
  import Footer from '@/components/common/Footer'
  export default {
  data () {
    return {
      swiperOption: {
          slidesOffsetAfter:0,
           //autoplay:true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
            navigation: {
            nextEl: '.next',
            prevEl: '.prev',
          },
        }
    }

  },
  components:{
   Header,Footer
  }
}
</script>
<style scoped>

</style>

