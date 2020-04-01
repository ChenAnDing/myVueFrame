<template>
  <div class="d">
    <!-- {{$route.params.id} -->
    <div class="ddd"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      aaa: 123
    }
  }
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