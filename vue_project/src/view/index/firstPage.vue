<!--  -->
<template>
  <div class="first_box">
    <van-nav-bar title="首页">
      <van-icon name="search" slot="right"/>
    </van-nav-bar>
    <main>
      <ul>
        <li v-for="(noval,index) in indexData" :key="index" @click="selectBook(noval._id)">
          <div class="book_cover">
            <img :src="noval.cover" alt="" v-lazy="noval.cover">
          </div>
          <div class="book_details">
            <h2>{{ noval.title }}</h2>
            <div class="author">
              <h4>作者：{{ noval.author }}</h4>
              <span>{{ noval.minorCate }}</span>
            </div>
            <p class="book_details">{{ noval.shortIntro }}</p>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        indexData: [],
        loading: true,
      }
    },
    computed: {},

    mounted() {
      this.getIndexData()
    },

    methods: {
      getIndexData() {
        this.loading = true;
        this.$ajax.get(this.$novel_url + 'index').then(data => {
          console.log(data.data)
          this.indexData = data.data.books;
          this.loading = false;
        })
      },
      //跳转小说详情
      selectBook(id) {
        this.$router.push({name: 'bookDetails', query: {id: id}})
      }
    }
  }
</script>
<style lang='less' scoped>
  .first_box {
    overflow-x: hidden;
    overflow-y: scroll;
    main {
      overflow-x: hidden;
      padding: 10px 10px 50px 10px;
      ul {

        li {
          height: 100px;
          color: #555555;
          display: flex;
          flex-direction: row;
          margin: 10px 0;
          .book_cover {
            display: inline-block;
            height: 100%;
            img {
              height: 100%;
            }
          }
          .book_details {
            width: 100%;
            padding-left: 10px;
            h2 {
              font-weight: bold;
            }
            .author {
              position: relative;
              h4 {
                color: #ffa255;
                line-height: 30px;
              }
              span {
                position: absolute;
                right: 0;
                top: 0;
                padding: 5px;
                border: 1px solid #ccc;
                border-radius: 3px;
              }
            }
          }
          p.book_details {
            margin-top: 10px;
            padding: 0;
            height: 35px;
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
      }
    }

  }
</style>
