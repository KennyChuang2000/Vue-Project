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

const vm = stringLengthCount.mount('#stringLengthCount');

