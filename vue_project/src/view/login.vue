<template>
  <div class="box">
    <main>
      <div >
        <p>账号：</p>
        <input type="text" placeholder="请输入账号" v-focus>
      </div>
      <div>
        <p>密码：</p>
        <input type="password" placeholder="请输入密码">
      </div>
      <button @click="login()">登录</button>
    </main>

  </div>
</template>

<script>
import Vue from 'vue'
Vue.directive("focus", {
  inserted: ev => {
    console.log(ev.name)
    ev.focus();
  }
});
export default {
  name: "login",

  data() {
    return {};
  },
  mounted() {},
  methods: {
    login() {
      this.$router.push({ name: "slidingBlock" });
    },
  }
};
</script>

<style lang="less" scoped>
div.box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  // margin-top: 100px;
  overflow: hidden;
  /*align-items: center;*/
  main {
    width: 200px;
    height: 200px;
     margin-top: 100px;
    div {
      margin: 20px 0;
      input {
        display: block;
        margin: 0 auto;
        padding: 10px;
        width: 100%;
        border-radius: 5px;
        border: 1px solid #ccc;
      }
      p {
        line-height: 30px;
        font-size: 14px;
      }
    }
    button {
      width: 100%;
      padding: 10px 0;
      border-radius: 5px;
      background: -webkit-linear-gradient(to right, #5dbccc, #4334cc);
      background: linear-gradient(to right, #5dbccc, #4334cc);
    }
  }
}
</style>
