<!--  -->
<template>
  <div class="first_box">

    <div class="img_scale"
         @click="selectImg($event)">
      <img :src="url"
           alt="">
    </div>
    <imgScale :imgUrl="clickUrl"
              v-if="ImgShow"></imgScale>
  </div>
</template>

<script>
import imgScale from './imgScale'
export default {
  components: {
    imgScale
  },
  data() {
    return {
      url:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559800042782&di=90a0b39b857f66e031a89a3f6f15a5c6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201509%2F15%2F20150915192922_BszkR.thumb.700_0.jpeg',
      clickUrl: '',
      ImgShow: false
    }
  },
  computed: {},

  mounted() {},

  methods: {
    selectImg(ev) {
      console.log(this.ImgShow)
      ev.stopPropagation()
      this.ImgShow = true
      this.clickUrl = this.url
    }
  }
}
</script>
<style lang='less' scoped>
.first_box {
  width: 100%;
  height: 100%;
  background: rgb(253, 253, 253);
  display: inline-block;
  vertical-align: top;
  position: relative;
  .img_scale {
    height: 200px;
    overflow: hidden;
    border: 1px solid #ccc;
    max-width: 80%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 100%;
    }
  }
}
</style>