<script>
import WordCount from './components/WordCount.vue'
import MessageItem from './components/MessageItem.vue'
import PropType from './components/PropType.vue'
import TypeValidation from './components/TypeValidation.vue'
export default {
  components: { WordCount, MessageItem, PropType, TypeValidation },
  data() {
    return {
      messages: [
        { id: 1, sender: 'Alice', time: '12:00', msg: 'Hello, worldxx!' },
        { id: 2, sender: 'Bob', time: '12:05', msg: 'Vue.js is awesomexx!' },
        { id: 3, sender: 'Charlie', time: '12:10', msg: 'Let\'s build something greatxxxx!' },
      ],
    }
  },
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

  <div>
    <h1>留言列表抓 app.vue 的data(){} 資料</h1>
    <MessageItem v-for="message in messages" :key="message.id" :sender="message.sender" :time="message.time"
      :msg="message.msg"></MessageItem>
    <h3>v-bind="message" 等價 :sender="message.sender" :time="message.time" :msg="message.msg"</h3>
    <MessageItem v-for="message in messages" :key="message.id" v-bind="message"></MessageItem>
  </div>

  <div>
    <h1>PropType</h1>
    <PropType :num="10" :bool="true" :obj="{ name: 'kenny' }" :array="[1, 2, 3]"></PropType>
    <h3>無傳遞屬性</h3>
    <PropType></PropType>
    <h3>驗證</h3>
    <TypeValidation name="Kenny" :age="-20"></TypeValidation>
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
