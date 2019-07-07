<template>
    <div id="sec03">
        <h2><span>PRODUCTS</span></h2>

        <div class="inner">
            <div class="products">
                <table>
                <tr>
                    <th class="prd_name">タイトル</th>
                    <th class="demo">デモのgif</th>
                    <th class="feature">機能</th>
                    <th class="effort">苦労したこと</th>
                </tr>
                <tr v-for="(product, id) in products" :key="id">
                    <td>{{ product.name }}</td>
                    <td><img v-bind:src="product.demoURL"></td>
                    <td>{{ product.feature }}</td>
                    <td>{{ product.effort }}</td>
                </tr>
                </table>
            </div>
        </div>

    </div>
</template>
<script>
import db from '@/firebaseInit.js'

export default {
    name: 'products',
    data () {
        return {
            products: []
        }
    },
    created() {

        // 登録順にソート
        db.collection('products').orderBy('created_at', 'asc').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
            let data = {
                'name': doc.data().prd_name,
                'demoURL': doc.data().demo,
                'feature': doc.data().feature,
                'effort': doc.data().effort
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