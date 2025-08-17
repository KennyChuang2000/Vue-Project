<script >
import WordCount from './components/WordCount.vue'
import MessageItem from './components/MessageItem.vue'
export default {
  components: { WordCount , MessageItem },
  
}
</script>



<template>
  <div>
    <h1>字數統計</h1>
    <WordCount></WordCount>
  </div>

  <div>
    <h1>留言列表</h1>
    <MessageItem sender="Alice" time="12:00" msg="Hello, world!"></MessageItem>
    <MessageItem sender="Bob" time="12:05" msg="Vue.js is awesome!"></MessageItem>
    <MessageItem sender="Charlie" time="12:10" msg="Let's build something great!"></MessageItem>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
