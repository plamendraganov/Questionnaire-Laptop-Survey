<template>
  <div class="wrapper-question-1">
  <div class="question">
    <h4>Do you currently have a laptop?</h4>
    <form>
      <div class="row"> <!-- Row 1 -->
        <div class="col col-lg-2">
          <label class="label-question-1" for="answer-yes">Yes</label>
        </div>
        <div class="col col-lg-2">
          <input type="radio" id="answer-yes" class="radio-question-1" name="laptopPossesion" 
          value="yes" v-model="answerQ1">
        </div>
        <div class="col col-lg-8">
          <label class="label-question-1" for="answer-yes">&nbsp</label>
        </div>
      </div> <!-- End of Row 1 -->

      <div class="row"> <!-- Row 2 -->
        <div class="col col-lg-2">
          <label class="label-question-1" for="answer-no">No</label>
        </div>
        <div class="col col-lg-2">
          <input type="radio" id="answer-no" class="radio-question-1" name="laptopPossesion" 
          value="no" v-model="answerQ1">
        </div>
        <div class="col col-lg-8">
          <label class="label-question-1" for="answer-no">&nbsp</label>
        </div>
      </div> <!-- End of Row 2 -->
    </form>
  </div>
    <h1>{{ answerQ1 }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Question1',
  data () {
    return {
      answerQ1: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .col {
    text-align: right;
    border: 1px solid red;
  }

  .label-question-1 {
    width: 100%;
    text-align: center;
    cursor: pointer;
  }

  .radio-question-1 {
    width: 100%;
    cursor: pointer;
  }

</style>
