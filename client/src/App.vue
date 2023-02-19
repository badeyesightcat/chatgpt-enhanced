<script>
import ChatGptAvatar from './components/ChatGptAvatar.vue';
import ChatMessageItem from './components/ChatMessageItem.vue';

export default {
  components: {
    ChatGptAvatar,
    ChatMessageItem,
  },
  data() {
    return {
      chatInput: '',
      chatLog: [],
    };
  },
  updated() {
    console.log(this.chatLog);
  },
  methods: {
    async handleSubmit(e) {
      console.log('this is submitted');
      this.chatLog = [...this.chatLog, { user: 'me', message: this.chatInput }];
      this.chatInput = '';
    },
    handleChatInputChange(e) {
      this.chatInput = e.target.value;
    },
  },
};
</script>

<template>
  <aside class="side-bar">
    <button type="button" class="btn-new-chat">New Chat</button>
  </aside>
  <section class="chat-section">
    <div class="chat-flow-area">
      <ChatMessageItem content="message" author="user" />
      <ChatMessageItem content="message" author="ai" />
    </div>
    <div class="chat-input-area">
      <form action="" @submit.prevent="handleSubmit">
        <input
          class="chat-textarea"
          name="chatInputHolder"
          id="chatInputHolder"
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
  flex: 1 1 auto;
  display: grid;
  grid-template: 2fr / 1fr;
}
.chat-input-area {
  width: 48rem;
  background-color: rgba(64, 65, 79, 1);
  border-radius: 0.25rem;
  padding: 0.5rem;
  box-shadow: 0 0.25rem 0.35rem rgba(0, 0, 0, 0.25);
  margin: 0 auto 1.5rem;
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
}
</style>
