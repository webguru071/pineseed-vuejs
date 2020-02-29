<template>
    <li><router-link to="#!">{{title}}</router-link></li>
</template>

<script>
export default {
    name: 'ListTitle',
    props:{
        title: String
    }
}
</script>

<style>

</style>