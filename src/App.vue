<script setup>
    import { ref, reactive, toRefs, toRef } from 'vue'

    defineProps({
    });

    const form = ref(
        {
                userName: '',
                password: '',
                passwordConfirm: '',
        });


</script>

<template>

    <a-modal v-model:visible="loginVisible" title="Basic Modal" >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </a-modal>


</template>


<script>
    
    export default {
        setup() {
        },
        data() {
            return {
                loginVisible: false,
            }
        },
        mounted() {
            this.showLoginApp()
        },
        computed: {
        },
        methods: {
            showLoginApp() {
                this.loginVisible = true;
            },
            showLoginAppDisable() {
                this.loginVisible = false;
            },
        }
    }
</script>

