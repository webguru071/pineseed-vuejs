<template>
    <div>
        <SingleList title= "Domain"/>
        <SingleList title= "Hosting" />
        <SingleList title="Reseller" />
    </div>
</template>

<script>
import SingleList from './SingleList'
export default {
    name: 'FooterList',
    components:{
        SingleList
    }
}
</script>

<style>

</style>