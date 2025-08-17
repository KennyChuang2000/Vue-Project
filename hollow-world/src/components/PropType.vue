<template>
    <p>{{ num }} - {{ typeof num }}</p>
    <p>{{ bool }} - {{ typeof bool }}</p>
    <p>{{ obj }} - {{ typeof obj }}</p>
    <p>{{ array }} - {{ array.constructor.name }}</p>
</template>

<script>
export default {
    props: {
        num: {
            type: Number,
            default: 0
        },
        bool: {
            type: Boolean,
            default: false
        },
        obj: {
            type: Object,
            default: () => ({})
        },
        array: {
            type: Array,
            default: () => []
        }
    }
}
</script>