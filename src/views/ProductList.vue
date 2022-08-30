<template>
  <div class="product-list">
    <SubmenuTabVue 
      :selectedCategory="selectedCategory"
      :categories="categories"
      @changeCategory="changeCategory"
    />
    <ProductItemVue 
      v-for="(item, idx) in selectedList.slice(0, pageNumber*7)"
      :key="idx"
      :product="item"
      @addItem="test"
    />
    
  </div>
      
</template>

<script>
import ProductItemVue from '@/components/ProductItem.vue';
import SubmenuTabVue from '@/components/SubmenuTab.vue';
import _ from 'lodash';
import axios from 'axios';
let lastScroll = document.documentElement.scrollTop || 0;
// let scrollUpState = false;
export default {
  name: 'ProductList',
  components: {
    ProductItemVue,
    SubmenuTabVue,
  },
  data() {
    return {
      pageNumber: 1,
      allList: [],
      selectedList: [],
      categories: [],
      selectedCategory: 'all',
      test: false,
    }
  },
  methods: {
    // json 데이터 호출 메서드
    getAllList(){
      axios({
        method: 'get',
        url: './data.json'
      })
        .then(res => {
          // console.log(res)
          this.allList = res.data.list
          this.getCategory(this.allList)
          this.parseData(this.allList)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // Set 객체를 사용해 중복카테고리를 제거
    getCategory(list){
      // 배열의 각 원소에서 카테고리만 추출해 새로운 배열 생성
      const Arr = list.map(item => item.category);
      // Set 객체로 변환
      const set = new Set(Arr);
      // 중복이 제거된 Set객체를 다시 새로운 배열에 구조분해 할당
      this.categories = [...set];
    },
    // JSON Data Parsing
    parseData(list){
      list.forEach((item) => {
        // 원가 comma(,) 추가
        item.originPrice = parseInt(item.price).toLocaleString();
        // 할인가 계산
        if (item.discount){
          let p = 0
          let v = ''
          // 할인값이 100미만이면 %할인
          if (item.discount.value < 100){
            p = item.price * (1 - item.discount.value/100);
            v = item.discount.value;
            item.discount.value = `${v}%`;
          }
          // 할인값이 100이상이면 금액할인
          else {
            p = item.price - item.discount.value;
            v = item.discount.value;
            item.discount.value = `${v}원`;
          }
          // comma 추가
          item.discountedPrice = p.toLocaleString();
        }
      })
      this.selectedList = list;
    },
    // emit이벤트가 발생했을 때 카테고리 변경
    changeCategory(val){
      if (val=='all'){
        this.selectedCategory = 'all';
        this.selectedList = this.allList;
      }
      else{
        // props 데이터 양식에 맞춰 String으로 파싱
        this.selectedCategory = String(val)
        this.selectedList = this.allList.filter((item) => {
          return item.category == this.categories[val]
        })
      }
    }
  },
  created(){
    window.addEventListener('scroll', _.throttle(() => {
      let currentScrollTop = document.documentElement.scrollTop;
      const header = document.querySelector('.head');
      const swiper = document.querySelector('.my-swiper');
      if (lastScroll < currentScrollTop){
        header.classList.remove('hide');
        swiper.classList.remove('hide');
      }
      else {
        header.classList.add('hide');
        swiper.classList.add('hide');
      }
      lastScroll = document.documentElement.scrollTop;
      if(window.scrollY+window.innerHeight >= document.documentElement.offsetHeight){
        this.pageNumber+= 1;
      }
      
    }),500)
    this.getAllList()
  },
  mounted(){
  },
  // destroyed(){
  //   window.removeEventListener('scroll', this.test())
  // }
}
</script>

<style>
.product-list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>