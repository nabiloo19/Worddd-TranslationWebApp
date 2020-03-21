<template>
  <v-app>
    <v-app-bar app dark>
      <v-btn href="#" outlined color="white" style="border-color:#424242">Worddd</v-btn>
      <v-btn
        href="https://github.com/nabiloo19/Worddd-TranslationWebApp"
        target="_blank"
        outlined
        color="white"
        style="border-color:#424242"
      >Source Code</v-btn>
    </v-app-bar>

    <v-content class="align-center">
      <EntryMessages />
      <TranslateForm v-on:formSubmit="tarnslateText" />
      <div v-if="loading">
        <v-skeleton-loader boilerplate="false" type="paragraph" tile="false" class="mx-auto"></v-skeleton-loader>
      </div>
      <div v-else>
        <TranslateOutput v-text="translatedText" display-2 class="align-center text-center" />
      </div>
    </v-content>
  </v-app>
</template>

<script>
import EntryMessages from "./components/EntryMessages";
import TranslateForm from "./components/TranslateForm";
import TranslateOutput from "./components/TranslateOutput";

export default {
  name: "App",

  components: {
    EntryMessages,
    TranslateForm,
    TranslateOutput
  },

  methods: {
    tarnslateText: function(text, language) {
      this.loading = true;
      this.$http
        .get(
          "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200115T122636Z.8975cd70a7d5d85d.d21b02eb4994e0d78832c8158f4e6e410e1c5baa&lang=" +
            language +
            "&text=" +
            text
        )
        .then(response => {
          this.translatedText = response.body.text[0];
          this.loading = false;
        });
    }
  },

  data: function() {
    return {
      translatedText: "",
      loading: false
    };
  }
};
</script>
