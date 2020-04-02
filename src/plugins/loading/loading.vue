<template>
  <transition name="fade">
    <div class="bg" v-if="show">
      <div class="content">
        <img src="./img/loading.gif" alt="">
        <span>{{title}}</span>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      title: '请稍后'
    }
  },
  methods: {
    open(title) {
      if (title) {
        this.title = title
      }
      this.show = true
    },
    close() {
      this.show = false
    }
  },
}
</script>
<style lang="scss" scoped>
  .bg {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1500;
    .content {
      width: 250rpx;
      height: 250rpx;
      border-radius: 8px;
      background: rgba($color: #000000, $alpha: .3);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 26rpx;
      color: #ffffff;
      img {
        width: 100rpx;
        height: 100rpx;
        margin-bottom: 24rpx;
      }
    }
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
</style>