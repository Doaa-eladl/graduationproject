<template>
    <base-wrapper>
        <form @submit.prevent="signin">
            <input type="text" v-model="test">
            <button type="submit">send</button>
        </form>
        <h1>Page Not Found</h1>

    </base-wrapper>
</template>

<script>
export default {
    data() {
        return {
            test: null,

        };
    },
    methods: {
        async signin() {
            console.log(this.test);
            const response = await this.axios.post('/createT', { test: this.test });
            console.log(response.data);
            localStorage.setItem('token', response.data);
            console.log(localStorage.getItem('token'));
        }
    },
};
</script>