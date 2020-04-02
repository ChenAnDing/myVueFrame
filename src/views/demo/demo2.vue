<template>
  <div class="d">
    <!-- {{$route.params.id} -->
    <div class="ddd" @click="showToast"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      aaa: 123
    }
  },
  methods: {
    showToast() {
      // this.$toast('你好啊')
      this.$loading.open('hahhahahahahhhahahah')
      setTimeout(() => {
        this.$loading.close()
      }, 2000);
    }
  },
  mounted() {

  },
}

</script>
<style lang="scss" scoped>
$color: darkcyan;
  .d {
    width: 100%;
    .ddd {
      width: 375rpx;
      height: 50rpx;
      background: $color;
    }
  }
  
</style>