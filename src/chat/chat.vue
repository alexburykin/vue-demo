<template>
  <div>
    <div class="chat">

      <div v-if="loading">LOADING...</div>
      <div ref="chat" class="messages">
        <div class="message" v-for="m of messages" :key="m">{{ m }}</div>
      </div>

      <textarea v-model="message" class="textarea"></textarea>

      <div class="has-text-right">
        <button @click="sendMessage" class="button is-success">SEND MESSAGE</button>
      </div>

    </div>
  </div>
</template>

<script>
  import io from 'socket.io-client';

  const NEWMESSAGES = [
    '12343123431241324',
    '12343123431241324',
    '12343123431241324',
    '12343123431241324',
    '12343123431241324',
    '12343123431241324',
    '12343123431241324',
    '12343123431241324',
    '12343123431241324',
    '12343123431241324',
    '12343123431241324',
  ];

  const MESSAGES = [
    'hello Vanessa',
    'hello Piter',
    'hello how are you',
    'hello thx, i am fine',
    'hello GOOD BYE MFCK!',
  ];

  export default {
    name: 'chat',
    data() {
      return {
        socket: null,
        message: '',
        messages: MESSAGES,
        chatRef: null,
        loading: false
      }
    },
    mounted() {
      for (let i = 0; i < 2; i++) {
        this.messages.push(...MESSAGES);
      }
      let socket = io('http://localhost:3000');
      this.socket = socket;
      socket.on('message', this.onMessage);

      this.handleScroll();
    },

    methods: {
      onMessage(msg) {
        this.messages.push(msg);
      },
      sendMessage() {
        this.socket.emit('message', this.message);
      },

      handleScroll() {

        // TODO: change setTimeout to right realization.
        setTimeout(() => {
          // TODO: change to right access methods instead of pureJS
          let chat = document.querySelector('.messages');
          chat.scrollTo(0, chat.scrollHeight);

          chat.addEventListener('scroll', () => {
            // console.log(this.scrollHeight);
            // console.log(this.scrollTop);
            if(chat.scrollTop < 100 && !this.loading) {
              this.loading = true;
              this.getMessages();
            //  TODO: scroll user back on some height
            }
          });

        }, 0)



      },
      getMessages() {
        setTimeout(()=> {
          this.loading = false;
          this.messages.unshift(...NEWMESSAGES);
        }, 500)
      }

    }
  }
</script>

<style lang="sass">
  .chat
    .textarea
      margin-bottom: 20px
    .message
      margin-bottom: 10px
    .messages
      max-height: 300px
      overflow-y: scroll
      margin-bottom: 20px

</style>
