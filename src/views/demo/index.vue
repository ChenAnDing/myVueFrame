<template>
  <div class="ddd" @click="goDemo2">
    {{ddd}}
    {{count}}
  </div>
</template>
<script>
import { mapActions } from 'vuex'
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
    })
  },
  methods: {
    // ...mapActions(['getCountData']),
    goDemo2() {
      // this.$router.push({name: 'demo2', params: {id: 123},}, () => {
      //   this.ddd = 4888
      // })
      this.$bus.$emit('sendMsg', 123)
    },
    async getHttpData() {
      let res = await this.$axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      console.log(res, 'res')
    }
  },
  async mounted() {
    this.$store.dispatch('getCountData')
    console.log(this.ENV, 'ENV')
    this.$bus.$on('sendMsg', (msg) => {
      console.log(msg)
    })

    this.getHttpData()
  }
}
</script>
<style lang="scss" scoped>
   .ddd {
     padding: 5px;
   }
</style>