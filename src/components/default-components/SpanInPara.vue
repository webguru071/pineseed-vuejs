<template>
  <p>{{paraValue}}<span>{{spanValue}}</span></p>
</template>

<script>
export default {
    name: 'SpanInPara',
    props: {
        paraValue: String,
        spanValue: String
    }
}
</script>