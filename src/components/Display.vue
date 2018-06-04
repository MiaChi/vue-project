<template>
  <div>
    <p>field1: {{this.$store.state.field1}}</p>
    <p>field2: {{this.$store.state.field2}}</p>
    <a href='#/common/route1'>to route1</a>
  </div>
</template>
<script>
export default {
  name: 'Display',
  data () {
    return {
      msg1: '',
      msg2: ''
    }
  }
}
</script>
