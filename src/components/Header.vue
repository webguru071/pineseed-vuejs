<template>
    <!-- Header Area -->
    <header class="header-area">
        <!-- side header -->
        <div class="top-header-content">
            <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                <div class="top-address">
                    <ul class="list-inline">
                    <li class="list-inline-item">
                        <i class="fas fa-headphones"></i
                        ><a href="tel:+01 23 456 789">+01 23 456 789</a>
                    </li>
                    <li class="list-inline-item">
                        <i class="far fa-envelope"></i
                        ><a href="mailto:your mail@gmail.com"
                        >yourmail@domain.com</a
                        >
                    </li>
                    </ul>
                </div>
                </div>
                <div class="col-lg-6 col-md-6 text-right">
                <div class="top-signup-area text-lg-right">
                    <ul class="list-inline">
                    <li class="list-inline-item">
                        <a href="#!">LOGIN</a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#!">REGISTER</a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#!">HELP</a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>

        <!-- Logo & Navber -->
        <nav class="site-navigation navbar navbar-expand-lg navbar-light">
            <div class="container">
            <a class="navbar-brand" href="#"
                ><img src="assest/img/logo.png" alt="img"
            /></a>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
            <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
                    <li class="nav-item"><router-link to="/domain" class="nav-link">Domain</router-link></li>
                    <li class="nav-item"><router-link to="/hosting" class="nav-link">Hosting</router-link></li>
                    <li class="nav-item"><router-link to="/services" class="nav-link">Services</router-link></li>
                    <li class="nav-item"><router-link to="/price" class="nav-link">Price</router-link></li>
                    <li class="nav-item"><router-link to="/blog" class="nav-link">Blog</router-link></li>
                    <li class="nav-item"><router-link to="/contact" class="nav-link">Contact</router-link></li>
                </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style>

/* Top Header */
.top-header-content {
  background: var(--theme-color);
  padding: 10px 0;
}
.list-inline-item {
  margin-right: 20px !important;
}
.list-inline-item i {
  color: #fff;
  font-size: 14px;
  padding-right: 10px;
}
.list-inline-item a {
  color: #fff;
  font-size: 14px;
  -webkit-transition: 0.4s all;
  -o-transition: 0.4s all;
  transition: 0.4s all;
}
.list-inline-item a:hover {
  color: #000;
}
.navbar-brand img {
  width: 85%;
}
.navbar {
  padding: 0;
}
.site-navigation {
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  z-index: 999;
  position: relative;
}
.is-sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  -webkit-box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.09);
  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.09);
  background: #6f83e9;
  -webkit-animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;
  animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;
}
.is-sticky .navbar-light .navbar-nav .nav-link {
  color: #fff;
}
.nav-item {
  margin-right: 50px;
}
.navbar-light .navbar-nav .nav-link {
  font-size: 15px;
  color: #0f2137;
  font-weight: 500;
  padding: 0;
  -webkit-transition: 0.4s all;
  -o-transition: 0.4s all;
  transition: 0.4s all;
}
.navbar-light .navbar-nav .nav-link:hover {
  color: var(--theme-color);
}

</style>