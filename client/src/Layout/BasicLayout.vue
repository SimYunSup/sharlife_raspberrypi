<template>
  <div class="basic">
    <v-btn v-if="$route.path !== '/'" color="black" dark class="basic__button--back" @click="goBack">뒤로 갈꺼여,,?</v-btn>
    <div class="basic__content">
      <transition
        name="fade"
        mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasicLayout',
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .basic{
    height: 100%;
  }
  .basic:before {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-image: url("../assets/Parking.png");
    background-size: cover;
  }

  .basic__button--back {
    position: fixed;
    z-index: 10;
    top: 10px;
    left: 10px;
  }
  .basic__content {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50%;
    background-color: rgba(105,105,105,0.95);
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
</style>
