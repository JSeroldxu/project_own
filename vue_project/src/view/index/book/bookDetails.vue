<template>
  <div class="detail_box">
    <van-nav-bar :title="bookDetail.title" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <main>
      <div class="cover">
        <img :src="bookDetail.cover" alt="">
      </div>
      <h2>{{ bookDetail.title }}</h2>
      <div class="detail_">
        <p><span class="color_">{{ bookDetail.author }}</span> | {{ bookDetail.cat }} |
          {{ (bookDetail.wordCount / 10000).toFixed(2) + '万字' }}</p>
        <p>更新时间：<span class="color_">{{ bookDetail.updated | formatDate }}</span></p>
        <p>最新文章：{{ bookDetail.lastChapter }}</p>
      </div>
      <div class="detail_btn">
        <button class="start_read" @click="startRead()">开始阅读</button>
        <button class="select_tab">查看目录</button>
      </div>
    </main>
  </div>
</template>

<script>
  import {
    filtersTime
  } from '../../../mixin/mixin'
  export default {
    name: "bookDetails",
    mixins: [filtersTime],
    data() {
      return {
        bookDetail: {}
      }
    },
    mounted() {
      this.getBookDetail()
      this.getSource()
    },
    methods: {
      getBookDetail() {
        this.$ajax.get(this.$novel_url + 'book/' + this.$route.query.id).then(data => {
          this.bookDetail = data.data.book;
        })
      },
      // 后退
      onClickLeft() {
        this.$router.push({
          name: 'firstPage'
        })
      },
      // 获取正版
      getSource() {
        this.$ajax.get(this.$novel_url + 'source', {
          params: {
            id: this.$route.query.id,
          }
        }).then(data => {
          this.bookSource = data.data.books
        })
      },
      
      onClickRight() {

      },
      // 开始阅读跳转
      startRead() {
        this.$router.push({
          name: 'bookArticle',
          query: {
            link: this.bookSource.link,
            id: this.bookSource._id
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .detail_box {
    height: 100%;
    overflow: hidden;

    main {
      height: 100%;

      .cover {
        height: 200px;
        margin: 15px 0;
        display: flex;
        justify-content: center;

        img {
          height: 200px;
          border: 1px solid #ccc;
          padding: 5px;
        }
      }

      h2 {
        text-align: center;
        font-weight: bold;
        font-size: 18px;
      }

      .detail_ {
        overflow: hidden;
        margin: 15px 0 5px 0;

        p {
          font-size: 14px;
          line-height: 24px;
          text-align: center;

          span.color_ {
            color: #f60;
          }
        }
      }

      .detail_btn {
        overflow: hidden;
        padding: 0 15px;

        .start_read {
          background: red;
          color: #fff;
          padding: 2px 0;
          width: 100%;
          line-height: 28px;
          font-size: 16px;
        }

        .select_tab {
          color: red;
          background: #fff;
          padding: 5px 15px;
          border: 1px solid #ccc;
          border-radius: 5px;
          line-height: 28px;
          font-size: 14px;
          margin: 10px auto;
          display: block;
        }
      }
    }

  }
</style>