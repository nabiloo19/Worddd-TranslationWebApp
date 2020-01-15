<template>
  <v-sheet elevation="6" class="pa-12 display-1" color="#f2f2f2">
    <p>{{translatedText}}</p>
  </v-sheet>
</template>

<script>
export default {
  name: "TranslateOutput",
  props: ["translatedText"]
};
</script>