<template>
  <div class="ddd" @click="goDemo2">
    {{ddd}}
    {{count}}
  </div>
</template>
<script>
import { mapActions, Store } from 'vuex'
export default {
  data() {
    return {
      ddd: 123
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // console.log(vm, 'vm')
    })
  },
  methods: {
    // ...mapActions(['getCountData']),
    goDemo2() {
      this.$router.push({name: 'demo2', params: {id: 123},}, () => {
        this.ddd = 4888
        // console.log(this.ddd)
      })
    }
  },
  async mounted() {
    this.$store.dispatch('getCountData')
  }
}
</script>
<style lang="scss" scoped>
   .ddd {
     padding: 5px;
   }
</style>