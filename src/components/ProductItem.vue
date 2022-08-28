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
        <span class="comment"><font-awesome-icon icon="fa-regular fa-comment" /> {{ product.commentCount }}</span>
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
img {
  display: block;
}
.product-item{
  display: flex;
  align-items: center;
  padding: 0px 20px;
  width: 100%;
  height: 120px;
  margin-bottom: 20px;
  font-size: 14px;
}
.product-item .box_left{
  width: 120px;
  height: 120px;
  border-radius: 15px;
  /* background: orange; */
  text-align: center;
}
.product-item .box_left img {
  width: 120px;
  height: 120px;
  padding: 10px;
}
.product-item .box_right{
  width: 100%;
  margin-left: 20px;
  text-align: start;
}
.product-item .box_right .price{
  margin-bottom: 10px;
}
.product-item .box_right .price .origin-price{
  text-decoration: line-through;
  color: #777;
}
.product-item .box_right .price .discounted-price{
  color: #222;
  font-size: 18px;
  font-weight: 700;
}
.product-item .box_right .product-name{
  margin-bottom: 10px;
  font-weight: 800;
}
.product-item .box_right .promotion {
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: 600;

}
.product-item .box_right .promotion .promotion-red{
  color: #DB392E;
  border: 1px solid #DB392E;
  border-radius: 5px;
  padding: 2px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
}
.product-item .box_right .promotion .promotion-blue{
  color: #4774CF;
  border: 1px solid #4774CF;
  border-radius: 10px;
  padding: 2px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
}
.product-item .box_right .reactions{
  font-size: 14px;
  display: flex;
  gap: 30px;
  color: #777;
}
.product-item .box_right .reactions .like{
  
}
.product-item .box_right .reactions .comment{
  
}
/* PC */
@media screen and (min-width: 1440px){
  .product-item{
    flex-basis: 33.3%;
  }
}
/* Tablet */
@media screen and (max-width: 1440px){
  .product-item{
    flex-basis: 50%;
  }
}
/* Mobile */
@media screen and (max-width: 768px){
  .product-item {
    flex-basis: 100%;
  }
}
</style>