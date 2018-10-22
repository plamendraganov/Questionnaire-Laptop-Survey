<template>
  <div class="wrapper-question-3">
  <div class="question">
    <h4>How often do you use your laptop at... ?</h4>
    <form>
      <div class="container">
        <div class="row"> <!-- Row 1 -->
            <div class="col col-lg-2 col-sm-2">&nbsp</div>
            <div class="col col-lg-2 col-sm-2">Never</div>
            <div class="col col-lg-2 col-sm-2">Rarely</div>
            <div class="col col-lg-2 col-sm-2">Sometimes</div>
            <div class="col col-lg-2 col-sm-2">Frequently</div>
            <div class="col col-lg-2 col-sm-2">Every day</div>
        </div> <!-- End of Row 1 -->

        <div class="row"> <!-- Row 2 -->
            <div class="col col-lg-2 radio-question-3">Business Visits</div>
            <div class="col col-lg-2">
                <input type="radio" class="radio-question-3" name="businessVisits"
                value="never" v-model="businessVisits">
            </div>
            <div class="col col-lg-2">
                <input type="radio" class="radio-question-3" name="businessVisits"
                value="rarely" v-model="businessVisits">
            </div>
            <div class="col col-lg-2">
                <input type="radio" class="radio-question-3" name="businessVisits" 
                value="sometimes" v-model="businessVisits">
            </div>
            <div class="col col-lg-2">
                <input type="radio" class="radio-question-3" name="businessVisits" 
                value="frequently" v-model="businessVisits">
            </div>
            <div class="col col-lg-2">
                <input type="radio" class="radio-question-3" name="businessVisits" 
                value="every day" v-model="businessVisits">
            </div>
        </div> <!-- End of Row 2 -->

        <div class="row"> <!-- Row 3 -->
            <div class="col col-lg-2 col-sm-2 radio-question-3">Travel</div>
            <div class="col col-lg-2 col-sm-2">
                <input type="radio" class="radio-question-3" name="travel"
                value="never" v-model="travel">
            </div>
            <div class="col col-lg-2 col-sm-2">
                <input type="radio" class="radio-question-3" name="travel"
                value="rarely" v-model="travel">
            </div>
            <div class="col col-lg-2 col-sm-2">
                <input type="radio" class="radio-question-3" name="travel" 
                value="sometimes" v-model="travel">
            </div>
            <div class="col col-lg-2 col-sm-2">
                <input type="radio" class="radio-question-3" name="travel" 
                value="frequently" v-model="travel">
            </div>
            <div class="col col-lg-2 col-sm-2">
                <input type="radio" class="radio-question-3" name="travel" 
                value="every day" v-model="travel">
            </div>
        </div> <!-- End of Row 3 -->

        <div class="row"> <!-- Row 4 -->
            <div class="col col-lg-2 col-sm-2 radio-question-3">Office</div>
            <div class="col col-lg-2 col-sm-2">
                <input type="radio" class="radio-question-3" name="office"
                value="never" v-model="office">
            </div>
            <div class="col col-lg-2 col-sm-2">
                <input type="radio" class="radio-question-3" name="office"
                value="rarely" v-model="office">
            </div>
            <div class="col col-lg-2 col-sm-2">
                <input type="radio" class="radio-question-3" name="office" 
                value="sometimes" v-model="office">
            </div>
            <div class="col col-lg-2 col-sm-2">
                <input type="radio" class="radio-question-3" name="office" 
                value="frequently" v-model="office">
            </div>
            <div class="col col-lg-2 col-sm-2">
                <input type="radio" class="radio-question-3" name="office" 
                value="every day" v-model="office">
            </div>
        </div> <!-- End of Row 4 -->

                <div class="row"> <!-- Row 5 -->
            <div class="col col-lg-2 col-sm-2 radio-question-3">Home</div>
            <div class="col col-lg-2 col-sm-2">
                <input type="radio" class="radio-question-3" name="home"
                value="never" v-model="home">
            </div>
            <div class="col col-lg-2 col-sm-2">
                <input type="radio" class="radio-question-3" name="home"
                value="rarely" v-model="home">
            </div>
            <div class="col col-lg-2 col-sm-2">
                <input type="radio" class="radio-question-3" name="home" 
                value="sometimes" v-model="home">
            </div>
            <div class="col col-lg-2 col-sm-2">
                <input type="radio" class="radio-question-3" name="home" 
                value="frequently" v-model="home">
            </div>
            <div class="col col-lg-2 col-sm-2">
                <input type="radio" class="radio-question-3" name="home" 
                value="every day" v-model="home">
            </div>
        </div> <!-- End of Row 5 -->
      </div> <!-- End of Container -->
    </form> 
  </div>
    <h2>Business Visits: {{ businessVisits }}</h2>
    <h2>Travel: {{ travel }}</h2>
    <h2>Office: {{ office }}</h2>
    <h2>Home: {{ home }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Question3',
  data () {
    return {
      businessVisits: '',
      travel: '',
      office: '',
      home: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .row {
        border: 1px solid red;
    }

    .col {
        border: 1px solid blue;
        text-align: center;
        align-self: center;
    }

    .radio-question-3 {
        width: 100%;
    }

</style>
