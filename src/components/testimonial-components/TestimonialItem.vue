<template>
    <div class="slider-item">
        <div class="left-box">
        <div class="avatar">
            <img src="assest/img/avatar.png" alt="avatar">
        </div>
            <h4 class="cmnter-name">{{name}}</h4>
            <h5 class="cmnter-post">{{designation}}</h5>
        </div>
        <p class="comments"><i class="fas fa-quote-left"></i>{{comments}}</p>      
</div>
</template>

<script>
export default {
    name: 'TestimonialItem',
    props:  {
        name: String,
        designation: String,
        comments: String
    }
}
</script>