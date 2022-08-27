<template>
  <div class="product-list">
    <ProductItemVue
      v-for="(item, idx) in testListItem"
      :key="idx"
      :product="item"
    />
    </div>
      
</template>

<script>
import ProductItemVue from '@/components/ProductItem.vue';
export default {
  name: 'ProductList',
  components: {
    ProductItemVue,
  },
  data() {
    return {
      testItemList: [{
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

      },]
    }
  }
}
</script>

<style>

</style>