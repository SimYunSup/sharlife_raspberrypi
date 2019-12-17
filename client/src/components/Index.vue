<template>
  <div class="index">
    <div class="index__title">
      아따,,,,, 여따가,, 주차혀~~!
    </div>
    <div class="index__buttons">
      <v-btn @click="onClick(true)"  large>주차하기</v-btn>
      <v-btn @click="onClick(false)" large>출차하기</v-btn>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Index',
  methods: {
    onClick (state) {
      this.setUserState({ type: 0, state })
      this.$router.push('/user')
    },
    ...mapActions({
      setUserState: 'setUserState'
    })
  }
}
</script>

<style scoped>
  .index__title {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: white;
    margin-top: 50px;
    margin-bottom: 25px;
  }
  .index__buttons {
    display: flex;
    margin-top: 30px;
    padding: 0 20%;
    justify-content: space-around;
  }
</style>
