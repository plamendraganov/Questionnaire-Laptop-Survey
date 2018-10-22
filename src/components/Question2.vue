<template>
  <div class="wrapper-question-2">
    <div class="question">
      <h4>What is your preferred laptop brand?</h4>
      <b-form-group>
        <b-form-radio-group id="preferredBrand" v-model="brand" name="preferredBrand">
          <b-form-radio value="acer">Acer</b-form-radio><br>
          <b-form-radio value="apple">Apple</b-form-radio><br>
          <b-form-radio value="asus">Asus</b-form-radio><br>
          <b-form-radio value="chromebook">Chromebook</b-form-radio><br>
          <b-form-radio value="dell">Dell</b-form-radio><br>
          <b-form-radio value="hp">HP</b-form-radio><br>
          <b-form-radio value="iball">Iball</b-form-radio><br>
          <b-form-radio value="lenovo">Lenovo/IBM</b-form-radio><br>
          <b-form-radio value="microsoft">Microsoft Surface</b-form-radio><br>
          <b-form-radio value="msi">MSI</b-form-radio><br>
          <b-form-radio value="panasonic">Panasonic</b-form-radio><br>
          <b-form-radio value="razer">Razer</b-form-radio><br>
          <b-form-radio value="samsung">Samsung</b-form-radio><br>
          <b-form-radio value="sony">Sony</b-form-radio><br>
          <b-form-radio value="toshiba">Toshiba</b-form-radio><br>
          <b-form-radio value="other">Other</b-form-radio><br>
          <div v-if="brand === 'other'">
              <hr>
              <label for="otherBrand">Please specify your favourite brand: </label>
              <input type="text" id="otherBrand" name="otherBrand" v-model.lazy="otherBrand">
          </div>
        </b-form-radio-group>
      </b-form-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Question2',
  data () {
    return {
      brand: '',
      otherBrand: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
