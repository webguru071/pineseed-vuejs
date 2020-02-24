<template>
  <div id="app">
    <Header/>
    <!-- <Home/> -->
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
// import Home from './views/Home'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    // Home,
    Footer
  }
}
</script>