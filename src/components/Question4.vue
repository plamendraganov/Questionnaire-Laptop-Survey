<template>
  <div class="wrapper-question-4">
    <div class="question">
      <h4>What is your preferred operation system?</h4>
      <b-form-group>
        <b-form-radio-group id="preferredOS" v-model="operationSystem" name="preferredOS">
          <b-form-radio value="windows">Windows</b-form-radio><br>
          <b-form-radio value="linux">Linux</b-form-radio><br>
          <b-form-radio value="macOS">MacOS</b-form-radio><br>
          <b-form-radio value="chromeOS">ChromeOS</b-form-radio><br>
          <b-form-radio value="freeBSD">FreeBSD</b-form-radio><br>
          <b-form-radio value="ms-dos">MS-Dos</b-form-radio><br>
          <b-form-radio value="otherOS">Other</b-form-radio><br>
          <div v-if="operationSystem === 'otherOS'">
              <hr>
              <label for="otherOS">Please specify your favourite OS: </label>
              <input type="text" id="otherOS" name="otherOS" v-model.lazy="specifiedOtherOS">
          </div>
        </b-form-radio-group>
      </b-form-group>

       <h2>OS: {{ operationSystem }}</h2>

      <b-form-group v-if="operationSystem === 'windows'">
        <b-form-radio-group id="windows-group" v-model="windows" name="windows-group">
          <b-form-radio value="Windows 10">Windows 10</b-form-radio><br>
          <b-form-radio value="Windows 8">Windows 8</b-form-radio><br>
          <b-form-radio value="Windows Vista">Windows Vista</b-form-radio><br>
          <b-form-radio value="Windows XP">Windows XP</b-form-radio><br>
          <b-form-radio value="Windows ME">Windows ME</b-form-radio><br>
          <b-form-radio value="Windows 2000">Windows 2000</b-form-radio><br>
          <b-form-radio value="Windows 98">Windows 98</b-form-radio><br>
          <b-form-radio value="Windows 95">Windows 95</b-form-radio><br>
          <b-form-radio value="Other Windows">Other Windows Version</b-form-radio><br>
          <div v-if="windows === 'Other Windows'">
              <hr>
              <label for="otherOS">Please specify your favourite OS: </label>
              <input type="text" id="otherOS" name="otherOS" v-model.lazy="specifiedOtherWindows">
          </div>
        </b-form-radio-group>
      </b-form-group>

     

    </div>
  </div>
</template>

<script>
export default {
  name: 'Question4',
  data () {
    return {
      operationSystem: '',
      otherOS: '',
      specifiedOtherOS: '',
      windows: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
