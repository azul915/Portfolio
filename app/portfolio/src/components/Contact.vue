<template>
  <div id="sec05">
        <h2><span>CONTACT</span></h2>

        <div class="inner">
            <div class="postMessage">
                <form v-on:submit.prevent="postMessage">
                    <div class="field">
                        <label class="label">企業様名</label>
                        <div class="control">
                            <input type="text" v-model="company_name" placeholder="企業様名">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">氏名</label>
                        <div class="control">
                            <input type="text" v-model="name" placeholder="氏名"> 
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Eメールアドレス</label>
                        <div class="controll">
                            <input type="email" v-model="email" placeholder="Eメールアドレス">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">ご用件</label>
                        <div class="controll">
                            <select v-model="regarding" required>
                                <option value="scout">ヘッドハンティング</option>
                                <option value="consultation">ご相談</option>
                                <option value="question">ご質問</option>
                                <option value="claim">クレーム</option>
                                <option value="others">その他</option>
                            </select>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">内容</label>
                        <div class="controll">
                            <input type="text" v-model="issue" placeholder="内容">
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <button type="submit">送信する</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebaseInit.js'

export default {
    name: 'contact',
    data() {
        return {
            company_name: '',
            name: '',
            email: '',
            regarding: '',
            issue: '',
        }

    },

    methods: {
        postMessage() {

            // フォームが空のとき送信させない
            if (!this.company_name || !this.name || !this.email || !this.regarding || !this.issue) return

            let data = {
                'company_name': this.company_name,
                'name': this.name,
                'email': this.email,
                'regarding': this.regarding,
                'issue': this.issue,
                'created_at': firebase.firestore.Timestamp.now()
            }

            // CloudFirestoreに追加
            db.collection('contacts').doc('company_name').set(data).then(() => {
                alert('ありがとうございました。送信が完了しましたので、メールにて返信いたします。')
                this.company_name = ''; this.name = ''; this.email = '';
                this.regarding = ''; this.issue = '';
            })
            .catch(error => {
                console.log(error)
            })
        }
    }

}
</script>

<style>

</style>