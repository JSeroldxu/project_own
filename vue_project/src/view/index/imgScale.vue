<template>
  <div class="img_box">
    <slot></slot>
    <div class="img_bg">
      <img :src="url" alt="" @touchstart.prevent="touchstart($event)" @touchmove.prevent="touchmove($event)" @touchend.prevent="touchend($event)">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: String
  },
  data() {
    return {
      url: "",
      touchs: [],
      gesturestart: new CustomEvent("gesturestart"),
      gesturechange: new CustomEvent("gesturechange"),
      gestureend: new CustomEvent("gestureend"),
      isDoubleTouch: false,
      endPosition: ""
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.url = this.imgUrl;
  },

  methods: {
    touchstart(ev) {
      console.log(this.gesturestart);
      if (ev.touches.length >= 2) {
        this.isDoubleTouch = true;
        this.touchs = ev.touchs;
        let screenMinPoint = this.getMinPoint(this.touchs[0], this.touchs[1]); //获取两个触点中心坐标
        this.gesturestart.midPoint = [
          screenMinPoint[0] - ev.target.offsetLeft,
          screenMinPoint[1] - ev.target.offsetTop
        ];
        ev.target.dispatchEvent(this.gesturestart);
        alert("双指");
      }
    },
    touchmove(ev) {
      if (ev.touches.length >= 2 && this.isDoubleTouch) {
        let move = ev.touches;
        let scale =
          this.getDistance(move[0], move[1]) /
          this.getDistance(this.touchs[0], this.touchs[1]);
        let rotation =
          this.getAngle(move[0], move[1]) -
          this.getAngle(this.touchs[0], this.touchs[1]);
        this.gesturechange.scale = scale.toFixed(2);
        this.gesturechange.rotation = rotation.toFixed(2);
        e.target.dispatchEvent(gesturechange);
      }
    },
    touchend(ev) {
      if (this.isDoubleTouch) {
        this.isDoubleTouch = false;
        this.gestureend.position = this.endPosition;
        ev.target.dispatchEvent(this.gestureend);
      }
    },
    //   获取中心点
    getMinPoint(p1, p2) {
      let x = (p1.pageX - p2.pageX) / 2;
      let y = (p1.pageY - p2.pageY) / 2;
      return [x, y];
    },
    // 两点的距离
    getDistance(p1, p2) {
      let x = p2.pageX - p1.pageX;
      let y = p2.pageY - p1.pageY;
      return Math.sqrt(x * x + y * y);
    },
    // 两点夹角
    getAngle(p1, p2) {
      var x = p1.pageX - p2.pageX,
        y = p1.pageY - p2.pageY;
      return (Math.atan2(y, x) * 180) / Math.PI;
    }
  }
};
</script>
<style lang='less' scoped>
.img_box {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 11;
  background: rgba(0, 0, 0, 0.5);

  .img_bg {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 90%;
    }
  }
}
</style>
