<template>
    <div class="myconfig">
        <div id="logout">
            <button v-on:click="logout">ログアウト</button>
        </div>

        <div class="registerSkill">
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
                            <option value="serverside">サーバーサイド</option>
                            <option value="frontend">フロントエンド</option>
                            <option value="infrastructure">インフラ</option>
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
        </div>

        <div class="registerProduct">
            <form v-on:submit.prevent="registerProduct">
                <div class="field">
                    <label class="label">プロダクト名</label>
                    <div class="control">
                        <input type="text" v-model="prd_name" placeholder="プロダクト名">
                    </div>
                </div>
                <div class="field">
                    <label class="label">デモ</label>
                    <div class="control">
                        <input type="file" v-on:change="selectedFile" accept="image/png,image/jpeg,image/gif"> 
                    </div>
                </div>
                <div class="field">
                    <label class="label">力を入れたこと</label>
                    <div class="controll">
                        <input type="text" v-model="effort" placeholder="力を入れたこと">
                    </div>
                </div>
                <div class="field">
                    <label class="label">特徴</label>
                    <div class="controll">
                         <input type="text" v-model="feature" placeholder="特徴">
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <button type="submit">登録する</button>
                    </div>
                </div>
            </form>
        </div>

        <div class="serverside">
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
                
                <tr v-for="(skill, id) in serverside" :key="id">
                    <td class="name">{{ skill.name }}</td>
                    <td class="term">{{ skill.term }}</td>
                    <td class="category">{{ skill.category_name }}</td>
                    <td class="duration">{{ skill.duration }}</td>
                    <td class="self_evaluation">{{ skill.self_evaluation }}</td>
                    <td class="detail">{{ skill.detail }}</td>
                    <td class="delete"><button v-on:click="deleteSkill(id, skill.term, skill.name)">削除</button></td>
                </tr>
            </table>
        </div>

        <div class="frontend">
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
                
                <tr v-for="(skill, id) in frontend" :key="id">
                    <td class="name">{{ skill.name }}</td>
                    <td class="term">{{ skill.term }}</td>
                    <td class="category">{{ skill.category_name }}</td>
                    <td class="duration">{{ skill.duration }}</td>
                    <td class="self_evaluation">{{ skill.self_evaluation }}</td>
                    <td class="detail">{{ skill.detail }}</td>
                    <td class="delete"><button v-on:click="deleteSkill(id, skill.term, skill.name)">削除</button></td>
                </tr>
            </table>
        </div>

        <div class="infrastructure">
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
                
                <tr v-for="(skill, id) in infrastructure" :key="id">
                    <td class="name">{{ skill.name }}</td>
                    <td class="term">{{ skill.term }}</td>
                    <td class="category">{{ skill.category_name }}</td>
                    <td class="duration">{{ skill.duration }}</td>
                    <td class="self_evaluation">{{ skill.self_evaluation }}</td>
                    <td class="detail">{{ skill.detail }}</td>
                    <td class="delete"><button v-on:click="deleteSkill(id, skill.term, skill.name)">削除</button></td>
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
            prd_name: '',
            effort: '',
            feature: '',
            serverside: [],
            frontend: [],
            infrastructure: [],
            product: [],
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

            // タームの値で登録先コレクションとドキュメント名を指定してCloudFirestoreに追加
            db.collection(data.term).doc(data.name).set(data).then(() => {

                // タームの値で登録先コンポーネントに要素追加
                switch(data.term) {
                    case 'serverside':
                        this.serverside.push(data)
                        break
                    case 'frontend':
                        this.frontend.push(data)
                        break
                    case 'infrastructure':
                        this.infrastructure.push(data)
                }
                this.name = ''; this.duration = ''; this.category = '';
                this.term = ''; this.self_evaluation = ''; this.detail = '';
                console.log("Document successfully written!")
            })
            .catch(error => {
                console.log(error)
            })
        },

        // スキルの削除を行う
        deleteSkill(id, term, doc_name){
            if(confirm('削除しますか?')){

                // タームの値でコンポーネントを選択して登録要素削除
                let target = ''
                switch(term) {
                    case 'serverside':
                        target = this.serverside
                        break
                    case 'frontend':
                        target = this.frontend
                        break
                    case 'infrastructure':
                        target = this.infrastructure
                }
                target.splice(id, 1)

                // タームの値で登録先コレクションとドキュメント名を指定してCloudFirestoreのドキュメントを削除
                db.collection(term).doc(doc_name).delete().then(() => {
                    console.log("Document successfully deleted!")
                })
                .catch(error => {
                    console.error(error)
                })

            }
        },

        // ファイルのアップロード
        selectedFile(evt) {
            let files = evt.target.files
            this.demo = files[0]
            // let file_name = file[0].name
        },

        // プロダクトの登録を行う
        registerProduct() {

            let prd = {
                'prd_name': this.prd_name,
                'demo': null, 
                'effort': this.effort,
                'feature': this.feature,
                'created_at': firebase.firestore.FieldValue.serverTimestamp()
            }

            // storageにアップロード
            let file_name = this.demo.name
            let storage = firebase.storage()
            let uploadRef = storage.ref('images/').child(file_name)
            uploadRef.put(this.demo).then(snapshot => {
                console.log(snapshot.state)
                // アップロードしたurlをdemoのパスとしてセット
                uploadRef.getDownloadURL().then(url => {
                    prd.demo = url
                    // productsコレクションを指定して登録
                    db.collection('products').doc(this.prd_name).set(prd).then(() => {
                        this.product.push(prd)
                        console.log('Succeeded update url')
                        this.prd_name = ''; this.effort = ''; this.feature = '';
                    })
                    .catch(error => {
                        console.log(error)
                    })
                })
            })
            .catch(error => {
                console.log(error)
            })
        },

        // プロダクトの削除を行う
        deleteProduct(id, doc_name) {
            if(confirm('削除しますか?')) {

                // プロダクトの名前でドキュメントを選択して登録を削除
                db.collection('products').doc(doc_name).delete().then(() => {
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

        // 「サーバーサイド」のスキル一覧表示
        db.collection('serverside').orderBy('created_at', 'asc').get().then(querySnapshot => {
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
            this.serverside.push(data)
            })
        })
        .catch(error => {
            console.log(error)
        })

        // 「フロントエンド」のスキル一覧表示
        db.collection('frontend').orderBy('created_at', 'asc').get().then(querySnapshot => {
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
            this.frontend.push(data)
            })
        })
        .catch(error => {
            console.log(error)
        })

        // 「インフラ」のスキル一覧表示
        db.collection('infrastructure').orderBy('created_at', 'asc').get().then(querySnapshot => {
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
            this.infrastructure.push(data)
            })
        })
        .catch(error => {
            console.log(error)
        })

    },

};
</script>
