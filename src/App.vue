<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import './../static/icon/iconfont.js'
export default {
  name: 'App'
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;

}
html,body {
  width: 100%;
  height: 100%;
  touch-action: none;
  font-size: calc(100vw/3.75);
}
a {
  text-decoration: none;
}
* {
  padding: 0;
  margin: 0;
}
ul,li {
  list-style:none;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
