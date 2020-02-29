<template>
    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
        <div class="tabs-items">
            <h3>{{title}}</h3>
            <p>{{content}}</p>
            <router-link to="#" class="tab-button">{{buttonValue}}<i class="fas fa-arrow-right"></i></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TabItems',
    props:{
        title: String,
        content: String,
        buttonValue: String
    }
}
</script>

<style>

</style>