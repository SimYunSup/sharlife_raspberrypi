<template>
  <div class="time">
    <div class="time__title">
      주차할 시간을 선택하세요.
    </div>
    <v-form
      ref="form"
      v-model="valid">
      <v-select
        ref="time"
        color="white"
        v-model="time"
        :items="items"
        item-text="label"
        item-value="value"
        return-object
        label="주차 시간"
        :rules="[ val => !!val || '주차 시간을 선택해주세요!']"/>
      <div class="time__buttons">
        <v-btn @click="goNext" large>확인</v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TimeSelect',
  data () {
    return {
      items: [],
      time: 0,
      valid: true
    }
  },
  methods: {
    ...mapActions({
      setTime: 'setTime'
    }),
    goNext () {
      if (this.$refs.form.validate() || this.value > 0) {
        this.setTime(this.time)
        this.$router.push('/select/park')
      }
    }
  },
  mounted () {
    for (let n = 1; n <= 48; n++) {
      this.items.push({
        value: n * 30,
        label: (n === 1 ? '' : (parseInt(n / 2) + '시간')) + (n % 2 ? '30분' : '')
      })
    }
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
    font-size: 40px;
  }
  .time__buttons {
    display: flex;
    margin-top: 30px;
    padding: 0 20%;
    justify-content: space-around;
  }
</style>
