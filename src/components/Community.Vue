<template>
  <div class="community_container">

    <div class="row list_container">
      <div class="col-md-10 offset-md-1"> 
        <h2 class="title" @click="onclickReset">커뮤니티</h2>
        <ul class="list-group">
          <!-- active -->
          <div class="alert alert-danger" role="alert" v-if="list.length < 1">
            <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
            {{warnMessage}}
          </div>
          <router-link v-for="item in list" :key="item.no"
          :to="'/community/'+item.no" tag="li" class="list-group-item">
            {{item.title}}
            <span class="info">
              {{item.formattedCreatedDate}}
            </span>
          </router-link>
        </ul>
      </div>
    </div>

    <div class="row pagination_container justify-content-center">
        <pagination :page-info="pageInfo" @movePage="movePage"></pagination>
    </div>

    <div class="input-group col-md-4 offset-md-4">
      <input type="text" class="form-control" placeholder="Search..." v-model="pageInfo.query">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" @click="onclickSearch">검색</button>
      </div>
    </div>

  </div>
</template>

<script>
import Pagination from './common/Pagination'

export default {
  name: 'Community',
  data () {
    return {
      warnMessage : '',
      list : [],
      pageInfo : {        
        query : '',
        firstPageBlock : 0,
        lastPageBlock : 0,
        totalPage : 0,
        nowPage : 0,
      }
    }
  },
  mounted() {

    this.getBoardList()

  },
  methods: {

    onclickSearch(){
      if(!this.pageInfo.query) return false;
      this.getBoardList()
    },
    onclickReset(){
      this.resetBoardList()
    },

    resetBoardList(){
      this.pageInfo.query = ''
      this.pageInfo.nowPage = 0
      this.getBoardList()
    },
    movePage(page) {
      this.pageInfo.nowPage = page
      this.getBoardList()
    },


    getBoardList(){

      let self = this;
      this.axios
      .get('/question/list', {
        params : {
          query : this.pageInfo.query,
          nowPage : this.pageInfo.nowPage
        }
      })
      .then(function (response) {
        if(response.data.success){
          if(response.data.page.list.content.length < 1){
            self.warnMessage = '검색결과가 존재하지 않습니다.'
          }
          self.list  = response.data.page.list.content
          self.query  = response.data.page.query
          self.pageInfo.firstPageBlock = response.data.page.firstPageBlock
          self.pageInfo.lastPageBlock = response.data.page.lastPageBlock
          self.pageInfo.totalPage = response.data.page.totalPage
          self.pageInfo.nowPage = response.data.page.nowPage
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    }


  }
}
</script>

<!-- scoped를 쓰면 이 컴포넌트에서만 css가 적용됨 -->
<style lang="scss">
  .community_container{

    margin: 100px 0px 50px;

    .list_container{
      .title:hover{
        font-weight: bold;
        cursor: pointer;
      }
      .list-group{
        .alert-danger{
          margin: 30px 0px 30px;
        }
        .list-group-item{

          &:hover{
            background-color: beige;
            cursor: pointer;
          }

          .info{
            font-size: 13px;
            float: right;
          }
        }
      }
    }

    .pagination_container{
      margin-top: 10px;
    }
    

  }
</style>
