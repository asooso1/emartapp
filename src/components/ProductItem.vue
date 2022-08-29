<template>
  <div class="product-item">
    <a href="javascript:void(0)" class="box_left">
      <img :src="product.image" alt="상품 이미지" />
    </a>
    <div class="box_right">
      <p class="price" v-if="product.discountedPrice">
        <span class="origin-price">{{ product.originPrice }}</span>
        <span class="discounted-price" v-if="product.discountedPrice">{{ product.discountedPrice }}원</span>
      </p>
      <p class="price" v-else>
        <span class="discounted-price">{{ product.originPrice }}원</span>
      </p>
      <p class="product-name">{{ product.name }}</p>
      <div class="event">
        <span v-if="product.discount" class="promotion-red">{{ product.discount.condition }} {{ product.discount.value }} 할인</span>
        <span v-if="product.promotion" class="promotion-blue">{{ product.promotion.value }}</span>
      </div>
      <p class="reactions">
        <span v-if="product.likeCount > 0" class="like"><font-awesome-icon icon="fa-regular fa-heart"/> {{ product.likeCount }}</span>
        <span v-if="product.commentCount > 0" class="comment"><font-awesome-icon icon="fa-regular fa-comment" /> {{ product.commentCount }}</span>
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
  text-align: center;
}
.product-item .box_left img {
  width: 120px;
  height: 120px;
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
  margin-right: 5px;
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
.product-item .box_right .event {
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: 600;
}
.product-item .box_right .event .promotion-red{
  color: #DB392E;
  border: 1px solid #DB392E;
  border-radius: 5px;
  padding: 3px;
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-right: 5px;
}
.product-item .box_right .event .promotion-blue{
  color: #4774CF;
  border: 1px solid #4774CF;
  border-radius: 5px;
  padding: 3px;
  max-width: 100%;
  margin-right: 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
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