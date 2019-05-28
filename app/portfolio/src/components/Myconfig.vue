<template>
    <div class="myconfig">
        <!--<button @click="accountDelete()">アカウント削除</button>-->
        <div id="logout">
            <button @click="logout">ログアウト</button>
        </div>

        <form @submit.prevent="registerSkill" id="registerForm">
            <div class="field">
                <label class="label">スキル</label>
                <div class="control">
                    <input type="text" v-model="name" placeholder="スキル" required>
                </div>
            </div>
            <div class="field">
                <label class="label">経験期間</label>
                <div class="control">
                    <input type="text" v-model="duration" placeholder="経験期間" required>
                </div>
            </div>
            <div class="field">
                <label class="label">種類</label>
                <div class="control">
                    <select v-model="category">
                        <option>言語</option>
                        <option>サーバーOS</option>
                        <option>フレームワーク</option>
                        <option>ツール/ミドルウェア</option>
                    </select>
                </div>
            </div>
            <div class="field">
                <label class="label">カテゴリ</label>
                <div class="control">
                    <select v-model="term">
                        <option>フロントエンド</option>
                        <option>サーバーサイド</option>
                        <option>インフラ</option>
                    </select>
                </div>
            </div>
            <div class="field">
                <label class="label">習熟度</label>
                <div class="control">
                    <div id="radio">
                        <label><input type="radio" name="self_evaluation" v-model="self_evaluation" value=1 checked>1</label>
                        <label><input type="radio" name="self_evaluation" v-model="self_evaluation" value=2>2</label>
                        <label><input type="radio" name="self_evaluation" v-model="self_evaluation" value=3>3</label>
                        <label><input type="radio" name="self_evaluation" v-model="self_evaluation" value=4>4</label>
                        <label><input type="radio" name="self_evaluation" v-model="self_evaluation" value=5>5</label>
                    </div>
                </div>
            </div>
            <div class="field">
                <label class="label">詳細</label>
                <div class="control">
                    <textarea v-model="detail" placeholder="アピール欄" required></textarea>
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <button type="submit">登録する</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebaseInit.js'

export default { 
    name: 'Myconfig',
    data() {
        return {
            name: '',
            duration: '',
            category: '',
            term: '',
            self_evaluation: '',
            detail: ''
        }
    },
    methods: {
        logout() {
            if(!firebase.auth().currentUser) {
                alert("ログインしてください。")
                return
            }
            firebase.auth().signOut().then(user => {
                alert("ログアウトしました。")
                this.$router.push("/")
            })
            .catch(error => {
                console.log(error)
            })
        },
        
        registerSkill() {
            const skills = db.collection('skills')
            let data = {
                'name': this.name,
                'duration': this.duration,
                'category': this.category,
                'term': this.term,
                'self_evaluation': this.self_evaluation,
                'detail': this.detail
            }
            skills.add(data).then(docRef => {
                document.getElementById('registerForm').reset()
                console.log("Document written with ID: ", docRef.id)
            })
            .catch(error => {
                console.log(error)
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
