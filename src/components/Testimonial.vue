<template>
      <!-- Testimonial Slider -->
      <section class="testimonial-area">  
        <div class="content-box text-center">
            <SectionMainTitle MainTitle = "Pineseed DOMAIN FOR YOU" />
            <SectionSubTitle SubTitle = "Choose the perfect solution for your business" />
        </div>
        <div class="container">
            <!-- Testimonial Slider -->
            <div class="row">
              <div class="col-12 testimonial-slider">
                  <carousel :autoplay="true" :nav="false" :dots="true" :items="1" :autoplaySpeed= "2" >
                    <TestimonialItem name="Amber Stewart" designation="Web Developer" comments="I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." />
                    <TestimonialItem name="Amber Stewart" designation="Web Developer" comments="You must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." />
                    <TestimonialItem name="Amber Stewart" designation="Web Developer" comments="She must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." />
                    <TestimonialItem name="Amber Stewart" designation="Web Developer" comments="He must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." />
                    <TestimonialItem name="Amber Stewart" designation="Web Developer" comments="You must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." />
                </carousel>
              </div>
            </div>
            <!-- Testimonial Slider -->
            <!-- Logo Slider -->
            <div class="row">
              <div class="col-12 logo-slider">
                <carousel :autoplay="true" :dots="false" :items="4" :autoplaySpeed= "3" :margin= "30" :responsive="{0:{items:2,nav:false},600:{items:3,nav:false},992:{items:4,nav:false}}" >
                  <LogoItem/>
                  <LogoItem/>
                  <LogoItem/>
                  <LogoItem/>
                  <LogoItem/>
                  <LogoItem/>
                  <LogoItem/>
                  <LogoItem/>
                  <LogoItem/>
                  <LogoItem/>
                  <LogoItem/>
                  <LogoItem/>
                </carousel>
              </div>
            </div>
            <!-- Logo Slider -->
        </div>
    </section>
</template>

<script>
import SectionMainTitle from './SectionMainTitle'
import SectionSubTitle from './SectionSubTitle'
import carousel from 'vue-owl-carousel'
import TestimonialItem from './testimonial-components/TestimonialItem'
import LogoItem from './testimonial-components/LogoItem'
export default {
  name:'Testimonial',
  components:{
    SectionMainTitle,
    SectionSubTitle,
    carousel,
    TestimonialItem,
    LogoItem
  }
}
</script>
<style>
/* --Testimonial Area-- */
.testimonial-area {
  background: #f2f2f2;
  padding: 150px 0;
}
.testimonial-area .owl-carousel{
  position: relative;
}
.testimonial-area .owl-carousel .owl-dots {
	position: absolute;
	left: 350px;
	bottom: 12px;
}
.owl-theme .owl-dots .owl-dot span, .owl-theme .owl-dots .owl-dot span {
	background: #007fff!important;
  opacity: 0.25;
}
.owl-theme .owl-dots .owl-dot.active span, .owl-theme .owl-dots .owl-dot:hover span {
	background: #007fff!important;
  opacity: 1;
}
.slider-item {
	display: flex;
	background: #fff;
	padding: 45px;
}
.testimonial-area .left-box {
	width: 26%;
	padding-right: 60px;
  display: flex;
	flex-direction: column;
	align-items: center;
}
.avatar {
  width: 71px;
  width: 71px;
  border-radius: 50%;
  border: 3px solid rgba(5, 123, 245, 0.1);
  margin-bottom: 20px;
}
.testimonial-area .left-box {
  width: 30%;
}
.testimonial-area .left-box h4 {
  font-size: 16px;
}
.testimonial-area .left-box h5 {
  font-size: 14px;
  font-weight: 200;
  color: #909090;
}
.comments {
	width: 70%;
	font-size: 14px;
  font-family: var(--open-sans);
  font-weight: 400;
  line-height: 30px;
  color: #000;
  position: relative;
}
.comments i {
	position: absolute;
	top: -4px;
	left: -27px;
	color: #cfcbcb;
}
@media only screen and (max-width: 991px){
.slider-item {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.testimonial-area .left-box {
  padding-right: 0;
  padding-bottom: 25px;
}
.testimonial-area .left-box, .comments {
  width: 100%;
}
}
/* --Logo Slider CSS-- */
.logo-slider {
	margin-top: 50px;
}
.brand-container-card {
  margin-top: 30px;
}
.brand-container-card {
  background: #fff;
  border-radius: 25px;
  opacity: 1;
  text-align: center;
  cursor: pointer;
  -webkit-transition: all 0.3s ease-in;
  -o-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
}
.brand-container-card .brand-img {
	height: 120px;
	-webkit-filter: grayscale(100%);
	filter: grayscale(100%);
	-webkit-transition: all 0.3s ease-in;
	transition: all 0.3s ease-in;
	margin: 0 auto;
	width: 170px !important;
}
/* --Logo Slider CSS-- */
</style>