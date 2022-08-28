<template>
  <div id="app">
    <a name="da"></a>
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
    </header>
    <router-view/>
      <font-awesome-icon icon="fa-arrow-up" @click="toTop()">
      </font-awesome-icon>
  </div>
</template>

<script>
export default {
  methods: {
    toTop() {
      window.scrollTo({ left:0, top:0, behavior:"smooth"});
    }
  }
}
</script>
<style>
*{
  box-sizing: border-box;
}
#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a{
  text-decoration: none;
  color: #222;
}
button{
  outline: none;
  background: transparent;
}
body, p {
  margin: 0;
}
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
</style>
