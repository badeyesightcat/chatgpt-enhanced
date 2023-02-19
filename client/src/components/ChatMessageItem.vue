<template>
  <div class="chat-message-item" :class="author === 'ai' && 'ai-answered'">
    <div class="chat-message-avatar">
      <ChatGptAvatar v-if="author === 'ai'" />
      <template v-else>me</template>
    </div>
    <div class="chat-message-content">
      {{ author === 'ai' ? 'I am an AI' : 'who are you by the way?' }}
    </div>
  </div>
</template>
<script>
import ChatGptAvatar from './ChatGptAvatar.vue';

export default {
  name: 'ChatMessageItem',
  components: {
    ChatGptAvatar,
  },
  props: {
    content: {
      type: Object,
      default: () => ({
        avatar: String,
        message: String,
      }),
    },
    author: {
      type: String,
      default: '',
    },
  },
};
</script>
<style scoped>
.chat-message-item {
  display: flex;
  padding: 1.5rem 3rem;
  gap: 1rem;
  justify-content: center;
}
.chat-message-avatar {
  border-radius: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  background-color: aliceblue;
}
.chat-message-content {
  flex: 0 0 44.5rem;
  color: #fff;
}
.chat-message-item.ai-answered {
  background-color: rgba(68, 70, 84, 1);
}
.chat-message-item.ai-answered .chat-message-avatar {
  padding: 0.5rem;
  background-color: rgb(16, 163, 127);
}
.chat-message-item.ai-answered svg {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
