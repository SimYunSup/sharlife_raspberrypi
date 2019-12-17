<template>
  <v-app>
    <transition name="slide" mode="out-in">
      <router-view/>
    </transition>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>

<style>
  .slide-enter-active, .slide-leave-active {
    transition: all .3s ease;
  }
  .slide-enter, .slide-leave-to {
    transform: translateX(100%);
  }
</style>
