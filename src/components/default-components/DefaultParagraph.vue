<template>
  <p>{{defaultText}}</p>
</template>

<script>
export default {
    name: 'DefaultParagraph',
    props:{
        defaultText: String
    }
}
</script>