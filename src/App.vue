<template>
  <div id="app">
    <main-navbar></main-navbar>
    <router-view/>
  </div>
</template>

<script>
import MainNavbar from '@/components/NavBar.vue'
export default {
  components: {
    MainNavbar
  }
}
</script>
<style>
*{
  box-sizing: border-box;
}
@font-face {
  font-family: 'Apple SD 산돌고딕 Neo';
  src: url('@/assets/fonts/AppleSDGothicNeoM.ttf');
}
#app {
  font-family: 'Apple SD 산돌고딕 Neo',Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a{
  text-decoration: none;
  color: #222;
}
body, p {
  margin: 0;
}

</style>
