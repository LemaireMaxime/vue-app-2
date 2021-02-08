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
      layout: 'grid',
      articles: [{
        "title": "Joker",
        "url": "https://www.allocine.fr/film/fichefilm_gen_cfilm=258374.html",
        "image": {
          "large": "https://images-na.ssl-images-amazon.com/images/I/71wbalyU7tL._AC_SY355_.jpg",

        }},
        {
          "title": "2001 l'odyssée de l'espace",
          "url": "https://www.allocine.fr/film/fichefilm_gen_cfilm=27442.html",
          "image": {
            "large": "https://fr.web.img2.acsta.net/pictures/18/05/04/14/53/4306860.jpg",

          }

        },
        {
          "title": "Retour vers le futur",
          "url": "https://www.allocine.fr/film/fichefilm_gen_cfilm=448.html",
          "image": {
            "large": "https://fr.web.img2.acsta.net/medias/nmedia/18/35/91/26/18686482.jpg",

          }

        },
        {
          "title": "Orange mécanique",
          "url": "https://www.allocine.fr/film/fichefilm_gen_cfilm=260.html",
          "image": {
            "large": "https://p6.storage.canalblog.com/64/57/1299180/102005100_o.jpg",

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