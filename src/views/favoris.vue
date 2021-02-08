<template>
  <div>
    <img v-for="(favori, index) in favoris" :key="index" :src=favori />
  </div>
</template>

<script>
  export default {
    name: "favoris",
    data(){
      return{
        favoris: ''
      }
    },
    created() {
      this.favoris = JSON.parse(localStorage.getItem("articles"))
    }
  }
</script>