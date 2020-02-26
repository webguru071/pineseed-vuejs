<template>
<div>
      <date-picker @update-date="updateDate" date-format="yy-mm-dd" v-once></date-picker>
</div>

</template>

<script>
export default {
    name: 'Testi',
  props: [ 'dateFormat' ],
  mounted: function() {
  var self = this;
  $(this.$el).datepicker({
    dateFormat: this.dateFormat,
    onSelect: function(date) {
      self.$emit('update-date', date);
    }
  });
  },
  beforeDestroy: function() {
    $(this.$el).datepicker('hide').datepicker('destroy');
  },

    data: {
    date: null
  },
  methods: {
    updateDate: function(date) {
      this.date = date;
    }
  }
}
</script>

<style>

</style>