<template>
  <div class="working">
    <v-progress-circular
      :size="100"
      :width="15"
      color="white"
      indeterminate/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Working',
  methods: {
    ...mapActions({
      setParkingState: 'setParkingState'
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
  .working {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
</style>
