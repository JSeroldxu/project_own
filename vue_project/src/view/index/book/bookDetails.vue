<template>
  <div>
    <van-nav-bar :title="bookDetail.title" left-arrow>
      <van-icon name="search" slot="right" />
    </van-nav-bar>
  </div>
</template>

<script>
  export default {
    name: "bookDetails",
    data() {
      return {
        bookDetail:null
      }
    },
    mounted() {
      this.getBookDetail()
    },
    methods: {
      getBookDetail() {
        this.$ajax.get(this.$novel_url+'book/'+this.$route.query.id).then(data=>{
          this.bookDetail = data.data.book;
        })
      },
      onClickLeft(){
        this.$router.back(-1)

      },
      onClickRight(){

      }
    }
  }
</script>

<style scoped>

</style>
