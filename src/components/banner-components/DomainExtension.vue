<template>
  <li class="list-inline-item">{{price}}</li>
</template>

<script>
export default {
    name: 'DomainExtension',
    props:{
        price: String
    }
}
</script>