<template>
    <!-- Banner Area -->
    <section class="banner-area ">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="banner-content">
                        <div class="banner-inner text-center">
                            <div class="banner-top-highlight">
                              <SpanInPara spanValue="25% Discount" paraValue="on Every First Annual Purchase" />
                            </div>   
                            <div class="banner-text">
                              <DefaultH2 title="We Provide Most Trusted"/>
                              <DefaultH1 title="Web Hosting"/>
                              <DefaultH2 title="Starting at $9.99/month"/>
                              <DefaultParagraph defaultText="For Enhanced performance we use LiteSpeed Web Server, HTTP/2, PHP7. We make your website faster, which will help you to increase search ranking!" />
                            </div>
                            <div class="banner-form text-center">
                                <form action="#" class="domain-search-form mt-3">
                                    <div class="input-group">
                                        <input type="email" class="form-control" placeholder="Enter your domain name" required="">
                                        <select id="domin">
                                            <option value="volvo">.com</option>
                                            <option value="saab">.org</option>
                                            <option value="mercedes">.me</option>
                                            <option value="audi">.net</option>
                                        </select>
                                        
                                        <div class="input-group-append">
                                            <button class="btn search-btn btn-hover d-flex align-items-center" type="submit">
                                                <span class="ti-search mr-2"></span> Search
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="form-bottom">
                                <ul class="list-inline">
                                  <DomainExtension price="com $19.99"/>
                                  <DomainExtension price=".net $9.91"/>
                                  <DomainExtension price=".au $12.54"/>
                                  <DomainExtension price=".info $9.13"/>
                                  <DomainExtension class="desable" price="& much more"/>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import DefaultParagraph from './default-components/DefaultParagraph'
import DomainExtension from './banner-components/DomainExtension'
import DefaultH1 from './default-components/DefaultH1'
import DefaultH2 from './default-components/DefaultH2'
import SpanInPara from './default-components/SpanInPara'
export default {
 name: 'Banner',
 components:{
   DefaultParagraph,
   DomainExtension,
   DefaultH1,
   DefaultH2,
   SpanInPara
  }
}
</script>

<style>
/* Banner Area */
.banner-area {
  background-image: url("/assest/img/banner.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 50px 0 150px 0;
}

.banner-top-highlight p {
  background: #ffffff;
  width: 50%;
  margin: 0 auto;
  border-radius: 50px;
  font-size: 14px;
  color: #000;
  padding: 6px 0px;
  font-weight: 500;
  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
}
.banner-top-highlight p span {
  color: var(--theme-color);
}
.banner-text {
  margin-top: 50px;
}
.banner-text h2 {
  font-weight: 400;
  line-height: 75px;
}
.banner-text h1 {
  color: var(--theme-color);
}
.banner-form {
  margin-top: 50px;
  -webkit-box-shadow: 0px 0px 24px -12px;
  box-shadow: 0px 0px 24px -12px;
  border-radius: 10px 0 0 10px;
}
.banner-text p {
  margin-top: 20px;
}
.input-group > .form-control:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.domain-search-form input.form-control {
  border: none;
  text-indent: 10px;
  border-radius: 10px 0 0 10px;
  height: 38px;
  border-right: 1px solid #d6d4d4;
  padding: 0px 20px;
  margin: 9px 0;
}
.domain-search-form input.form-control:focus {
  background-color: #fff;
  border: none;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.domain-search-form button.search-btn {
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
.btn-hover:after,
.btn-hover:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 0;
  z-index: -1;
  border-radius: 0 30px 30px 0;
  background: rgba(0, 115, 236, 0.9);
  -webkit-transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
  -o-transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
  transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
}
#domin {
  width: 14%;
  padding: 0 7px;
  font-size: 16px;
  margin-right: 15px;
}
.form-bottom {
  margin-top: 20px;
}
.form-bottom .list-inline-item {
  font-size: 16px;
  font-weight: 600;
}
.desable {
  color: #777c87;
}
</style>