<template>
  <div class="select">
    <v-btn color="black" dark class="select__button--back" @click="goBack">뒤로 갈꺼여,,?</v-btn>
    <div class="select__content">
      <transition
        name="fade"
        mode="out-in">
        <router-view/>
      </transition>
    </div>
    <div class="select__selector">
      <div class="select__parking">
        <div class="select__parking__slot--disabled select__parking__slot"></div>
        <div class="select__parking__slot" @click="goNext"></div>
        <div class="select__parking__slot--disabled select__parking__slot"></div>
      </div>
      <div class="select__parking__title">
        주차 현황
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectLayout',
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    goNext () {
      if (this.$route.path === '/select/park') {
        this.$router.push('/select/payment')
      } else if (this.$route.path === '/select/parked') {
        this.$router.push('/working')
      }
    }
  }
}
</script>

<style scoped>
  .select{
    height: 100%;
    background-color: #F0FEDD;
    display: flex;
  }

  .select__button--back {
    position: fixed;
    z-index: 10;
    top: 10px;
    left: 10px;
  }
  .select__content {
    display: flex;
    flex-direction: column;
    left: 0;
    width: 50%;
    height: 100%;
    padding: 50px;
    background-color: rgba(105,105,105,0.95);
  }
  .select__selector {
    display: flex;
    flex-direction: column;
    left: 0;
    width: 50%;
    height: 100%;
    padding: 20px;
  }
  .select__parking {
    display: grid;
    width: 100%;
    height: 40%;
    grid: auto-flow / repeat(3, auto);
    grid-gap: 10px;
  }
  .select__parking__slot {
    width: 100%;
    height: 100%;
    border: 3px solid black;
    cursor: default;
  }
  .select__parking__slot.select__parking__slot--disabled {
    border: 3px solid red;
  }
  .select__parking__slot:not(.select__parking__slot--disabled):hover {
    border: 3px solid #d9d900;
    cursor: pointer;
  }
  .select__parking__title {
    margin: 25px 0;
    display: flex;
    text-align: center;
    justify-content: center;
    font-weight: bold;
    font-size: 30px;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
</style>
