<template>
  <div>
     <ul v-if="layout == 'grid'" class="grid">

        <li v-for="item in articles" :key="item.image.title">
          <img v-bind:src="item.image.large" />
          <goTo :url="item.url"></goTo>
          <button @click="addFavoris(item.image.large)">Favoris</button>
        </li>
      </ul>
  </div>
</template>
<script>
import goTo from "@/components/details";

export default {
  components: {
    goTo
  },
  data() {
    return {
      // The layout mode, possible values are "grid" or "list".
      layout: 'grid',
      articles: [{
        "title": "Game of Thrones",
        "url": "https://www.allocine.fr/series/ficheserie_gen_cserie=7157.html",
        "image": {
          "large": "https://cdn.radiofrance.fr/s3/cruiser-production/2019/04/85b28118-69df-4230-99c5-999952d80781/1136_daenerys.jpg",

        }},
        {
          "title": "Shameless",
          "url": "https://www.allocine.fr/series/ficheserie_gen_cserie=7634.html",
          "image": {
            "large": "https://fr.web.img4.acsta.net/pictures/18/07/27/12/29/1469043.jpg",

          }

        },
        {
          "title": "Stranger Things",
          "url": "https://www.allocine.fr/series/ficheserie_gen_cserie=19156.html",
          "image": {
            "large": "https://www.presse-citron.net/app/uploads/2019/07/image-presse-citron-1400x932.png",

          }

        },
        {
          "title": "The 100",
          "url": "https://www.allocine.fr/series/ficheserie_gen_cserie=11871.html",
          "image": {
            "large": "https://media.melty.fr/article-4148943-ajust_1200/media.jpg",

          }

        }

      ]

    }
  },

  methods:{
    addFavoris: function(imageLarge){
      let datas = localStorage.getItem("articles");
      let localstorage = []
      console.log(datas)
      if (datas == "" || datas == null ){
        localStorage.setItem("articles", JSON.stringify([]))
      }
      localstorage = JSON.parse(localStorage.getItem("articles"))
      if (localstorage.find(x => x == imageLarge)){
        return null
      }

      localstorage.push(imageLarge)
      localStorage.setItem("articles", JSON.stringify(localstorage))

    },
  }
}
</script>