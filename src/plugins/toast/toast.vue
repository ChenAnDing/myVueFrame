<template>
    <transition name="fade">
        <div class="noneToastModal" v-if="isShow">
          {{options.title}}
        </div>
    </transition>
</template>
<script>
export default {
  data () {
    return {
      isShow: false,
      options: {
        title: '操作成功',
        duration: 2000,
        success: function () {

        },
        close: function () {

        }
      }
    }
  },
  methods: {
    showToast (options) {
      if (typeof options == 'string') {
        options: {
          title: options
        }
      }
      Object.assign(this.options, options)
      this.isShow = true
      this.options.success()
      setTimeout(() => {
        this.isShow = false
        this.options.close()
      }, this.options.duration);
    }
  }
}
</script>
<style lang="scss" scoped>
  .noneToastModal {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10rpx 25rpx;
    box-sizing: border-box;
    background:rgba(0,0,0,0.6);
    border-radius:8px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1500;
    color: #FFFFFF;
    font-size: 30rpx;
    word-wrap: break-word;
    word-break: break-all;
    max-width: 600rpx;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  
</style>
