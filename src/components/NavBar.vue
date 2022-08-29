<template>
  <header class="head">
    <div class="header-left">
      <a href="javascript:void(0)">
        <font-awesome-icon icon="fa-arrow-left" class="btn-back"></font-awesome-icon>
      </a>
      <a href="javascript:void(0)">
        <font-awesome-icon icon="fa-house" class="btn-home"></font-awesome-icon>
      </a>
    </div>
    <h1 class="header-title">금주의 전단광고</h1>
    <div class="header-right">
      <font-awesome-icon icon="fa-bars" class="btn-side"></font-awesome-icon>
    </div>
    <button class="btn-top" @click="toTop">
      <font-awesome-icon icon="fa-arrow-up" />
    </button>
  </header>
</template>

<script>
export default {
  methods: {
    toTop() {
      window.scrollTo({ top:0, behavior:"smooth"});
    }
  }
}
</script>

<style>
.head {
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;
}
.header-left{
  display: flex;
  width: 100px;
  font-size: 20px;
  margin-left: 10px;
}
.header-left .btn-back {
  padding: 0 10px;
}
.header-left .btn-home {
  padding: 0 10px;
}
.header-title{
  position: relative;
  margin: 0;
  width: 100%;
  color: #222;
  font-size: 16px;
  font-weight: 800;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  z-index: -1;
}
.header-right{
  text-align: end;
  margin-right: 20px;
  width: 100px;
  font-size: 20px;
}
.btn-top{
  position: fixed;
  width: 50px;
  height: 50px;
  right: 25px;
  bottom: 25px;
  border-radius: 15px;
  border: 1px solid #ddd;
  background: #fff;
  z-index: 9999;
  /* box-shadow: 5px 5px 1px rgba(56, 56, 56, .2); */
  box-shadow: 4px 4px 4px rgb(50,50,50,.21)
}
</style>