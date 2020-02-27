<template>
    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
        <div class="choose-item text-center">
            <a href="#!">
                <div class="icon-area">
                    <i class="fas fa-exchange-alt"></i>
                </div>
                <div class="choose-text">
                    <h3>{{title}}</h3>
                    <p>{{text}}</p>
                    <router-link to="#!" class="btn btn-read-more choose-btn">{{buttonValue}}</router-link>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WhyChooseBox',
    props: {
        title: String,
        text: String,
        buttonValue: String
    }

}
</script>