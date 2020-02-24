<template>
    <div class="main-header">
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
                        <li class="nav-item"><router-view to="/" class="nav-link">Home</router-view></li>
                        <li class="nav-item"><router-view to="/domain" class="nav-link">Domain</router-view></li>
                        <li class="nav-item"><router-view to="/hosting" class="nav-link">Hosting</router-view></li>
                        <li class="nav-item"><router-view to="/services" class="nav-link">Services</router-view></li>
                        <li class="nav-item"><router-view to="/price" class="nav-link">Price</router-view></li>
                        <li class="nav-item"><router-view to="/blog" class="nav-link">Blog</router-view></li>
                        <li class="nav-item"><router-view to="/contact" class="nav-link">Contact</router-view></li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>