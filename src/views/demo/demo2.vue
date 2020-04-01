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
      width: rem(375);
      height: rem(50);
      background: $color;
      // margin: auto;
    }
  }
  
</style>