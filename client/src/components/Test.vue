<template>
  <div class="index">
    <div class="index__title">
      테스트용
    </div>
    <div class="index__buttons">
      <v-btn @click="onS"  large>주차하기</v-btn>
      <v-btn @click="offS" large>출차하기</v-btn>
    </div>
    <div v-if="show">안 보임</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Index',
  data () {
    return {
      show: false
    }
  },
  methods: {
    async onS () {
      this.show = false
      await axios.get('http://localhost:5000/on')
      this.show = true
    },
    async offS () {
      this.show = false
      await axios.get('http://localhost:5000/off')
      this.show = true
    }
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
