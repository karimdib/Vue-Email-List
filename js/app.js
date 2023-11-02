const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'lista email',
      emails:[
      ]
    }
  },
  methods:{
    apiEmail(){
        for(let i = 0; i < 10;i++){
           axios
           .get('https://flynn.boolean.careers/exercises/api/random/mail')
           .then((reply) => {
            const email = reply.data.response
            this.emails.push(email)
           })
        }
    }
  },
  created(){
    this.apiEmail()  }
}).mount('#app')