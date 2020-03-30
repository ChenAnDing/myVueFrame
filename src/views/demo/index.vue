<template>
  <div class="ddd" @click="goDemo2">
    {{ddd}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      ddd: 123
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log(vm, 'vm')
    })
  },
  methods: {
    goDemo2() {
      this.$router.push({name: 'demo2', params: {id: 123},}, () => {
        this.ddd = 4888
        console.log(this.ddd)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
   .ddd {
     padding: 5px;
   }
</style>