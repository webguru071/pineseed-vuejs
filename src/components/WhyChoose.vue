<template>
    <!-- why-choose Area -->
    <section class="why-choose">
        <div class="content-box text-center">
            <SectionMainTitle MainTitle = "Why Choose Pineseed" />
            <SectionSubTitle SubTitle = "Choose that Perfect Service for your business" />
        </div>
        <div class="bac-wrapper">
            <div class="container">
                <div class="row">
                    <WhyChooseBox title="Data Migration" text="HostCluster’s flexible Managed
                        Backup Solutions will help simplify
                        the protection of your data …
                        Bring to the table survival strategies,
                        to ensure proactive domination." buttonValue="Read More" />

                    <WhyChooseBox title="Data Migration" text="HostCluster’s flexible Managed
                        Backup Solutions will help simplify
                        the protection of your data …
                        Bring to the table survival strategies,
                        to ensure proactive domination." buttonValue="Read More" />

                    <WhyChooseBox title="Data Migration" text="HostCluster’s flexible Managed
                        Backup Solutions will help simplify
                        the protection of your data …
                        Bring to the table survival strategies,
                        to ensure proactive domination." buttonValue="Read More" />

                    <WhyChooseBox title="Data Migration" text="HostCluster’s flexible Managed
                        Backup Solutions will help simplify
                        the protection of your data …
                        Bring to the table survival strategies,
                        to ensure proactive domination." buttonValue="Read More" />

                    <WhyChooseBox title="Data Migration" text="HostCluster’s flexible Managed
                        Backup Solutions will help simplify
                        the protection of your data …
                        Bring to the table survival strategies,
                        to ensure proactive domination." buttonValue="Read More" />

                    <WhyChooseBox title="Data Migration" text="HostCluster’s flexible Managed
                        Backup Solutions will help simplify
                        the protection of your data …
                        Bring to the table survival strategies,
                        to ensure proactive domination." buttonValue="Read More" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SectionMainTitle from './SectionMainTitle'
import SectionSubTitle from './SectionSubTitle'
import WhyChooseBox from './WhyChooseBox'

export default {
    name: 'WhyChoose',
    components: {
      SectionMainTitle,
      SectionSubTitle,
      WhyChooseBox
    }
}
</script>

<style>
/* Why Choose Area */
.why-choose {
  padding-top: 150px 0 0 0;
}
.bac-wrapper {
  background-color: #81da9e;
  padding: 100px 0 5px 0;
}
.choose-item {
  background: #fff;
  padding: 40px 30px;
  -webkit-box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  -webkit-transition: 0.4s all;
  -o-transition: 0.4s all;
  transition: 0.4s all;
  margin-bottom: 95px;
}
.choose-item:hover {
  background: #81da9e;
}
.icon-area {
  margin-top: -105px;
}
.icon-area i {
  font-size: 55px;
  color: #fff;
  background: var(--theme-color);
  height: 130px;
  width: 130px;
  line-height: 109px;
  position: relative;
  border-radius: 50%;
  border: 10px solid #81da9e;
  -webkit-transition: 0.4s all;
  -o-transition: 0.4s all;
  transition: 0.4s all;
}
.choose-item:hover .icon-area i {
  border: 10px solid #0000002b;
}
.choose-text h3 {
  color: var(--theme-color);
  margin-top: 30px;
  -webkit-transition: 0.4s all;
  -o-transition: 0.4s all;
  transition: 0.4s all;
}
.choose-item:hover .choose-text h3 {
  color: #fff;
  -webkit-transform: translateY(10px);
  -ms-transform: translateY(10px);
  transform: translateY(10px);
}
.choose-text p {
  color: var(--theme-p-color);
  margin-top: 20px;
  -webkit-transition: 0.4s all;
  -o-transition: 0.4s all;
  transition: 0.4s all;
}
.choose-item:hover .choose-text p {
  color: #fff;
}
.choose-item:hover .choose-btn {
  background: #000;
}
.choose-margin {
  margin-top: 100px;
}
</style>