<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex mb-4>
        <v-form v-on:submit="formSubmit">
          <v-text-field
            type="text"
            v-model="textToTranslate"
            label="Enter A Worddd"
            single-line
            hint="The Word you want to translate"
            clearable
            prepend-inner-icon="mdi-text"
            color="purple"
          ></v-text-field>

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
      textToTranslate: ""
    };
  },

  methods: {


    formSubmit(e) {
      this.$emit('formSubmit', this.textToTranslate);
      e.preventDefault();
    }
  }
};
</script>