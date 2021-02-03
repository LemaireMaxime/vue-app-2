<style>
/* Hide un-compiled mustache bindings
until the Vue instance is ready */

[v-cloak] {
  display: none;
}

*{
  margin:0;
  padding:0;
}

body{
  font:15px/1.3 'Open Sans', sans-serif;
  color: #5e5b64;
  text-align:center;
}

a, a:visited {
  outline:none;
  color:#389dc1;
}

a:hover{
  text-decoration:none;
}

section, footer, header, aside, nav{
  display: block;
}

/*-------------------------
  The search input
--------------------------*/

.bar{
  background-color:#5c9bb7;

  background-image:-webkit-linear-gradient(top, #5c9bb7, #5392ad);
  background-image:-moz-linear-gradient(top, #5c9bb7, #5392ad);
  background-image:linear-gradient(top, #5c9bb7, #5392ad);

  box-shadow: 0 1px 1px #ccc;
  border-radius: 2px;
  width: 580px;
  padding: 10px;
  margin: 45px auto 25px;
  position:relative;
  text-align:right;
  line-height: 1;
}

.bar a{
  background:#4987a1 center center no-repeat;
  width:32px;
  height:32px;
  display:inline-block;
  text-decoration:none !important;
  margin-right:5px;
  border-radius:2px;
  cursor:pointer;
}

.bar a.active{
  background-color:#c14694;
}



.bar input{
  background:#fff no-repeat 13px 13px;

  border: none;
  width: 100%;
  line-height: 19px;
  padding: 11px 0;

  border-radius: 2px;
  box-shadow: 0 2px 8px #c4c4c4 inset;
  text-align: left;
  font-size: 14px;
  font-family: inherit;
  color: #738289;
  font-weight: bold;
  outline: none;
  text-indent: 40px;
}

/*-------------------------
  List layout
--------------------------*/

ul.list{
  list-style: none;
  width: 500px;
  margin: 0 auto;
  text-align: left;
}

ul.list li{
  border-bottom: 1px solid #ddd;
  padding: 10px;
  overflow: hidden;
}

ul.list li img{
  width:120px;
  height:120px;
  float:left;
  border:none;
}

ul.list li p{
  margin-left: 135px;
  font-weight: bold;
  color:#6e7a7f;
}

/*-------------------------
  Grid layout
--------------------------*/

ul.grid{
  list-style: none;
  width: 570px;
  margin: 0 auto;
  text-align: left;
}

ul.grid li{
  padding: 2px;
  float:left;
}

ul.grid li img{
  width:280px;
  height:280px;
  object-fit: cover;
  display:block;
  border:none;
}

p{
  font-size:22px;
  font-weight:bold;
  color:#7d9098;
}

p b{
  color:#ffffff;
  display:inline-block;
  padding:5px 10px;
  background-color:#c4d7e0;
  border-radius:2px;
  text-transform:uppercase;
  font-size:18px;
}
.imgsmall{
  width: 200px;
  height: 200px;
}
</style>
<template>
  <div>
      <div class="bar">
        <input type="text" v-model="searchString" placeholder="Enter your search terms" />
      </div>
      <ul>
        <li v-for="article in filteredArticles" :key="article.image.title">
          <a v-bind:href="article.url"><img class="imgsmall" v-bind:src="article.image.large" /></a>
          <p>{{article.title}}</p>
        </li>
      </ul>
  </div>
</template>
<script>
export default {

  data() {
    return {

      layout: 'grid',
      searchString: "",
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

        },
        {
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

  methods: {
    makeActive: function (item) {

      this.active = item;
    },

    url: function (url) {
      window.location.href = url;
    }

  },
  computed: {
    // A computed property that holds only those articles that match the searchString.
    filteredArticles: function () {
      var articles_array = this.articles,
          searchString = this.searchString;

      if(!searchString){
        return articles_array;
      }

      searchString = searchString.trim().toLowerCase();

      articles_array = articles_array.filter(function(item){
        if(item.title.toLowerCase().indexOf(searchString) !== -1){
          return item;
        }
      })

      // Return an array with the filtered data.
      return articles_array;
    }
  }
}
</script>