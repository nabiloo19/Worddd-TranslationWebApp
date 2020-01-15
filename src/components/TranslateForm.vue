<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex mb-4>
        <v-form v-on:submit="formSubmit">
          <v-text-field
            type="text"
            v-model="textToTranslate"
            label="Enter A Worddd"
            multi-line
            hint="The Word you want to translate"
            clearable
            prepend-inner-icon="mdi-text"
            color="purple"
          ></v-text-field>

        <select
          
          v-model="language"
          label="Choose The Language You Want To Translate To"
        >
        
      <option value="ar">Arabic</option>
      <option value="en">English</option>
      <option value="am">Amharic</option>
      <option value="es">Spanish</option>
      <option value="it	">Italian</option>
      <option value="fr">French</option>
      <option value="de">German</option>
      <option value="zh">Chinese</option>
      <option value="ru">Russian</option>
      <option value="pt">Portuguese</option>
      <option value="hi">Hindi</option>
      <option value="tr">Turkish</option>

        </select>

          <v-btn
            type="submit"
            value="Translate"
            flat
            medium
            color="purple"
            outlined
            rounded
          >Translate</v-btn>
        </v-form>
      </v-flex>

      <v-flex mb-5 xs12></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "TranslateForm",

  data() {
    return {
      textToTranslate: "",
      language: ''
    };
  },

  created(){
    this.language = 'en';
  },

  methods: {


    formSubmit(e) {
      this.$emit('formSubmit', this.textToTranslate, this.language);
      e.preventDefault();
    }
  }
};
</script>