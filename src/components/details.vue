<template>
  <div>
    <button @click="redirect(url)">Détail</button>
  </div>
</template>

<script>
  export default {
    name: "goTO",
    props: {
      url: String
    },
    methods: {
      redirect(url){
        window.open(url,"_target")
      }
    }
  }


</script>