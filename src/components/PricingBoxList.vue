<template>
    <li>{{pricingList}}</li>
</template>

<script>

export default {
    name: 'PricingBoxList',
    props: {
      pricingList: String
    }
}
</script>