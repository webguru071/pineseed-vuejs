<template>
    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
        <div class="footer-list">
            <FooterListItems/>
        </div>
    </div>
</template>

<script>
import FooterListItems from './FooterListItems'
export default {
    name: 'FooterList',
    components:{
        FooterListItems
    }
}
</script>

<style>

</style>