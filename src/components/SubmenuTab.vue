<template>
  <div class="my-swiper">
    <swiper
      ref="filterSwiper"
      :options="swiperOption"
    >
      <swiper-slide>
        <span @click="changeCategory('all')">전체</span>
      </swiper-slide>
      <swiper-slide
        v-for="(category,idx) in categories"
        :key="idx"
      >
        <span @click="changeCategory(idx)">{{ category }}</span>
      </swiper-slide>
      <!-- <swiper-slide>든든하고 건강하게</swiper-slide>
      <swiper-slide>여름과일</swiper-slide>
      <swiper-slide>피코크</swiper-slide>
      <swiper-slide>신선식품</swiper-slide>
      <swiper-slide>신선식품</swiper-slide>
      <swiper-slide>신선식품</swiper-slide>
      <swiper-slide>신선식품</swiper-slide> -->
    </swiper>

  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'SubmenuTab',
  props: {
    selectedCategory: String,
    categories: Array,
  }, 
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        effect: 'slide',
        slidesOffsetBefore: 0, // slidesOffsetBefore는 첫번째 슬라이드의 시작점에 대한 변경할 때 사용
        slidesOffsetAfter: 0, // slidesOffsetAfter는 마지막 슬라이드 시작점 + 마지막 슬라이드 너비에 해당하는 위치의 변경이 필요할 때 사용
        // freeMode: true, // freeMode를 사용시 스크롤하는 느낌으로 구현 가능
        // centerInsufficientSlides: true, // 컨텐츠의 수량에 따라 중앙정렬 여부를 결정함
        // slideToClickedSlide : true, // 해당 슬라이드 클릭시 슬라이드 위치로 이동
        allowTouchMove : true, // (false-스와이핑안됨)버튼으로만 슬라이드 조작이 가능
      }
    }
  },
  setup(){
    const onSwiper = (swiper) => {
      console.log(swiper);
    }
    const onSlideChange = () => {
      console.log('slide change');
    }
    return {
      onSwiper,
      onSlideChange,
    }
  },
  methods: {
    test(){
      console.log('a')
    },
    changeCategory(val) {
      this.$emit('changeCategory', val)
      // console.log(val)
    }
  }
}
</script>

<style>
.my-swiper {
  position: sticky;
  background: #fff;
  top:0;
  width: 100%;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(161, 161, 161, 0.356);
}
.swiper-container {
  padding-left: 20px;
}
.swiper-container .swiper-wrapper .swiper-slide {
  width: auto; 
  min-width: 20px; 
  margin-right: 20px;
  font-size: 14px;
  line-height: 36px;
  text-align: center;
  color: #888;
  cursor: pointer;
}
.swiper-slide.selected{
  font-weight:700; 
  color:#333; 
  border-bottom: 2px solid #333;
}
</style>