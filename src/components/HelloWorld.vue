<template>
  <div class="hello">
  <div class="q1">
    <h4>Do you currently have a laptop?</h4>
    <form>
      <input type="radio" name="laptopPossesion" value="yes" v-model="answerQ1"> Yes<br>
      <input type="radio" name="laptopPossesion" value="no" v-model="answerQ1"> No<br>
    </form> 
  </div>
    <h1>{{ answerQ1 }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      answerQ1: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.q1 {
  border: 1px solid red;
  text-align: left;
}
</style>
