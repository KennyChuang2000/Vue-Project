<template>
    <div>
        <h1>Word Count</h1>
        <textarea v-model="content" placeholder="Type something..."></textarea>
        <p>Character Count: {{ count }}</p>
    </div>
</template>

<script>
export default {
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
}
</script>

<style scoped>
h1 {
    font-size: 24px;
    margin-bottom: 12px;
}

textarea {
    width: 100%;
    height: 100px;
    margin-bottom: 12px;
}

p {
    font-size: 18px;
}
</style>
