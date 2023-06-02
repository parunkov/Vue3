<template>
  <div class="navigation">
    <nav><router-link to="/">Гид по вкусам</router-link></nav>
    <nav><router-link to="/catalog">Каталог</router-link></nav>
  </div>
  <router-view />
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navigation {
  display: flex;
  justify-content: center;
  background: #000;
  color: white;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: white;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
@import '@/styles/styles.scss';
@import '@/styles/resultStyles.scss';
</style>
