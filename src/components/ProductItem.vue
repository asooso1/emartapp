<template>
  <div class="product-item">
    <a href="javascript:void(0)" class="box_left">
      <img :src="product.productImg" alt="상품 이미지" />
    </a>
    <div class="box_right">
      <p class="price">
        <span class="origin-price">{{ product.price }}</span>
        <span class="discounted-price">{{ product.price }}원</span>
      </p>
      <p class="product-name">{{ product.productName }}</p>
      <div class="promotion">
        <span class="promotion-red">{{ product.promotionList[0].promotionCondition }} {{ product.promotionList[0].promotionValue }}원 할인</span>
        <span class="promotion-blue">{{ product.promotionList[1].promotionCondition}}</span>
      </div>
      <p class="reactions">
        <span class="like"><font-awesome-icon icon="fa-regular fa-heart"/> {{ product.likeCount }}</span>
        <span class="comment"><font-awesome-icon icon="fa-regular fa-comment" />{{ product.commentCount }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: Object,
  },
  methods: {

  },
  
}
</script>

<style scoped>
@media screen and (max-width: 2000px){
  img {
    display: block;
  }
  .product-item{
    display: flex;
    padding: 0px 20px;
    width: 100%;
  }
  .product-item .box_left{
    width: 150px;
    height: 150px;
    border-radius: 15px;
    background: orange;
    text-align: center;
  }
  .product-item .box_left img {
    width: 120px;
    height: 120px;
  }
  .product-item .box_right{
    position: relative;
    left: 20px;
    width: 100%;
    text-align: start;
  }
  .product-item .box_right .price{
    
  }
  .product-item .box_right .price .origin-price{
    text-decoration: line-through;
    color: #777;
  }
  .product-item .box_right .price .discounted-price{
    color: #222;
    font-size: 1.2rem;
    font-weight: 700;
  }
  .product-item .box_right .promotion {
    
  }
  .product-item .box_right .promotion .promotion-red{
    color: red;
    border: 1px solid red;
    border-radius: 5px;
    padding: 2px;
  }
  .product-item .box_right .promotion .promotion-blue{
    color: blue;
    border: 1px solid blue;
    border-radius: 10px;
    padding: 2px;
  }
  
}
</style>