<template>
  <div>
    <input placeholder='input something' v-model='msg1'/>
    <input placeholder='input something' v-model='msg2'/>
    <button @click='save({field1:msg1,field2:msg2})'>Save</button>
    <a href='#/common/route2'>to route2</a>
    <p>msg1 is: {{msg1}}</p>
    <p>msg2 is: {{msg2}}</p>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'Input',
  data () {
    return {
      msg1: '',
      msg2: ''
    }
  },
  methods: {
    ...mapActions(['save'])
  }
}
</script>
