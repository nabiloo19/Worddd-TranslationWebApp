<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    > </v-app-bar>

    <v-content>

      <EntryMessages/>
      <TranslateForm v-on:formSubmit="tarnslateText" />
      <TranslateOutput />

    </v-content>

  </v-app>
</template>

<script>
import EntryMessages from './components/EntryMessages';
import TranslateForm from './components/TranslateForm';
import TranslateOutput from './components/TranslateOutput';

export default {
  name: 'App',

  components: {
    EntryMessages,
    TranslateForm,
    TranslateOutput
  },

  methods:{
    tarnslateText:function(text){
      alert(text);
    }
  },

  data: () => ({
    //
  }),
};
</script>
