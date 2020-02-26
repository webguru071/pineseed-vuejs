<template>
    <!-- solution Area -->
    <section class="solution-area section">
        <div class="content-box text-center">
            <SectionMainTitle MainTitle = "Perfect Hosting Soultion" />
            <SectionSubTitle SubTitle = "Our featured Service that we Provide" />
        </div>
        <div class="container">
            <div class="row">
              <HostingSolutionBox/>
              <HostingSolutionBox/>
              <HostingSolutionBox/>
            </div>
        </div>
    </section>
</template>

<script>
import SectionMainTitle from './SectionMainTitle'
import SectionSubTitle from './SectionSubTitle'
import HostingSolutionBox from './HostingSolutionBox'

export default {
    name: 'HostingSolution',
      components: {
        SectionMainTitle,
        SectionSubTitle,
        HostingSolutionBox
    }
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