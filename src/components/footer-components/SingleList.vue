<template>
    <div class="list-link-items">
        <h3>{{title}}</h3>
        <ul>
            <ListTitle title="Domain Transfer"/>
            <ListTitle title="Personal Domain"/>
            <ListTitle title="PremiumDNS"/>
            <ListTitle title="Domain Name Search"/>
        </ul>
    </div>
</template>

<script>
import ListTitle from './ListTitle'
export default {
    name: 'SingleList',
    components: {
        ListTitle
    },
    props:{
        title: String
    }
}
</script>

<style>

</style>