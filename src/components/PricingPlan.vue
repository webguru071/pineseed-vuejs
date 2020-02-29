<template>
    <!-- Pricing Area -->
    <section class="pricing-plan">
        <div class="content-box text-center">
            <SectionMainTitle MainTitle = "Why Choose Pineseed" />
            <SectionSubTitle SubTitle = "Choose that Perfect Service for your business" />
            
        </div>
        <div class="container">
            <div class="row">
              <PricingPlanBox title="Standard" priceCurrency="$19" priceCurrencyInner="/mo" buttonValue="Read More" />
              <PricingPlanBox title="POPULAR" priceCurrency="$19" priceCurrencyInner="/mo" buttonValue="Read More" />
              <PricingPlanBox title="PRO" priceCurrency="$19" priceCurrencyInner="/mo" buttonValue="Read More" />  
            </div>
        </div>
    </section>
</template>

<script>

import SectionMainTitle from './SectionMainTitle'
import SectionSubTitle from './SectionSubTitle'
import PricingPlanBox from './PricingPlanBox'

export default {
    name: 'PricingPlan',
    components: {
      SectionMainTitle,
      SectionSubTitle,
      PricingPlanBox
    }
}
</script>

<style>
/* --pricing Plan--- */
.pricing-plan {
  padding: 150px 0;
}
.pricing-card {
  background: #fff;
  -webkit-box-shadow: 0px 0px 10px #90909033;
  box-shadow: 0px 0px 10px #90909033;
  border-radius: 8px;
  text-align: center;
  padding: 30px;
  cursor: pointer;
  -webkit-transition: all 0.3s ease-in;
  -o-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
  margin-bottom: 30px;
  -webkit-transition: 0.4s all;
  -o-transition: 0.4s all;
  transition: 0.4s all;
}
.pricing-card:hover {
  -webkit-transform: translateY(-10px);
  -ms-transform: translateY(-10px);
  transform: translateY(-10px);
}
.pricing-card:hover .pricing-btn {
  background: #000;
}

.pricing-card .pricing-card-img-wrapper {
  width: 130px;
  height: 130px;
  background: rgba(5, 123, 245, 0.1);
  border-radius: 50%;
  margin: 0 auto;
}
.pricing-card .pricing-card-img-wrapper .pricing-card-img {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 131px;
}
.margin-top-20 {
  margin-top: 20px;
}
.pricing-card-content {
  margin-top: 20px;
}
.pricing-card
  .pricing-card-content
  .pricing-card-title-wrapper
  .pricing-card-title {
  font-size: 16px;
  text-transform: uppercase;
  color: #333333;
  font-weight: 600;
  line-height: 40px;
}
.pricing-card
  .pricing-card-content
  .pricing-card-title-wrapper
  .pricing-card-title::after {
  content: "";
  display: block;
  height: 1px;
  width: 35px;
  background: #6c63ff;
  margin: 0 auto;
}
.pricing-card
  .pricing-card-content
  .pricing-card-list-wrapper
  .pricing-card-list
  ul {
  list-style: none;
  padding: 0px;
}
.pricing-card
  .pricing-card-content
  .pricing-card-list-wrapper
  .pricing-card-list
  ul
  li {
  font-size: 14px;
  color: var(--gray);
  line-height: 35px;
}
.margin-top-30 {
  margin-top: 30px;
}
.pricing-card
  .pricing-card-content
  .pricing-card-currency-wrapper
  .pricing-card-currency {
  font-size: 42px;
  color: #909090;
  font-weight: 400;
  line-height: 50px;
}

.pricing-card:hover
  .pricing-card-content
  .pricing-card-currency-wrapper
  .pricing-card-currency {
  color: var(--theme-color);
}

.pricing-card
  .pricing-card-content
  .pricing-card-currency-wrapper
  .pricing-card-currency
  span {
  font-size: 18px;
}
.pricing-card
  .pricing-card-content
  .pricing-card-currency-wrapper
  .pricing-card-currency::after {
  content: "";
  display: block;
  height: 1px;
  width: 35px;
  background: #6c63ff;
  margin: 0 auto;
}
.margin-bottom-20 {
  margin-bottom: 20px;
}
.margin-top-40 {
  margin-top: 40px;
}
.price-active
  .pricing-card-content
  .pricing-card-currency-wrapper
  .pricing-card-currency {
  color: var(--theme-color);
}
.price-active .pricing-btn {
  background: #000;
}
</style>