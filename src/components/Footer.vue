<template>
    <!--Footer Area -->
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-12 col-12">
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div class="about-footer">
                        <div class="footer-logo">
                            <a href="#!"><img src="assest/img/logo.png" alt="img"></a>
                        </div>
                        <div class="footer-about-para">
                            <p>We make registering, hosting, and managing domains for yourself or others easy and affordable, because the internet needs people. Bring to the table win-win survival strategies.</p>
                            <hr class="footer-line">
                            <p>Join Our Newsletter & Communication We'll send you news and offers. Nanotechnology immersion along the information highway.</p>
                        </div>
                        <div class="footer-input">
                            <form action="#">
                            <div class="input-group">
                                <input type="email" class="form-control" id="email" placeholder="Insert your email" required="">
                                <div class="input-group-append">
                                    <button class="btn search-btn btn-hover d-flex align-items-center" type="submit">
                                        <span class="ti-search mr-2"></span> Send
                                    </button>
                                </div>
                            </div>
                            </form>
                        </div>
                        <div class="footer-icon">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                        <hr class="footer-line">
                        <div class="footer-contact">
                            <h3><a href="#!">+0088 422 886</a></h3>
                            <p><a href="#!">hostcluster@example.com</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                    <div class="footer-list">
                        <div class="list-link-items">
                            <h3>Domain</h3>
                            <ul>
                                <li><a href="#!">Domain Transfer</a></li>
                                <li><a href="#!">Personal Domain</a></li>
                                <li><a href="#!">PremiumDNS</a></li>
                                <li><a href="#!">Domain Name Search</a></li>
                                <li><a href="#!">Register Domain</a></li>
                                <li><a href="#!">FreeDNS</a></li>

                            </ul>
                        </div>
                        <div class="list-link-items">
                            <h3>Resellers</h3>
                            <ul>
                                <li><a href="#!">SSL Certificates</a></li>
                                <li><a href="#!">Reseller Hosting</a></li>

                            </ul>
                        </div>
                        <div class="list-link-items">
                            <h3>Legals</h3>
                            <ul>
                                <li><a href="#!">Terms Of Services</a></li>
                                <li><a href="#!">Acceptable Use Policy</a></li>
                                <li><a href="#!">Personal Domain</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                    <div class="footer-list">
                        <div class="list-link-items">
                            <h3>Hosting</h3>
                            <ul>
                                <li><a href="#!">WordPress Hosting</a></li>
                                <li><a href="#!">Shared Hosting</a></li>
                                <li><a href="#!">Reseller Hosting</a></li>
                                <li><a href="#!">Dedicated Servers</a></li>
                                <li><a href="#!">Cloud Servers</a></li>
                                <li><a href="#!">Data Migration</a></li>

                            </ul>
                        </div>
                        <div class="list-link-items">
                            <h3>Support</h3>
                            <ul>
                                <li><a href="#!">Support Center</a></li>
                                <li><a href="#!">Submit Ticket</a></li>

                            </ul>
                        </div>
                        <div class="list-link-items">
                            <h3>Careers</h3>
                            <ul>
                                <li><a href="#!">Start your Careers</a></li>
                                <li><a href="#!">Submit your CV</a></li>
                                <li><a href="#!">Purchase</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
   name: 'Footer',
}
</script>

<style>
/* --Footer Area-- */
.footer {
  background: #6f83e9;
  padding: 100px 0;
}
footer .footer-top {
  background-color: #6773dd;
}
.about-footer {
  width: 90%;
}
.footer-about-para {
  margin-top: 30px;
}
.footer-about-para p {
  color: #fff;
}
.footer-line {
  margin: 30px 0;
  background: #fff;
}
.footer-input {
  margin-top: 20px;
}
.footer-input .form-control {
  font-size: 14px;
  height: 50px;
  border-radius: 10px;
  padding: 2px 25px;
}
.footer-input button.search-btn {
  color: #ffffff;
  padding-left: 30px;
  padding-right: 30px;
  border: 1px solid #0073ec;
  background: rgba(0, 115, 236, 0.9);
  -webkit-box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.15);
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.15);
  letter-spacing: 0.5px;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  z-index: 0 !important;
  border-radius: 0 10px 10px 0;
}
.footer-icon {
  margin-top: 30px;
}
.footer-icon a i {
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  border: 1px solid #fff;
  font-size: 16px;
  color: #fff;
  margin-right: 15px;
  -webkit-transition: 0.4s all;
  -o-transition: 0.4s all;
  transition: 0.4s all;
}
.footer-icon a i:hover {
  color: #000;
}
.footer-contact h3 a {
  font-size: 30px;
  color: #0b75ec;
  -webkit-transition: 0.4s all;
  -o-transition: 0.4s all;
  transition: 0.4s all;
}
.footer-contact h3 a:hover {
  color: #000;
}
.footer-contact p {
  margin-top: 10px;
}
.footer-contact p a {
  color: #fff;
  -webkit-transition: 0.4s all;
  -o-transition: 0.4s all;
  transition: 0.4s all;
}
.footer-contact p a:hover {
  color: #000;
}
.list-link-items {
  margin-bottom: 40px;
}
.list-link-items h3 {
  color: #fff;
}
.list-link-items ul {
  margin-top: 20px;
}
.list-link-items ul li {
  margin-bottom: 10px;
}
.list-link-items ul li a {
  font-size: 16px;
  color: #fff;
  -webkit-transition: 0.4s all;
  -o-transition: 0.4s all;
  transition: 0.4s all;
}
.list-link-items ul li a:hover {
  color: #000;
}
.navbar-light .navbar-toggler {
  border-color: transparent;
}

</style>