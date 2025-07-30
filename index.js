const vhtml = Vue.createApp({
    data() {
        return {
            content: `<p>這是一段<span style="color:red;">紅色文字</span></p>`
        }
    }
});
vhtml.mount("#vhtml");