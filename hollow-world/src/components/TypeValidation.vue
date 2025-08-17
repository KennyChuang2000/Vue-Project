<template>
    <p>{{ name }} - {{ typeof name }}</p>
    <p>{{ age }} - {{ typeof age }}</p>
    <p>{{ isStudent }} - {{ typeof isStudent }}</p>
</template>

<script>
export default {
    props: {
        name: String,
        age: {
            type: Number,
            required: true,
            validator(value) {
                return value >= 0;
            },
            default: 0
        },
        isStudent: {
            type: Boolean,
            default: true
        },
    }
}
</script>