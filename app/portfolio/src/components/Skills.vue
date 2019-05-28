<template>
    <section id="sec02">
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
        <tr v-for="(skill, id) in server_sides" :key="id">
            <td></td>
            <td>{{ skill.category }}</td>
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
        <tr v-for="(skill, id) in front_ends" :key="id">
            <td></td>
            <td>{{ skill.category }}</td>
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
        <tr v-for="(skill, id) in infrastructures" :key="id">
            <td></td>
            <td>{{ skill.category }}</td>
            <td>{{ skill.name }}</td>
            <td>{{ skill.duration }}</td>
            <td>{{ skill.self_evaluation }}</td>
            <td>{{ skill.detail }}</td>
        </tr>
        </table>
    </div>
    </section>
</template>
<script>
import db from '@/firebaseInit.js'

export default {
    name: 'skills',
    data () {
        return {
            server_sides: [],
            front_ends: [],
            infrastructures: []
        }
    },
    created() {
        const skills = db.collection('skills')

        // ServerSide
        skills.where('term', '==', 'サーバーサイド').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
            let data = {
                'name': doc.data().name,
                'category': doc.data().category,
                'term': doc.data().term,
                'began_at': doc.data().began_at,
                'duration': doc.data().duration,
                'self_evaluation': doc.data().self_evaluation,
                'detail': doc.data().detail
            }
            this.server_sides.push(data)
            })
        })
        .catch(error => {
            console.log(error)
        })

        // Frontend
        skills.where('term', '==', 'フロントエンド').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
            let data = {
                'name': doc.data().name,
                'category': doc.data().category,
                'term': doc.data().term,
                'began_at': doc.data().began_at,
                'duration': doc.data().duration,
                'self_evaluation': doc.data().self_evaluation,
                'detail': doc.data().detail
            }
            this.front_ends.push(data)
            })
        })
        .catch(error => {
            console.log(error)
        })

        // Infrastructure
        skills.where('term', '==', 'インフラ').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
            let data = {
                'name': doc.data().name,
                'category': doc.data().category,
                'term': doc.data().term,
                'began_at': doc.data().began_at,
                'duration': doc.data().duration,
                'self_evaluation': doc.data().self_evaluation,
                'detail': doc.data().detail
            }
            this.infrastructures.push(data)
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
}
</script>