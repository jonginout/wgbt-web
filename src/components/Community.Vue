<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item active">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Morbi leo risus</li>
      <li class="list-group-item">Porta ac consectetur ac</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Community',
  data () {
    return {

    }
  },
  mounted() {

    this.axios
    .get('/question', {
      params: {
        query : ""
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch(err => {
    })

  },
  methods: {

    getBoardList(){

    }
  }
}
</script>

<!-- scoped를 쓰면 이 컴포넌트에서만 css가 적용됨 -->
<style scoped>

</style>
