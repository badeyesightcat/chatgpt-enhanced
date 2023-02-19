<template>
  <div class="chat-message-item">
    <div class="chat-message-avatar">me</div>
    <div class="chat-message-content">who are you by the way?</div>
  </div>
</template>
<script>
export default {
  name: 'ChatMessageItem',
  props: {
    message: {
      type: Object,
      default: () => ({}),
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
</style>
