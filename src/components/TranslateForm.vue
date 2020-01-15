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
            color="#42b883"
            outlined
            counter
          ></v-text-field>

          <v-select
            v-model="languages"
            :hint="`You Chose --> ${languages.state}`"
            :items="items"
            item-text="state"
            :item-value="abbr"
            label="Choose a Language"
            persistent-hint
            return-object
            single-line
            prepend-inner-icon="mdi-earth"
            color="#42b883"
            filled
            outlined
          ></v-select>

          <v-btn
            type="submit"
            value="Translate"
            flat
            medium
            color="#42b883"
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
      language: "",

      languages: { state: "", abbr: "" },
      items: [
        { state: "Arabic", abbr: "ar" },
        { state: "English", abbr: "en" },
        { state: "Amharic", abbr: "am" },
        { state: "Spanish", abbr: "es" },
        { state: "Italian", abbr: "it" },
        { state: "French", abbr: "fr" },
        { state: "German", abbr: "de" },
        { state: "Chinese", abbr: "zh" },
        { state: "Russian", abbr: "ru" },
        { state: "Portuguese", abbr: "pt" },
        { state: "Hindi", abbr: "hi" },
        { state: "Turkish", abbr: "tr" }
      ]
    };
  },

  created() {
    this.language = "en";
  },

  methods: {
    formSubmit(e) {
      this.$emit("formSubmit", this.textToTranslate, this.languages.abbr);
      e.preventDefault();
    }
  }
};
</script>