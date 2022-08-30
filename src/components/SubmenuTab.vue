<template>
  <div class="my-swiper">
    <swiper
      ref="filterSwiper"
      :options="swiperOption"
    >
      <swiper-slide id="item-all" class="selected">
        <span  @click="changeCategory('all')">전체</span>
      </swiper-slide>
      <swiper-slide
      v-for="(category,idx) in categories"
      :key="idx"
      :id="`item-${idx}`" 
      >
      <span @click="changeCategory(idx)">{{ category }}</span>
    </swiper-slide>
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
        allowTouchMove : true, // 버튼으로만 슬라이드 조작이 가능
      }
    }
  },
  methods: {    
    // 카테고리 변경시 
    changeCategory(val) {
      window.scrollTo({ top:0, behavior:"smooth"});
      // 기존 check표시 해제
      const currentSelectedItem = document.querySelector(`#item-${this.selectedCategory}`);
      currentSelectedItem.classList.remove('selected');
      // 새로 check표시 ON
      const newSelectedItem = document.querySelector(`#item-${val}`)
      newSelectedItem.classList.add('selected')
      this.$emit('changeCategory', val);
    }
  },
}
</script>

<style>
.my-swiper {
  background: #fff;
  top: 0px;
  width: 100%;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(161, 161, 161, 0.356);
  position:sticky;
}
.my-swiper.hide {
  top: 50px;
}
.swiper-container {
  padding-left: 20px;
  color: #888;
}
.swiper-container .swiper-wrapper .swiper-slide {
  width: auto; 
  min-width: 20px; 
  margin-right: 20px;
  font-size: 14px;
  line-height: 36px;
  text-align: center;
  cursor: pointer;
  z-index: 9999;
}
.swiper-slide.selected{
  font-weight:700; 
  color:#333; 
  border-bottom: 2px solid #333;
}
</style>