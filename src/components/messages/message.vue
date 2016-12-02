<template>
    <div class="message">
        <div>
            <i v-if="iconClass != ''" class="fa fa-fw" :class="iconClass"></i>
            <h5>{{message.text}}</h5>
        </div>
        <i v-if="message.dismissible == true " class="fa fa-fw fa-times" @click="removeMessage(message.id)"></i>
    </div>
</template>
<script>
    import { mapActions } from 'vuex'
    export default{
        props: ['message'],
        computed: {
            iconClass: function () {
                var t = this;
                if (t.message.type == 'success') {
                    return 'fa-check'
                } else if (t.message.type == 'error') {
                    return 'fa-ban'
                } else if (t.message.type == 'trash') {
                    return 'fa-trash'
                } else if (t.message.type == 'warning') {
                    return 'fa-exclamation'
                } else if (t.message.type == 'info') {
                    return 'fa-info'
                } else {
                    return ''
                }
            },
            timer: function () {
                var t = this;
                return t.message.timeout * 1000;
            }
        },
        mounted() {
            var t = this;
            if(t.message.forceDismiss == false) {
                setTimeout(function() {
                    t.removeMessage(t.message.id);
                }, t.timer);
            }
        },
        methods: {
            ...mapActions({
                'removeMessage': 'messages/removeMessage'
            })
        }
    }
</script>

<style>
    .message {
        transition: all 0.75s ease-in;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 1em;
        max-width: 225px;
        border-radius: 3px;
        margin-bottom: 1em;
        background-color: #fff;
        box-shadow: 0px 4px 6px 1px rgba(61, 63, 65, 0.4);
    }
    .message > div {
        display: flex;
    }
    .message i, .message h5 {
        font-size: 14px;
    }
    .message i {
        height: 100%;
        margin-right: 0.75em;
    }
    .message h5 {
        line-height: 1.2;
        margin: 0;
    }
    .message .fa-times {
        cursor: pointer;
        margin: 0 0 0 0.75em;
        color: #ccc;
    }
    .message .fa-times:hover {
        color: #a6a6a6;
    }
    .message .fa-check {
        color: green;
    }
    .message .fa-ban, .message .fa-trash {
        color: red;
    }
    .message .fa-info {
        color: steelblue;
    }
    .message .fa-exclamation {
        color: goldenrod;
    }

    .messages-enter, .messages-leave-active {
        opacity: 0;
        transform: translateY(-30px);
    }
</style>
