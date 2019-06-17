<!--  -->
<template>
  <div class="box">
    <div style="width: 100%;height: 100%;">
      <router-view></router-view>
    </div>
    <van-tabbar v-model="active" @change="handleClick(active)">
      <van-tabbar-item>
        <span>首页</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.xinyongka.active : icon.xinyongka.normal"
        >
      </van-tabbar-item>
      <van-tabbar-item icon="search">
        <span>搜索</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.faxian.active : icon.faxian.normal"
        >
      </van-tabbar-item>
      <van-tabbar-item icon="setting-o">
        <span>排行</span>
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
        active: this.$route.name == "firstPage" ? 0 : this.$route.name == "secondPage" ? 1 : this.$route.name == "thirdPage" ? 2 : 0,
        icon: {
          xinyongka: {
            normal: "../../../static/img/nav/信用卡1@2x.png",
            active: "../../../static/img/nav/信用卡2@2x.png"
          },
          faxian: {
            normal: "../../../static/img/nav/发现1@2x.png",
            active: "../../../static/img/nav/发现2@2x.png"
          },
          wode: {
            normal: "../../../static/img/nav/我的1@2x.png",
            active: "../../../static/img/nav/我的2@2x.png"
          },
          daikuan: {
            normal: "../../../static/img/nav/贷款1@2x.png",
            active: "../../../static/img/nav/贷款2@2x.png"
          }
        },
      };
    },


    computed: {},

    mounted() {
    },

    methods: {
      handleClick(val){
        console.log(val)
        if(val == 0){
          this.$router.push({name:'firstPage'})
        }else if(val == 1){
          this.$router.push({name:'secondPage'})
        }else if(val == 2){
          this.$router.push({name:'thirdPage'})
        }
      }
    }
  };
</script>
<style lang='less' scoped>
  .box {
    height: 100%;
    width: 100%;
  }
</style>
