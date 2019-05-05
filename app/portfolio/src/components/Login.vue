<template>
    <div class="login">
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button @click="login">ログイン</button>
        <!-- <p>You don't have an account? 
        <router-link to="/signup">create account now!!</router-link>
        </p> -->
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'Login',
    data: function() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login: function() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user => {
                this.$router.push('/Myconfig')

            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>