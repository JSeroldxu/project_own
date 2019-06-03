<!--  -->
<template>
  <div class="box">
    <div style="width: 100%;height: 100%;" @touchstart.prevent="touchStart" @touchmove.prevent="touchMove" @touchend="touchEnd" ref="back">
      <router-view></router-view>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item @click="$router.push({name:'firstPage'})">
        <span>自定义</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal">
      </van-tabbar-item>
      <van-tabbar-item icon="search" @click="$router.push({name:'secondPage'})">
        <span>自定义</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal">
      </van-tabbar-item>
      <van-tabbar-item icon="setting-o" @click="$router.push({name:'thirdPage'})">
        <span>自定义</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal">
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: this.$route.name == 'firstPage' ? 0 : this.$route.name == 'secondPage' ? 1 : this.$route.name == 'thirdPage' ? 2 : 0,
      icon: {
        normal: "//img.yzcdn.cn/icon-normal.png",
        active: "//img.yzcdn.cn/icon-active.png"
      },
      currentPlay: "red",
      percent: 0,
      touch:{}
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    touchStart(e) {
      const touch = e.touches[0];
      console.log(touch)
      // alert(touch)
      this.touch.startX = touch.pageX;
      this.touch.startY = touch.pageY;
    },
    touchMove(e) {
      console.log("move");
      const touch = e.touches[0];
      const deltaX = touch.pageX - this.touch.startX;
      const deltaY = touch.pageY - this.touch.startY;
      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        return ;
      }
      const left = this.currentPlay == "red" ? 0 : -window.innerWidth;
      var offsetWidth = Math.min(
        0,
        Math.max(-window.innerWidth, left + deltaX)
      );
      this.percent = Math.abs(offsetWidth / window.innerWidth);
      this.$refs.back.style["transform"] = `translate3d(${offsetWidth}px,0,0)`;
      this.$refs.back.style["transitionDuration"] = 10;
      console.log(this.percent)
    //   this.$router.push({name:'secondPage'})
    },
     touchEnd() {
        console.log(this.currentPlay);
        console.log("end");
        console.log(this.percent);
        let offsetWidth
        let percent
        if (this.currentPlay === 'red') {
          if (this.percent > 0.1) {
            this.currentPlay = 'yellow'
            offsetWidth = -window.innerWidth
          } else {
            offsetWidth = 0
          }
        } else {
          if (this.percent < 0.9) {
            this.currentPlay = 'red'
            offsetWidth = 0
          } else {
            offsetWidth = -window.innerWidth
            this.$router.push({name:'secondPage'})
          }
        }
        this.$refs.back.style["transform"] = `translate3d(${offsetWidth}px,0,0)`
        this.$refs.back.style["transitionDuration"] = 10;
      },
  }
};
</script>
<style lang='less' scoped>
.box {
  height: 100%;
  width: 100%;
}
</style>