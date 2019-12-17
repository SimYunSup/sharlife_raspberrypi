<template>
  <div class="user">
    <div class="user__title">
      회원인감,,,?
    </div>
    <div class="user__buttons">
      <v-btn @click="onClick(true)" large>회원입니다</v-btn>
      <v-btn @click="onClick(false)" large>비회원입니다</v-btn>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'UserSelect',
  methods: {
    onClick (state) {
      this.setUserState({ type: 1, state })
      if (state) {
        this.$router.push('/tag')
      } else if (this.userState() === true) {
        console.log(this.userState())
        this.$router.push('/select')
      } else {
        this.$router.push('/select/parked')
      }
    },
    ...mapActions({
      setUserState: 'setUserState'
    }),
    ...mapState({
      'userState': state => state.userState[0]
    })
  }
}
</script>

<style scoped>
  .user__title {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: white;
    margin-top: 50px;
    margin-bottom: 25px;
  }
  .user__buttons {
    display: flex;
    margin-top: 30px;
    padding: 0 20%;
    justify-content: space-around;
  }
</style>
