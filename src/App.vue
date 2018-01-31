<template>
  <div id="app">
    <keep-alive>
      <transition>
        <router-view class="view"></router-view>
      </transition>
    </keep-alive>
  </div>
  
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  min-width: 320px;
  max-width: 640px;
  margin: auto;
  overflow: hidden;
}
</style>
