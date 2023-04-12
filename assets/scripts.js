const {createApp} = Vue;

createApp({
  data(){
    return {
      messaggio: 'inserisci un nuovo messaggio',
      newMessage: '',
      foto: '../assets/img/mountain-view-google.avif'
    }
  },
  methods: {
    printNewMessage() {
      this.messaggio = this.newMessage
    }
  }
}).mount('#app')