<template>
    <transition-group name="messages" tag="div" class="messages">
        <message v-for="message in messages" :key="message" :message="message"></message>
    </transition-group>
</template>

<script>
    import message from './message.vue'
    import { mapGetters } from 'vuex'
    export default{
        computed: {
            ...mapGetters( {
                'messages': 'messages/messages'
            })
        },

        components:{
            message
        }
    }
</script>

<style>
    .messages {
        transition: all 0.75s ease-in;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: fixed;
        bottom: 15px;
        left: 20px;
        z-index: 1000;
    }
</style>