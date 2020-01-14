<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      
    </v-app-bar>

    <v-content>
      <HelloWorld/>
      <TranslateForm v-on:formSubmit="tarnslateText" />
      <TranslateOutput />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import TranslateForm from './components/TranslateForm';
import TranslateOutput from './components/TranslateOutput';

export default {
  name: 'App',

  components: {
    HelloWorld,
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
