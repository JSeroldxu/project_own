<!--  -->
<template>
  <div class="box">
    <div
      style="width: 100%;height: 100%;"
      @touchstart.prevent="touchStart"
      @touchmove.prevent="touchMove"
      @touchend="touchEnd"
      ref="back"
    >
      <!-- <router-view></router-view> -->
      <first-page ref="first_page"></first-page>
      <second-page ref="second_page"></second-page>
      <third-page ref="third_page"></third-page>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item @click="currentPlay = 'firstPage'">
        <span>菜单</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.xinyongka.active : icon.xinyongka.normal"
        >
      </van-tabbar-item>
      <van-tabbar-item
        icon="search"
        @click="currentPlay = 'secondPage'"
      >
        <span>发现</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.faxian.active : icon.faxian.normal"
        >
      </van-tabbar-item>
      <van-tabbar-item
        icon="setting-o"
        @click="currentPlay = 'thirdPage'"
      >
        <span>我的</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.wode.active : icon.wode.normal"
        >
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import firstPage from "./index/firstPage";
import secondPage from "./index/secondPage";
import thirdPage from "./index/thirdPage";
export default {
  data() {
    return {
      active:
        this.$route.name == "firstPage"
          ? 0
          : this.$route.name == "secondPage"
          ? 1
          : this.$route.name == "thirdPage"
          ? 2
          : 0,
      icon: {
          xinyongka: {
            normal: '../../../static/img/nav/信用卡1@2x.png',
            active: '../../../static/img/nav/信用卡2@2x.png'
          },
          faxian: {
            normal: '../../../static/img/nav/发现1@2x.png',
            active: '../../../static/img/nav/发现2@2x.png'
          },
          wode: {
            normal: '../../../static/img/nav/我的1@2x.png',
            active: '../../../static/img/nav/我的2@2x.png'
          },
          daikuan: {
            normal: '../../../static/img/nav/贷款1@2x.png',
            active: '../../../static/img/nav/贷款2@2x.png'
          }

        },
      currentPlay: "firstPage",
      percent: 0,
      touch: {}
    };
  },
  components: {
    "first-page": firstPage,
    "second-page": secondPage,
    "third-page": thirdPage
  },

  computed: {},

  mounted() {},

  methods: {
    touchStart(e) {
      const touch = e.touches[0];

      this.touch.startX = touch.pageX;
      this.touch.startY = touch.pageY;
    },
    touchMove(e) {
      console.clear()
      console.log("move");
      const touch = e.touches[0];
      const deltaX = touch.pageX - this.touch.startX;
      const deltaY = touch.pageY - this.touch.startY;
      console.log('deltaX:--'+deltaX)
      console.log('deltaY:--'+deltaY)
      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        return;
      }
      console.log('window.innerWidth:'+window.innerWidth)
      const left = this.currentPlay == "firstPage" ? 0 :  this.currentPlay == "second" ? -375 :  -window.innerWidth;
      console.log('left:--'+left)
      var offsetWidth = Math.min(
        0,
        Math.max(-window.innerWidth, left + deltaX)
      );
      this.percent = Math.abs(offsetWidth / window.innerWidth);
      this.$refs.back.style["transform"] = `translate3d(${offsetWidth}px,0,0)`;
      this.$refs.back.style["transitionDuration"] = 10;
  
    },
    touchEnd() {
      console.log(this.currentPlay);
      console.log("end");
      let offsetWidth;
      let percent;
      if (this.currentPlay === "firstPage") {
        if (this.percent > 0.3) {
          // this.$router.push({ name: "secondPage" });
          this.currentPlay = "secondPage";
          this.active = 1;
          offsetWidth = -window.innerWidth;
        } else {
          offsetWidth = 0;
        }
      } else if (this.currentPlay === "secondPage") {
        if (this.percent < 0.7) {
          this.currentPlay = "firstPage";
           this.active = 0;
          offsetWidth = 0;
        } else {
          this.currentPlay = "thirdPage";
          this.active = 2;
          offsetWidth = -window.innerWidth;
          console.log(this.currentPlay)
        }
      } else if (this.currentPlay === "thirdPage") {
        if (this.percent < 0.7) {
          this.currentPlay = "secondPage";
           this.active = 1;
          offsetWidth = 0;
        } else {
          this.currentPlay = "firstPage";
          this.active = 0;
          offsetWidth = -window.innerWidth;
        }
      }
      this.$refs.back.style["transform"] = `translate3d(${offsetWidth}px,0,0)`;
      this.$refs.back.style["transitionDuration"] = 10;
    }
  }
};
</script>
<style lang='less' scoped>
.box {
  height: 100%;
  width: 100%;
  white-space: nowrap;
  font-size:0;
}
</style>