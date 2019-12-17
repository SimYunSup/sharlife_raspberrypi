<template>
  <div class="done">
    <div class="done__title">
      {{ message }}
    </div>
    <div class="done__buttons">
      <v-btn @click="$router.push('/')" large>처음으로</v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Error',
  computed: {
    ...mapState({
      message: state => state.message
    })
  }
}
</script>

<style scoped>
  .done__title {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: white;
    margin-top: 50px;
    margin-bottom: 25px;
  }
  .done__buttons {
    display: flex;
    margin-top: 30px;
    padding: 0 20%;
    justify-content: space-around;
  }
</style>
