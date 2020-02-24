<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
}

body,
html {
  height: 100%;
  margin: 0;
}

body {
  background: #fff none repeat scroll;
  font-size: 14px;
  font-weight: normal;
  line-height: 24px;
  position: relative;
  font-family: "Poppins", sans-serif;
  overflow-x: hidden;
}

ul li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul {
  margin: 0;
  padding: 0;
}

a,
a > * {
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: #014073;
}

a:hover {
  text-decoration: none;
}

/*2.-----  Typography -----*/
h1 {
  font-size: 60px;
  color: #000;
  line-height: 70px;
  letter-spacing: 0.25px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  margin: 0;
}

h2 {
  font-size: 48px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: #000;
  margin: 0;
  letter-spacing: 0.25px;
  line-height: 48px;
}

h3 {
  font-size: 24px;
  font-family: "Poppins", sans-serif;
  margin: 0;
  color: #000;
  font-weight: 600;
  letter-spacing: -0.36px;
}

h4 {
  font-size: 30px;
  line-height: 1.2;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  margin: 0;
  color: #000;
}

h5 {
  font-size: 24px;
  line-height: 27px;
  font-family: "Poppins", sans-serif;
  margin: 0;
  color: #000;
  font-weight: 600;
}
h6 {
  font-size: 20px;
  line-height: 1;
  font-family: "Poppins", sans-serif;
  margin: 0;
  color: #000;
  font-weight: 600;
  letter-spacing: 0.25px;
}
p {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  color: var(--theme-p-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.25px;
}
/*---- Preloader ----*/
#preloader {
  background-color: #fff;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
}

</style>