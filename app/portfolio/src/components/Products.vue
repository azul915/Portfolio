<template>
    <div id="sec03">
        <h2><span>PRODUCTS</span></h2>

        <div class="inner">
            <ul class="col4">
                <li v-for="product in products" :key="product.id">
                    <p class="img"><img v-bind:src="product.demoURL" width="168" height="168" alt=""></p>
                    <a v-bind:href="product.githuburl" target="_blank"><p>{{ product.name }}</p></a>
                    <p>{{ product.feature }}</p>
                    <p>{{ product.effort }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import db from '@/firebaseInit.js'

export default {
    name: 'products',
    data () {
        return {
            products: [],
        }
    },

    methods: {
    },

    // インスタンスライフサイクルフック
    created() {

        // productsのコレクションを登録順/ascでソート
        db.collection('products').orderBy('created_at', 'asc').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
            let data = {
                'name': doc.data().prd_name,
                'demoURL': doc.data().demo,
                'feature': doc.data().feature,
                'effort': doc.data().effort,
                'githuburl' : doc.data().githuburl,
            }
            this.products.push(data)
            })
        })
        .catch(error => {
            console.log(error)
        })

    }
}
</script>