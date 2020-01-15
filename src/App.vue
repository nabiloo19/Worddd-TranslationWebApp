<template>
    <v-app>
        <v-app-bar app color="primary" dark> </v-app-bar>
    
        <v-content>
    
            <EntryMessages/>
            <TranslateForm v-on:formSubmit="tarnslateText" />
            <TranslateOutput v-text="translatedText" display-2 class=" align-center text-center" />
    
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

    methods: {
        tarnslateText: function(text, language) {
            this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200115T122636Z.8975cd70a7d5d85d.d21b02eb4994e0d78832c8158f4e6e410e1c5baa&lang='+language+'&text=' + text)
                .then((response) => {
                    this.translatedText = response.body.text[0]
                });

        }
    },

    data:function(){
      return {
        translatedText: ''
      }
    }
};
</script>
