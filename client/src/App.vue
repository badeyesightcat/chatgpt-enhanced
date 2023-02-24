<script>
import ChatMessageItem from './components/ChatMessageItem.vue';

export default {
  components: {
    ChatMessageItem,
  },
  data() {
    return {
      chatInput: '',
      chatLog: [
        // {
        //   user: 'ai',
        //   message: 'How can I help you?',
        // },
        // {
        //   user: 'me',
        //   message: 'Who are you by the way?',
        // },
      ],
    };
  },
  updated() {
    console.log(this.chatLog);
  },
  methods: {
    async handleSubmit(e) {
      this.chatLog = [...this.chatLog, { user: 'me', message: this.chatInput }];
      this.chatInput = '';

      // fetch response to the api combining the chat log array of messages and sending it as a message to localhost:3000 as a post
      const response = await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: this.chatLog.map((item) => item.message).join(''),
        }),
      });
      const data = await response.json();
      console.log(data.message);
      this.chatLog = [...this.chatLog, { user: 'ai', message: data.message }];
    },
    handleChatInputChange(e) {
      this.chatInput = e.target.value;
    },
    handleClearChatLog() {
      this.chatLog = [];
    },
  },
};
</script>

<template>
  <aside class="side-bar">
    <button type="button" class="btn-new-chat" @click="handleClearChatLog">
      New Chat
    </button>
  </aside>
  <section class="chat-section">
    <div class="chat-flow-area">
      <ChatMessageItem
        v-for="(item, index) in chatLog"
        :key="index"
        :content="item" />
    </div>
    <div class="chat-input-area">
      <form action="" @submit.prevent="handleSubmit">
        <input
          class="chat-textarea"
          @change="handleChatInputChange"
          :value="chatInput" />
      </form>
    </div>
  </section>
</template>

<style scoped>
.side-bar {
  width: 260px;
  background-color: rgba(32, 33, 35, 1);
  color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
}
.btn-new-chat {
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: transparent;
  color: #fff;
  display: block;
  height: 3rem;
  text-align: left;
  padding: 0 1rem;
  font-size: 0.9rem;
  transition: all 200ms ease;
}
.btn-new-chat::before {
  content: '+ ';
  font-size: 1.1rem;
}
.btn-new-chat:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.chat-section {
  flex: 0 0 calc(100% - 260px);
  display: grid;
  grid-template: 2fr / 1fr;
}
.chat-input-area {
  width: 48rem;
  background-color: rgba(64, 65, 79, 1);
  border-radius: 0.25rem;
  padding: 0.5rem;
  box-shadow: 0 0.25rem 0.35rem rgba(0, 0, 0, 0.25);
  margin: 1.5rem auto;
}
.chat-textarea {
  display: flex;
  background-color: transparent;
  border: 0;
  width: 100%;
  outline: transparent;
  font-size: 1.25rem;
  color: #fff;
  resize: vertical;
}
.chat-flow-area {
  height: calc(100vh - 5.5rem);
  overflow-y: auto;
}
</style>
