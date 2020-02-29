<template>
  <router-link to="#!">{{buttonValue}}</router-link>
</template>

<script>
export default {
    name: 'DefaultButton',
    props: {
        buttonValue: String
    }
}
</script>

<style>

</style>