<template>
  <div class="myconfig">
    <!--<button @click="accountDelete()">アカウント削除</button>-->
    <button @click="logout">ログアウト</button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: "Myconfig",
    methods: {
        logout: function() {
            if(!firebase.auth().currentUser) {
                alert("ログインしてください。")
                return
            }
            firebase.auth().signOut().then(user => {
                alert("ログアウトしました。")
                this.$router.push("/login")
            })
            .catch(error => {
                console.log(error);
            })
        }

        // ,
        // accountDelete() {
        //     if(!firebase.auth().currentUser) {
        //         alert("ログインしてください。")
        //         return
        //     }
        //     firebase.auth().currentUser.delete().then(user => {
        //         alert("アカウントを削除しました。")
        //         this.$router.go()
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        // }
    }
};
</script>
