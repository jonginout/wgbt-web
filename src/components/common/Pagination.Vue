<template>
  <div class="pagination_container">
    <nav aria-label="Page navigation">
      <ul class="pagination">

        <template v-if="pageInfo.firstPageBlock!=0">
          <li class="page-item" >
            <a class="page-link" @click="movePage(0)" aria-label="Previous">
              <span aria-hidden="true"><<</span>
            </a>
          </li>
          <li class="page-item" >
            <a class="page-link" @click="movePage((pageInfo.nowPage-1))" aria-label="Previous">
              <span aria-hidden="true"><</span>
            </a>
          </li>
        </template>

        <li class="page-item" :class="{ active : pageInfo.nowPage == i }"
        v-for="i in range(pageInfo.firstPageBlock, (pageInfo.lastPageBlock+1))" :key="i">
          <a class="page-link" @click="movePage(i)">{{(i+1)}}</a>
        </li>
        
        <template v-if="pageInfo.lastPageBlock!=(pageInfo.totalPage-1)">
          <li class="page-item" >
            <a class="page-link" @click="movePage((pageInfo.nowPage+1))" aria-label="Next">
              <span aria-hidden="true">></span>
            </a>
          </li>
          <li class="page-item" >
            <a class="page-link" @click="movePage((pageInfo.totalPage-1))" aria-label="Next">
              <span aria-hidden="true">>></span>
            </a>
          </li>
        </template>

      </ul>
    </nav>
  </div>
</template>

<script>
// pageInfo : {        
//   firstPageBlock : 0,
//   lastPageBlock : 0,
//   totalPage : 0,
//   nowPage : 0,
// }
export default {
  name: 'Pagination',
  data () {
    return {

    }
  },
  props: ['pageInfo'],
  methods: {

    validPage(page){
      if(page < 0 || this.totalPage < page) return false;
      else return true;
    },

    movePage(page){
      if(!this.validPage(page)) return;
      this.pageInfo.nowPage = page;
      this.$emit('movePage', page);
    }

  }

}
</script>

<!-- scoped를 쓰면 이 컴포넌트에서만 css가 적용됨 -->
<style lang="scss">
  .pagination_container{

  }
</style>
