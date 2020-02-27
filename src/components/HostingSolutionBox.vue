<template>
    <div class="col-lg-4 col-md-6 col-sm-6 col-12">
        <div class="solution-items text-center">
            <router-link to="#!">
                <img src="assest/img/hostcluster-1.png" alt="img">
                <h3>{{title}}</h3>
                <p>{{text}} <span>{{textInner}}</span></p>
                <router-link to="#!" class="btn btn-read-more">{{buttonValue}}</router-link>
            </router-link>
        </div>
    </div>
</template>

<script>

export default {
    name: 'HostingSolutionBox',

    props: {
        // imageUrl: String,
        title: String,
        text: String,
        textInner: String,
        // ButtonUrl: String,
        buttonValue: String
  }
}
</script>