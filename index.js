const stringLengthCount = Vue.createApp({});

stringLengthCount.component('string-length-count', {
    template: `
        <div>
            <input v-model="content"/>
            <p>字串長度: {{count}}</p>
        </div>
    `,
    data() {
        return {
            content: "",
        };
    },
    computed: {
        count() {
            return this.content.length;
        }
    }
})

stringLengthCount.component('string-length-count-word', {
    template: `
        <div>
           <h2>字串長度計算</h2>
            <string-length-count></string-length-count>
        </div>
    `,
})


const vm = stringLengthCount.mount('#stringLengthCount');

