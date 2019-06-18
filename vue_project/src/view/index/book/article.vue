<!-- 小说文章 -->
<template>
  <div>
    <van-nav-bar :title="bookSource" left-arrow @click-left="onClickLeft" :fixed="true">
      <!-- <van-icon name="search" slot="right" /> -->
    </van-nav-bar>
    <main>
      <pre v-html="this.articleData" v-if="show"></pre>
      <div class="page_">
        <input type="submit" value="上一页">
        <input type="submit" value="下一页" @click="nextPage()">
      </div>
    </main>
  </div>
</template>

<script>
    import {filtersTime} from '../../../mixin/mixin'
  export default {
      mixins:[filtersTime],
    data() {
      return {
        page: 1,
        bookSource: '',
        articleData: '',
        show: false,
      };
    },

    components: {},

    computed: {},
    created() {
      
    },
    mounted() {
      this.Toast()
      this.getChapter()

    },
    methods: {
      nextPage(){
          this.page++;
          this.getArticle()
      },
      getChapter() {
        this.$ajax.get(this.$novel_url + 'chapter', {
          params: {
            id: this.$route.query.id,
          }
        }).then(data => {
          this.link = data.data.chapters[0].link
          this.bookSource = data.data.chapters[this.page].title
          this.getArticle()
        })
      },
      // 获取文章内容
      getArticle() {
        this.$ajax.get(this.$novel_url + 'article', {
          params: {
            link: this.link,
            n: this.page,
            id: this.$route.query.id
          }
        }).then(data => {
          let content = data.data.chapter.body;
          this.articleData = '<p>' + content.replace(/\n*$/g, '').replace(/\n/g, '</p> <p>') + '</p>';
          this.link = data.data.next;
          window.scroll(0, 0);
          this.show = true;
          this.ToastClear()
        })
      },
      onClickLeft() {
        this.$router.back(-1)
      }
    }
  }
</script>
<style lang='less' scoped>
  main {
    padding: 0 10px;
    margin-top: 50px;
    text-align: left;
    // line-height: 34px;
    font-size: 16px;
    width: calc(100% - 20px);

    pre {
      width: 100% !important;
      text-indent: 2em;
      text-align: left;
      line-height: 34px;
      white-space: inherit;
      color: #2c3e50;

      p {
        line-height: 34px;
      }

    }
    .page_{
        width: 170px;
        display: block;
        margin: 15px auto;
        input{
            width: 80px;
            background: #fff;
        }
    }


  }
</style>