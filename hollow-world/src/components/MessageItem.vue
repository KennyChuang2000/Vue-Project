<template>
    <div>
        <p> {{sender}} </p> 
       <span> {{time}} </span>
        <p> {{msg}} </p>
    </div>
</template>

<script>
export default {
   props:[
        'sender',
        'time',
        'msg'
    ],
};
</script>

<style scoped>
div{
display:grid;
grid-template-areas: "sender time"
                     "msg msg";
border: 1px solid #e91919;
border-radius:  4px;
padding:  1em;
width: 250px;
}
   


</style>
