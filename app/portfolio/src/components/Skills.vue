<template>
    <div id="sec02">
        <h2><span>SKILL</span></h2>

        <div class="inner">
            <div class="server_side">
                <table>
                <tr>
                    <th class="term">サーバーサイド</th>
                    <th class="category">言語/サーバーOS/FW/ツール・MW</th>
                    <th class="name">名前</th>
                    <th class="duration">経験(ヶ月)</th>
                    <th class="self_evaluation">自己評価(5段階)</th>
                    <th class="detail">詳細</th>
                </tr>
                <tr v-for="(skill, id) in server_side" :key="id">
                    <td></td>
                    <td>{{ skill.category_name }}</td>
                    <td>{{ skill.name }}</td>
                    <td>{{ skill.duration }}</td>
                    <td>{{ skill.self_evaluation }}</td>
                    <td>{{ skill.detail }}</td>
                </tr>
                </table>
            </div>
            <div class="front_end">
                <table>
                <tr>
                    <th>フロントエンド</th>
                    <th class="category">言語/サーバーOS/FW/ツール・MW</th>
                    <th class="name">名前</th>
                    <th class="duration">経験(ヶ月)</th>
                    <th class="self_evaluation">自己評価(5段階)</th>
                    <th class="detail">詳細</th>
                </tr>
                <tr v-for="(skill, id) in front_end" :key="id">
                    <td></td>
                    <td>{{ skill.category_name }}</td>
                    <td>{{ skill.name }}</td>
                    <td>{{ skill.duration }}</td>
                    <td>{{ skill.self_evaluation }}</td>
                    <td>{{ skill.detail }}</td>
                </tr>
                </table>
            </div>
             <div class="infrastructure">
                <table>
                <tr>
                    <th>インフラ</th>
                    <th class="category">言語/サーバーOS/FW/ツール・MW</th>
                    <th class="name">名前</th>
                    <th class="duration">経験(ヶ月)</th>
                    <th class="self_evaluation">自己評価(5段階)</th>
                    <th class="detail">詳細</th>
                </tr>
                <tr v-for="(skill, id) in infrastructure" :key="id">
                    <td></td>
                    <td>{{ skill.category_name }}</td>
                    <td>{{ skill.name }}</td>
                    <td>{{ skill.duration }}</td>
                    <td>{{ skill.self_evaluation }}</td>
                    <td>{{ skill.detail }}</td>
                </tr>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import db from '@/firebaseInit.js'

export default {
    name: 'skills',
    data () {
        return {
            server_side: [],
            front_end: [],
            infrastructure: []
        }
    },
    created() {

        // それぞれのコレクションをカテゴリー順/asc, 自己評価/descでソート、取得(カスタムインデックス設定必要)
        // ServerSide
        db.collection('serverside')
            .orderBy('category', 'asc')
            .orderBy('self_evaluation', 'desc').get().then(querySnapshot => {
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
                this.server_side.push(data)
                })
            })
            .catch(error => {
                console.log(error)
            }
        )

        // Frontend
        db.collection('frontend')
            .orderBy('category', 'asc')
            .orderBy('self_evaluation', 'desc').get().then(querySnapshot => {
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
                this.front_end.push(data)
                })
            })
            .catch(error => {
                console.log(error)
            }
        )

        // Infrastructure
        db.collection('infrastructure')
            .orderBy('category', 'asc')
            .orderBy('self_evaluation', 'desc').get().then(querySnapshot => {
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
            }
        )

    }
}
</script>