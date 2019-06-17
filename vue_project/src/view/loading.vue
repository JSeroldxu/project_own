<template>
  <div class="box">
    <img src="/static/img/loading.gif" alt="">
  </div>
</template>

<script>
  export default {
    name: "loading",
    data() {
      return {}
    },
    mounted() {
      this.routerPush()
    },
    methods: {
      routerPush(){
        setTimeout(()=>{
          this.$router.push({name:'Login'})
        },2000)
      }
    }
  }
</script>

<style scoped lang="less">
  div.box {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #5e4674;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      margin-top: -100px;
    }
  }
</style>
