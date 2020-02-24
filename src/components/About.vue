<template>

    <!-- About Area -->
    <section class="about-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="about-img">
                        <img src="assest/img/about.png" alt="img">
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="about-text">
                        <p>About Us</p>
                        <h2>We Are With You Every Step Of The Way</h2>
                    </div>
                    <div class="about-inner-text">
                        
                        <p>Whether you are looking for a personal website hosting plan or a business website hosting plan, services will not only help you achieve your overall website goals, but will also provide you with the confidence you need in knowing that you are partnered with a reliable and secure website hosting platform.</p>
                        <p>We are one of the easiest website hosting platforms to use, and remain committed to providing our customers with one of the best hosting solutions on the market.</p>
                        <a href="#!" class="btn btn-read-more">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
export default {
    name: 'About'
}
</script>

<style>
/* -----About Area--------- */
.about-area {
  padding: 150px 0 0 0;
}
.about-img img {
  width: 100%;
}
.about-text p {
  font-size: 18px;
  color: var(--theme-p-color);
}
.about-text h2 {
  font-size: 36px;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--theme-color);
  margin-top: 10px;
}
.about-inner-text p {
  margin-top: 20px;
}
</style>