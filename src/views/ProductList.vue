<template>
  <div class="product-list">
    <SubmenuTabVue 

    />
    <ProductItemVue 
      v-for="(item, idx) in testItemList"
      :key="idx"
      :product="item"
    />
    
  </div>
      
</template>

<script>
import ProductItemVue from '@/components/ProductItem.vue';
import SubmenuTabVue from '@/components/SubmenuTab.vue';
export default {
  name: 'ProductList',
  components: {
    ProductItemVue,
    SubmenuTabVue,
  },
  data() {
    return {
      testItemList: [{
        category: '여름과일',
        // 제품명
        productName: '대부도/송산 캠벨포도',
        // 제품 가격
        price: 19900,
        // 제품 이미지 path
        productImg: require('@/assets/grape.jpg'),
        // 행사 목록
        promotionList: [{
          color: 'red',
          promotionType: 'amount',
          promotionValue: '3000',
          promotionCondition: '신세계포인트 적립 시'
        },{
          // color&Type 정규화필요
          color: 'blue',
          promotionType: 'amount',
          promotionValue: '3000',
          promotionCondition: '1+1'
        },],
        likeCount: 161,
        commentCount: 41,
      },
      {
        category: '여름과일',
        // 제품명
        productName: '샤인머스캣',
        // 제품 가격
        price: 16900,
        // 제품 이미지 path
        productImg: require('@/assets/shine.jpeg'),
        // 행사 목록
        promotionList: [{
          color: 'red',
          promotionType: 'amount',
          promotionValue: '3000',
          promotionCondition: '신세계포인트 적립 시'
        },{
          // color&Type 정규화필요
          color: 'blue',
          promotionType: 'amount',
          promotionValue: '3000',
          promotionCondition: '1+1'
        },],
        likeCount: 161,
        commentCount: 41,
      },],
      subMenus: [],
    }
  },
  methods: {
    
  },
}
</script>

<style>

</style>