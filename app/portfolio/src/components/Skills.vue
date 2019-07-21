<template>
    <div id="sec02">
        <h2><span>SKILL</span></h2>

        <div class="inner">

            <div class="grid">
                <div id="server_side" class="grid_title">サーバーサイド</div>
                <ul class="container">
                    <li v-bind:class="{ skill_collection_box: isNormal, skill_collection_box_anim: isHovered }"
                        v-on:mouseover="showDetail" v-on:mouseleave="showSimple"
                        v-for="(skill, id) in server_side" :key="id">

                        <div class="inner_collection_box">
                            <div class="box_self_evaluation">
                                <PieChart class="chart" v-bind:self-eval="skill.self_evaluation" />
                                <div class="count">
                                    <em>{{ skill.self_evaluation }}</em>
                                </div>
                                <div class="title">習熟度</div>
                            </div>
                            <div class="overwiew">
                                <ul>
                                    <div class="name"><li>{{ skill.name }}</li></div>
                                    <div class="duration"><li>経験：{{ skill.duration }}ヶ月程度</li></div>
                                </ul>
                            </div>
                        </div>
                        <!-- isHoveredで表示▼ -->
                        <div class="skillDetail clearFix">
                            <div class="detail"></div>
                        </div>
                        <!-- isHoveredで表示▲-->

                    </li>
                </ul>
            </div>

            <div id="front_end" class="grid">
                <div class="grid_title">フロントエンド</div>
                <ul class="container">
                    <li v-bind:class="{ skill_collection_box: isNormal, skill_collection_box_anim: isHovered }"
                        v-on:mouseover="showDetail" v-on:mouseleave="showSimple"
                        v-for="(skill, id) in front_end" :key="id">

                        <div class="inner_collection_box">
                            <div class="box_self_evaluation">
                                <PieChart class="chart" v-bind:self-eval="skill.self_evaluation" />
                                <div class="count">
                                    <em>{{ skill.self_evaluation }}</em>
                                </div>
                                <div class="title">習熟度</div>
                            </div>
                            <div class="overwiew">
                                <ul>
                                    <div class="name"><li>{{ skill.name }}</li></div>
                                    <div class="duration"><li>経験：{{ skill.duration }}ヶ月程度</li></div>
                                </ul>
                            </div>
                        </div>
                        <!-- isHoveredで表示▼ -->
                        <div class="skillDetail clearFix">
                            <div class="detail"></div>
                        </div>
                        <!-- isHoveredで表示▲-->

                    </li>
                </ul>
            </div>

             <div id="infrastructure" class="grid">
                <div class="grid_title">フロントエンド</div>
                <ul class="container">
                    <li v-bind:class="{ skill_collection_box: isNormal, skill_collection_box_anim: isHovered }"
                        v-on:mouseover="showDetail" v-on:mouseleave="showSimple"
                        v-for="(skill, id) in infrastructure" :key="id">

                        <div class="inner_collection_box">
                            <div class="box_self_evaluation">
                                <PieChart class="chart" v-bind:self-eval="skill.self_evaluation" />
                                <div class="count">
                                    <em>{{ skill.self_evaluation }}</em>
                                </div>
                                <div class="title">習熟度</div>
                            </div>
                            <div class="overwiew">
                                <ul>
                                    <div class="name"><li>{{ skill.name }}</li></div>
                                    <div class="duration"><li>経験：{{ skill.duration }}ヶ月程度</li></div>
                                </ul>
                            </div>
                        </div>
                        <!-- isHoveredで表示▼ -->
                        <div class="skillDetail clearFix">
                            <div class="detail"></div>
                        </div>
                        <!-- isHoveredで表示▲-->

                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import db from '@/firebaseInit.js'
import PieChart from '@/components/PieChart'

export default {
    name: 'skills',
    components: { PieChart },
    data () {
        return {
            server_side: [],
            front_end: [],
            infrastructure: [],
            isNormal: true,
            isHovered: false,
        }
    },

    methods: {
        // マウスオーバーしたときの挙動
        showDetail() {
            //

        },

        // マウスリーブしたときの挙動
        showSimple() {
            //

        },
    },

    // インスタンスライフサイクルフック
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