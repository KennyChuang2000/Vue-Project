const app = Vue.createApp({
    data() {
        return {
            name: ["123", "456", false, 456],
        };
    },
});
app.mount("#app");

const link = Vue.createApp({
    data() {
        return {
            link: "https://www.youtube.com/",
        };
    }
});
link.mount("#link1");


const todo = Vue.createApp({
    data() {
        return {
            todos: ["todo1", "todo2", "todo3"],
        }
    }
});
todo.mount("#todoList");

const todoCheck = Vue.createApp({
    data() {
        return {
            todos: [
                { name: "todo1", check: false },
                { name: "todo2", check: true },
                { name: "todo3", check: false }
            ]
        }
    }
});
todoCheck.mount("#todoCheckList");

const todoIf = Vue.createApp({
    data() {
        return {
            todos: [
                // { name: "todo1", show: false, check: false }
            ]
        }
    }
});
todoIf.mount("#todoIfList");

const onClick = Vue.createApp({
    data() {
        return {
            showAnswer: false
        }
    }
});
onClick.mount("#onClick");

const computed = Vue.createApp({
    data() {
        return {
            showAnswer: false
        }
    },
    computed: {
        label() {
            return this.showAnswer ? "隱藏答案" : "顯示答案";
        }
    },
});
computed.mount("#computed");

const methods = Vue.createApp({
    data() {
        return {
            showAnswer: false
        }
    },
    computed: {
        label() {
            return this.showAnswer ? "隱藏答案" : "顯示答案";
        },
    },
    methods: {
        toggleShowAnswer() {
            this.showAnswer = !this.showAnswer;
        }
    },
});
methods.mount("#methods");

const watch = Vue.createApp({

    data() {
        return {
            showAnswer: false,
            countDown: 5,
            timer: null,
        }
    },
    computed: {
        label() {
            return this.showAnswer ? "隱藏答案" + this.countDown : "顯示答案";
        },
    },
    methods: {
        toggleShowAnswer() {
            this.showAnswer = !this.showAnswer;
        },
    },
    watch: {
        showAnswer(newVal, oldVal) {
            if (newVal) {
                this.countDown = 5;
                if (this.timer) {
                    clearInterval(this.timer);
                    this.timer = null;
                }
                this.timer = setInterval(() => {
                    this.countDown--;
                    if (this.countDown <= 0) {
                        this.showAnswer = false;
                        clearInterval(this.timer);
                        this.timer = null;
                    }
                }, 1000);
            } else {
                clearInterval(this.timer);
            }

        },
    },
});
watch.mount("#watch");

const formEvent = Vue.createApp({
    data() {
        return {
            inputText: ""
        };
    },
    methods: {
        handleInput(e) {
            this.inputText = e.target.value;
            console.log("輸入的文字:", this.inputText);
        }
    }
});
formEvent.mount("#formEvent");

const vModel = Vue.createApp({
    data() {
        return {
            inputText: ""
        };
    },
    methods: {

        resetUsername() {
            this.inputText = "";
            console.log("重置輸入框");
        }

    }
});
vModel.mount("#vModel");