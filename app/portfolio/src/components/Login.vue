<template>
    <div class="login">
        <form v-on:submit.prevent="login">
            <input type="email" placeholder="Email" v-model="email">
            <input type="password" placeholder="Password" v-model="password">
            <button type="submit">ログイン</button>
        </form>
        <!-- <p>You don't have an account? 
        <router-link to="/signup">create account now!!</router-link>
        </p> -->
  </div>
</template>

<script>
import firebase from 'firebase'
import firebaseInit from '@/firebaseInit.js'

export default {
    name: 'Login',
    data () {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user => {
                this.$router.push('/Myconfig')
            })
            .catch(error => {
                alert("メールアドレスおよびパスワードが間違っています。")
            })
        }
    }
}
</script>