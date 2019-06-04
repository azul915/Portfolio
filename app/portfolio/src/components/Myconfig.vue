<template>
    <div class="myconfig">
        <div id="logout">
            <button v-on:click="logout">ログアウト</button>
        </div>

        <form v-on:submit.prevent="registerSkill" id="registerForm">
            <div class="field">
                <label class="label">スキル</label>
                <div class="control">
                    <input type="text" v-model="name" placeholder="スキル" required>
                </div>
            </div>
            <div class="field">
                <label class="label">経験期間</label>
                <div class="control">
                    <input type="number" v-model="duration" placeholder="経験期間" required>
                </div>
            </div>
            <div class="field">
                <label class="label">カテゴリ</label>
                <div class="control">
                    <select v-model="category_id" required>
                        <option value="0">言語</option>
                        <option value="1">サーバーOS</option>
                        <option value="2">フレームワーク</option>
                        <option value="3">ツール/ミドルウェア</option>
                    </select>
                </div>
            </div>
            <div class="field">
                <label class="label">ターム</label>
                <div class="control">
                    <select v-model="term" required>
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
                        <label><input type="radio" name="self_evaluation" v-model="self_evaluation" value="1" required>1</label>
                        <label><input type="radio" name="self_evaluation" v-model="self_evaluation" value="2">2</label>
                        <label><input type="radio" name="self_evaluation" v-model="self_evaluation" value="3">3</label>
                        <label><input type="radio" name="self_evaluation" v-model="self_evaluation" value="4">4</label>
                        <label><input type="radio" name="self_evaluation" v-model="self_evaluation" value="5">5</label>
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

        <div class="registered">
            <table>
                <tr>
                    <th class="name">name</th>
                    <th class="term">term</th>
                    <th class="category">category</th>
                    <th class="duration">duration</th>
                    <th class="self_evaluation">self_evaluation</th>
                    <td class="detail">detail</td>
                    <td class="delete"></td>
                </tr>
                
                <tr v-for="(skill, id) in registered" :key="id">
                    <td class="name">{{ skill.name }}</td>
                    <td class="term">{{ skill.term }}</td>
                    <td class="category">{{ skill.category_name }}</td>
                    <td class="duration">{{ skill.duration }}</td>
                    <td class="self_evaluation">{{ skill.self_evaluation }}</td>
                    <td class="detail">{{ skill.detail }}</td>
                    <td class="delete"><button v-on:click="deleteSkill(id, skill.name)">削除</button></td>
                </tr>
            </table>
        </div>
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
            category_id: '',
            category_name: '',
            term: '',
            self_evaluation: '',
            detail: '',
            registered: []
        }
    },

    methods: {
        // ログアウトの処理を行う
        logout() {
            if(!firebase.auth().currentUser) {
                alert("ログインしてください。")
                return
            }
            firebase.auth().signOut().then(() => {
                alert("ログアウトしました。")
                this.$router.push("/")
            })
            .catch(error => {
                console.log(error)
            })
        },

        // スキルの登録を行う
        registerSkill() {
            // フォームが空のとき送信させない
            if (!this.name || !this.duration || !this.category_id || !this.term || !this.self_evaluation || !this.detail) return

            let category_name = ''
            let num  = this.category_id | 0

            switch(num) {
                case 0:
                    category_name = '言語'
                    break
                case 1:
                    category_name = 'サーバーOS'
                    break
                case 2:
                    category_name = 'フレームワーク'
                    break
                case 3:
                    category_name = 'ツール/ミドルウェア'
                    break
                default:
                    category_name = 'Error'
            }

            let data = {
                'name': this.name,
                'duration': this.duration | 0,
                'category': { id: num, name: category_name },
                'term': this.term,
                'self_evaluation': this.self_evaluation | 0,
                'detail': this.detail,
                'created_at': firebase.firestore.FieldValue.serverTimestamp()
            }
            
            // ドキュメント名を指定してCloudFirestoreに追加
            db.collection('skills').doc(data.name).set(data).then(() => {
                // registeredインスタンスに要素追加
                this.registered.push(data)
                this.name = ''; this.duration = ''; this.category = '';
                this.term = ''; this.self_evaluation = ''; this.detail = '';
                console.log("Document successfully written!")
            })
            .catch(error => {
                console.log(error)
            })
        },

        // スキルの削除を行う
        deleteSkill(id, doc_name){
            if(confirm('削除しますか?')){
                // registeredインスタンスの要素削除
                this.registered.splice(id, 1)

                // ドキュメント名を指定してCloudFirestoreのドキュメントを削除
                db.collection('skills').doc(doc_name).delete().then(() => {
                    console.log("Document successfully deleted!")
                })
                .catch(error => {
                    console.error(error)
                })
            }
        }
    },

    // 登録済みのスキル一覧を表示する
    created() {
        db.collection('skills').orderBy('created_at', 'asc').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
            let data = {
                'name': doc.data().name,
                'category_name': doc.data().category.name,
                'term': doc.data().term,
                'began_at': doc.data().began_at,
                'duration': doc.data().duration,
                'self_evaluation': doc.data().self_evaluation,
                'detail': doc.data().detail
            }
            this.registered.push(data)
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
};
</script>
