<template>
    <!--Call To Action Area -->
     <section class="call-to-action">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="action-text">
                            <h2>Start building your website today!</h2>
                        </div>
                    </div>
                    <div class="col-lg-3  col-md-3 col-sm-12 col-12">
                        <div class="action-offer-text text-center">
                            <h6>Starting At Only</h6>
                            <h5>$2.75/mo*</h5>
                        </div>
                    </div>
                    <div class="col-lg-3  col-md-3 col-sm-12 col-12">
                        <div class="action-offer-btn">
                            <a href="#!" class="btn btn-read-more call-btn">GET STARTED</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
export default {
    name: 'CallToAction'
}
</script>

<style>
/* call-to-action */
.call-to-action {
  background: #7681e0;
  padding: 50px 0;
}
.action-text h2 {
  font-size: 30px;
  color: #fff;
}
.action-offer-text h6 {
  font-size: 17px;
  font-weight: 400;
}
.action-offer-text h5 {
  font-size: 34px;
  margin-top: 12px;
  color: #fff;
}
.call-btn {
  padding: 16px 50px;
  -webkit-box-shadow: 0px 6px 6px -5px #ffff;
  box-shadow: 0px 6px 6px -5px #ffff;
}
</style>