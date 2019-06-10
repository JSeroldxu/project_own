<!--  -->
<template>
  <div>
    <main>
      <div class="img_box">
        <img src="" alt="" >
      </div>
      <div class="sliding">
          <span class="mouse_sliding" @touchstart="touchstart" >
              
          </span>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
        beginClientX:0,
        beginClientY:0,
    }
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
      touchstart(ev){
          console.log(ev)
            //   取消默认事件
          ev.preventDefault && ev.preventDefault()
          //距离屏幕左边距离
          this.beginClientX = ev.changedTouches[0].clientX;
          this.beginClientY = ev.changedTouches[0].clientY;
          console.log(ev)
          console.log(this.beginClientX)
      },
      mouseMoveFn(){
          document.getElementsByClassName('mouse_sliding')
      }
  }
}
</script>
<style lang='less' scoped>
main {
  overflow: hidden;
  border:1px solid #ccc;
  .img_box {
    width: 100%;
    height: 200px;
    overflow: hidden;
    background: #ccc;
    margin: 0 auto;
    img{
        width: 200px;
        height: 100px;
    }
  }
  .sliding{
      height: 50px;
      position: relative;
      span{
          width: 50px;
          height: 50px;
          display: inline-block;
          background: rgb(172, 166, 166);
          position: absolute;
      }
  }
}
</style>