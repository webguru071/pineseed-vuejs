<template>
    <!-- pineseed domain area -->
    <section class="pineseed-domain">
        <div class="content-box text-center">
            <SectionSubTitle SubTitle = "Choose the perfect solution for your business" />
            <SectionMainTitle MainTitle = "Pineseed DOMAIN FOR YOU" />
        </div>
        <div class="container">
            <div class="tabs-button-area">
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                      <TabButton class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true" tabButtonValue="Individuals" />
                      <TabButton class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false" tabButtonValue="Business" />
                      <TabButton class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false" tabButtonValue="Resellers" />
                    </div>
                </nav>
            </div>
            <div class="tab-content" id="nav-tabContent">
              <TabPane class="show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" />
              <TabPane id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" />
              <TabPane id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"/>
            </div>
            
        </div>
    </section>
</template>

<script>

import SectionMainTitle from './SectionMainTitle'
import SectionSubTitle from './SectionSubTitle'
import TabPane from './domain-components/TabPane'
import TabButton from './domain-components/TabButton'

export default {
  name: 'PineseedDomain',
  components: {
    SectionMainTitle,
    SectionSubTitle,
    TabPane,
    TabButton
  }
}
</script>

<style>
/* --Pineseed domain area */
.pineseed-domain {
  padding: 0 0 150px 0;
}
.tabs-items {
  background: #fff;
  padding: 30px 40px;
  margin-top: 30px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.tabs-items h3 {
  color: var(--theme-color);
}

.tabs-items p {
  padding: 20px 0;
}
.tab-button {
  color: #ff655d;
  font-weight: 600;
  font-size: 15px;
  -webkit-transition: all 250ms ease;
  -o-transition: all 250ms ease;
  transition: all 250ms ease;
  -moz-transition: all 250ms ease;
  -ms-transition: all 250ms ease;
}
.tab-button:hover {
  color: #ff655d;
}
.tabs-items a i {
  color: #ff655d;
  font-size: 15px;
  padding-left: 10px;
  -webkit-transition: all 250ms ease;
  -o-transition: all 250ms ease;
  transition: all 250ms ease;
  -moz-transition: all 250ms ease;
  -ms-transition: all 250ms ease;
}
@-webkit-keyframes amination-one {
  0% {
    -webkit-transform: translateX(5px);
    transform: translateX(5px);
  }
  100% {
    -webkit-transform: translateX(20px);
    transform: translateX(20px);
  }
}
@keyframes amination-one {
  0% {
    -webkit-transform: translateX(5px);
    transform: translateX(5px);
  }
  100% {
    -webkit-transform: translateX(20px);
    transform: translateX(20px);
  }
}
.tabs-items:hover a i {
  -webkit-animation: amination-one 2s linear 0s infinite;
  animation: amination-one 2s linear 0s infinite;
}
.tabs-button-area .nav-tabs .nav-link.active {
  color: var(--theme-color);
  background-color: #fff;
  border-color: transparent;
  border-bottom: 3px solid var(--theme-color);
}
.nav-tabs .nav-link:focus,
.nav-tabs .nav-link:hover {
  border-color: transparent;
}
.nav-tabs {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.nav-tabs .nav-link {
  font-size: 20px;
  font-weight: 600;
  color: var(--theme-color);
}
.nav-tabs {
  border-bottom: 1px solid var(--theme-color);
}
</style>