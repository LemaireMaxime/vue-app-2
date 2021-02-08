<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/films">Films</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/series">Series</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/recherche">Recherche</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/favoris">Favoris</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


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
</style>
