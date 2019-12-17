<template>
  <div class="tagging">
      {{ behavior ? '앱에서 이용권 결제하고' : '어플 들어가서'}}
      <br>
      NFC 켜고 밑에 태그혀~
      <br>
      &#709;
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Tagging',
  methods: {
    ...mapActions({
      setParkingState: 'setParkingState'
    })
  },
  computed: {
    ...mapState({
      behavior: state => state.userState[0]
    })
  },
  mounted () {
    this.setParkingState()
      .then(
        () => {
          this.$router.push('/done')
        }
      ).catch(
        () => {
          this.$router.push('/error')
        }
      )
  }
}
</script>

<style scoped>
  .tagging {
    padding: 50px 0;
    display: flex;
    text-align: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 30px;
  }
</style>
