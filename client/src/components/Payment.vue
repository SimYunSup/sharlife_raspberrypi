<template>
  <div class="time">
    <v-text-field
      class="time__payment"
      label="결제금액"
      append-icon="원"
      v-model="time"
      filled
      background-color="white"
      disabled/>
    <div class="time__title">
      결제하시겠습니까?
    </div>
    <div class="time__buttons">
      <v-btn to="/working" large>확인</v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Payment',
  computed: {
    ...mapState({
      time: state => state.time
    })
  }
}
</script>

<style scoped>
  .time__title {
    margin: 50px 0;
    display: flex;
    text-align: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 30px;
  }
  .time__payment {
    margin: 60px 0;
  }
  .time__buttons {
    display: flex;
    margin-top: 30px;
    padding: 0 20%;
    justify-content: space-around;
  }
</style>
