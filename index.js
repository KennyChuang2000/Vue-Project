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

const vbindvondata = Vue.createApp({
    data() {
        return {
            attr: "placeholder",
            value: "請輸入文字",
            event: "change",
        }
    },
    methods: {
        changeHolder() {
            console.log("input發生改變")
        }
    }
});
vbindvondata.mount("#vbindvondata");

const advance_v_for = Vue.createApp({
    data() {
        return {
            blogPost: {
                title: "Vue.js 教程",
                author: "Vue 教程小組",
                pubDate: "2023-10-01",
            },
            todos: [
                { id: 1, text: "學習 Vue.js" },
                { id: 2, text: "學習 Vue Router" },
                { id: 3, text: "學習 Vuex" },
            ]
        }
    },
    methods: {
        changeBlogPost() {
            const todos_length = this.todos.length
            for (let i = 0; i < todos_length; i++) {
                this.todos[i].id += 1;
            }
            this.todos[todos_length - 1].id = 1;
        }
    },
});
advance_v_for.mount("#advance_v-for");


Vue.createApp({
    data() {
        return {
            items: [
                { text: '項目 A' },
                { text: '項目 B' },
                { text: '項目 C' }
            ]
        };
    },
    methods: {
        swap() {
            this.items.reverse();
        }
    }
}).mount('#test-key-diff');

const template = Vue.createApp({
    data() {
        return {
            show: true
        };
    },
});
template.mount("#template");

const eventParameter = Vue.createApp({
    data() {
        return {
            todos: [
                { id: 1, content: "學習 Vue.js" },
                { id: 2, content: "學習 Vue Router" },
                { id: 3, content: "學習 Vuex" }
            ],
        };
    },
    methods: {
        handleClick(id, e) {
            alert(id + "," + e.clientX + "," + e.clientY);
        },
        showContent(content) {
            alert(content);
        },
    }
});
eventParameter.mount("#eventParameter");

const eventModifier = Vue.createApp({
    methods: {
        handleUlClick() {
            alert("點擊了ul");
        },
        handleLiClick() {
            alert("點擊了li");
        }
    }
});
eventModifier.mount("#eventModifier");

