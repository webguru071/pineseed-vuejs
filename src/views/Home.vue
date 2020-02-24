<template>
    <div class="home-page">
        <Banner/>
        <HostingSolution/>
        <WhyChoose/>
        <About/>
        <PricingPlan/>
        <PineseedDomain/>
        <Testimonial/>
        <Faq/>
        <CallToAction/>
    </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import HostingSolution from '../components/HostingSolution.vue'
import WhyChoose from '../components/WhyChoose.vue'
import About from '../components/About.vue'
import PricingPlan from '../components/PricingPlan.vue'
import PineseedDomain from '../components/PineseedDomain.vue'
import Testimonial from '../components/Testimonial.vue'
import Faq from '../components/Faq.vue'
import CallToAction from '../components/CallToAction.vue'

export default {
    name: 'Home',
    components: {
        Banner,
        HostingSolution,
        WhyChoose,
        About,
        PricingPlan,
        PineseedDomain,
        Testimonial,
        Faq,
        CallToAction,
    }
}
</script>