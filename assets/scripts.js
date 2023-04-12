const {createApp} = Vue;

createApp({

  data(){
    return {
      messaggio: 'Ciao sostituiscimi con un messaggio',
      foto: '../assets/img/mountain-view-google.avif'
    }
  }

}).mount('#app')


