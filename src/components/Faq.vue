<template>
    <!-- FAqs Area -->
    <section class="faqs">
        <div class="content-box text-center">
            <SectionMainTitle MainTitle = "FREQUENTLY ASKED QUESTION" />
            <SectionSubTitle SubTitle = "Our Featured Service that We Provides" />
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="accordion-wrapper">
                        <div id="accordion">
                            <div class="card margin-bottom-40">
                                <div class="card-header" id="headingTwo">
                                    <h5 class="mb-0">
                                        <a class="collapsed" role="button" data-toggle="collapse"
                                            data-target="#collapseTwo" aria-expanded="false"
                                            aria-controls="collapseTwo">
                                            Is Max hosting reliable?
                                        </a>
                                    </h5>
                                </div>
                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                                    data-parent="#accordion">
                                    <div class="card-body">
                                        <p>Hosting a website starts with installing a web server, an application on your Linode that delivers content through the Internet. This section will help you get started with Apache, the world’s most popular web server. For more information about Apache and other web servers, see our guides on web servers.</p> 
                                        <p>If you are using Ubuntu 18.04, instead of installing each component separately, use Tasksel to install a LAMP stack on your Linode. When Tasksel completes, skip the installation steps in each section below and continue.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card  margin-bottom-40">
                                <div class="card-header" id="headingThree">
                                    <h5 class="mb-0">
                                        <a class="collapsed" role="button" data-toggle="collapse"
                                            data-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">
                                            How to buy this?
                                        </a>
                                    </h5>
                                </div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                                    data-parent="#accordion">
                                    <div class="card-body">
                                        <p>Hosting a website starts with installing a web server, an application on your Linode that delivers content through the Internet. This section will help you get started with Apache, the world’s most popular web server. For more information about Apache and other web servers, see our guides on web servers.</p> 
                                        <p>If you are using Ubuntu 18.04, instead of installing each component separately, use Tasksel to install a LAMP stack on your Linode. When Tasksel completes, skip the installation steps in each section below and continue.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="card  margin-bottom-40">
                                <div class="card-header" id="headingOne">
                                    <h5 class="mb-0">
                                        <a role="button" data-toggle="collapse" data-target="#collapseOne"
                                            aria-expanded="true" aria-controls="collapseOne">
                                            How to install files?
                                        </a>
                                    </h5>
                                </div>
                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                                    data-parent="#accordion">
                                    <div class="card-body">
                                        <p>Hosting a website starts with installing a web server, an application on your Linode that delivers content through the Internet. This section will help you get started with Apache, the world’s most popular web server. For more information about Apache and other web servers, see our guides on web servers.</p> 
                                        <p>If you are using Ubuntu 18.04, instead of installing each component separately, use Tasksel to install a LAMP stack on your Linode. When Tasksel completes, skip the installation steps in each section below and continue.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="card  margin-bottom-40">
                                <div class="card-header" id="headingFour">
                                    <h5 class="mb-0">
                                        <a class="collapsed" role="button" data-toggle="collapse"
                                            data-target="#collapseFour" aria-expanded="false"
                                            aria-controls="collapseThree">
                                            How to sup this?
                                        </a>
                                    </h5>
                                </div>
                                <div id="collapseFour" class="collapse" aria-labelledby="headingFour"
                                    data-parent="#accordion">
                                    <div class="card-body">
                                        <p>Hosting a website starts with installing a web server, an application on your Linode that delivers content through the Internet. This section will help you get started with Apache, the world’s most popular web server. For more information about Apache and other web servers, see our guides on web servers.</p> 
                                        <p>If you are using Ubuntu 18.04, instead of installing each component separately, use Tasksel to install a LAMP stack on your Linode. When Tasksel completes, skip the installation steps in each section below and continue.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordin-btn text-center">
                        <a href="#!" class="btn btn-read-more pricing-btn">Explore Forum</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SectionMainTitle from './SectionMainTitle'
import SectionSubTitle from './SectionSubTitle'

export default {
    name: 'Faq',
    components: {
      SectionMainTitle,
      SectionSubTitle
    }
}
</script>

<style>
/* ---Faqs Area --*/
.faqs {
  padding: 100px 0;
}

.accordion-wrapper .card {
  -webkit-box-shadow: 0px 4px 5px rgba(102, 102, 102, 0.2);
  box-shadow: 0px 4px 5px rgba(102, 102, 102, 0.2);
  border: none;
  background-color: transparent;
  margin-bottom: 40px;
}
.accordion-wrapper .card .card-header {
  background-color: transparent;
  padding: 0;
  border: none;
  padding: 20px 30px;
  border-radius: 5px;
  line-height: 50px;
}
.card-body p {
  margin-bottom: 15px;
}
.accordion-wrapper .card .card-header a {
  display: block;
  font-size: 16px;
  line-height: 26px;
  font-weight: 600;
  background: #ffffff 0% 0% no-repeat padding-box;
  cursor: pointer;
  position: relative;
  color: var(--theme-color);
}
.accordion-wrapper .card .card-header a:after {
  position: absolute;
  right: 6px;
  top: 0px;
  content: "\f068";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  font-size: 14px;
  color: var(--gray1);
}
.accordion-wrapper .card .card-header a[aria-expanded="false"]:after {
  content: "\f067";
  color: var(--gray1);
}
.accordion-wrapper .card .card-body {
  padding: 10px 40px 20px 30px;
  font-family: var(--open-sans);
  color: var(--secondary-color);
  background-color: #ffffff;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 300;
  opacity: 1;
}
.accordion-wrapper .card + .card {
  margin-top: 20px;
}
</style>