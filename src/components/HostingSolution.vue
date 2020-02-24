<template>
    <!-- solution Area -->
    <section class="solution-area section">
        <div class="content-box text-center">
            <h2>Perfect Hosting Soultion</h2>
            <p>Our featured Service that we Provide</p>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div class="solution-items text-center">
                        <a href="#!">
                            <img src="assest/img/hostcluster-1.png" alt="img">
                        <h3>Web Hosting</h3>
                        <p>HostCluster offers hosting
                            plans that are secure, reliable, and
                            performing for just <span>$9.88/year</span> .</p>
                            <a href="#!" class="btn btn-read-more">Read More</a>
                        </a>
                        
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div class="solution-items text-center site-margin-two">
                        <a href="#!">
                            <img src="assest/img/hostcluster-2.png" alt="img">
                        <h3>Hosting Center</h3>
                        <p>HostCluster offers hosting
                            plans that are secure, reliable, and
                            performing for just <span>$7.88/year</span> .</p>
                            <a href="#!" class="btn btn-read-more">Read More</a>
                        </a>
                        
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div class="solution-items text-center site-margin">
                        <a href="#!">
                            <img src="assest/img/hostcluster-3.png" alt="img">
                        <h3>Cloud Hosting</h3>
                        <p>HostCluster offers hosting
                            plans that are secure, reliable, and
                            performing for just <span>$3.88/year</span> .</p>
                            <a href="#!" class="btn btn-read-more">Read More</a>
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HostingSolution'
}
</script>

<style>
/* Hosting Soultion Area */
.solution-area {
  background-image: url("/assest/img/hosting-bg.jpg");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
  padding: 150px 0;
}
.content-box {
  padding-bottom: 100px;
}
.content-box h2 {
  font-size: 36px;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--theme-color);
}
.content-box p {
  font-size: 18px;
  color: var(--theme-p-color);
  padding-top: 5px;
}

.solution-items {
  -webkit-box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
  padding: 40px 30px;
  background: #fff;
  -webkit-transition: 0.4s all;
  -o-transition: 0.4s all;
  transition: 0.4s all;
}
.solution-items:hover {
  -webkit-transform: translateY(-10px);
  -ms-transform: translateY(-10px);
  transform: translateY(-10px);
}
.solution-items h3 {
  color: var(--theme-color);
  margin-top: 30px;
  -webkit-transition: 0.4s all;
  -o-transition: 0.4s all;
  transition: 0.4s all;
}
.solution-items:hover h3 {
  -webkit-transform: translateY(10px);
  -ms-transform: translateY(10px);
  transform: translateY(10px);
}
.solution-items:hover p {
  -webkit-transform: translateY(10px);
  -ms-transform: translateY(10px);
  transform: translateY(10px);
}
.solution-items a p {
  color: var(--theme-p-color);
  margin-top: 20px;
  -webkit-transition: 0.4s all;
  -o-transition: 0.4s all;
  transition: 0.4s all;
}
.solution-items a p span {
  color: red;
}
.btn-read-more {
  background: var(--theme-color);
  color: #fff;
  padding: 7px 23px;
  margin-top: 31px;
  border-radius: 42px;
  font-size: 16px;
  -webkit-transition: 0.4s all;
  -o-transition: 0.4s all;
  transition: 0.4s all;
}
.btn-read-more:hover {
  background: #000;
  color: #fff;
}
</style>