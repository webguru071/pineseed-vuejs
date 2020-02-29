<template>
  <div class="col-lg-4 col-md-6 col-sm-12 col-12">
    <div class="pricing-card">
        <div class="pricing-card-img-wrapper ">
            <div class="pricing-card-img" style="background-image:url(assest/img/stand.png);"></div>
        </div>
        <div class="pricing-card-content margin-top-20">
            <div class="pricing-card-title-wrapper">
                <h4 class="pricing-card-title">{{title}}</h4>
            </div>
            <div class="pricing-card-list-wrapper margin-top-20">
            <div class="pricing-card-list">
                    <ul>
                      <PricingBoxList pricingList= "01 GB Space" />
                      <PricingBoxList pricingList= "1 Free Domain" />
                      <PricingBoxList pricingList= "300 GB SSD Disk" />
                      <PricingBoxList pricingList= "2TB Bandwidth" />
                      <PricingBoxList pricingList= "Weekly Backups" />
                      <PricingBoxList pricingList= "Unlimited Support" />
                    </ul>
            </div>
            </div>
            <div class="pricing-card-currency-wrapper  margin-top-30">
                <h3 class="pricing-card-currency">{{priceCurrency}}<span>{{priceCurrencyInner}}</span></h3>
            </div>
        </div>
        <div class="pricing-card-btn-wrapper margin-top-40 margin-bottom-20">
            <router-link to="#!" class="btn btn-read-more pricing-btn">{{buttonValue}}</router-link>
        </div>
    </div>
</div>
</template>

<script>
import PricingBoxList from './PricingBoxList'

export default {
    name: 'PricingPlanBox',
    components: {
      PricingBoxList
    },
    props: {
      title: String,
      priceCurrency: Number,
      priceCurrencyInner: String,
      buttonValue: String
    }
}
</script>