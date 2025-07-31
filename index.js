const vhtml = Vue.createApp({
    data() {
        return {
            content: `<p>這是一段<span style="color:red;">紅色文字</span></p>`
        }
    }
});
vhtml.mount("#vhtml");

const vonce = Vue.createApp({
    data() {
        return {
            list: [1, 2, 3]
        }
    },
    methods: {
        addList() {
            this.list.push(this.list.length + 1);
        }
    },
});
vonce.mount("#vonce");