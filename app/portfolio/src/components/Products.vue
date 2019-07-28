<template>
    <div id="sec03">
        <h2><span>PRODUCTS</span></h2>

        <div class="inner">
            <div class="products">
                <ul>
                <li v-for="product in products" :key="product.id">
                    <div class="cp_card05">
                        <div class="details">
                            <div class="date">
                                <span class="day">2018.06.21</span>
                            </div>
                            <!-- <ul class="meta">
                                <li><a href="#" class="fa fa-bookmark-o"></a></li>
                                <li><a href="#" class="fa fa-heart-o"><span>18</span></a></li>
                                <li><a href="#" class="fa fa-comment-o"><span>3</span></a></li>
                            </ul> -->
                        </div>
                        <div class="description">
                            <div class="content">
                            <!-- <span class="author">copypet</span> -->
                                <h1><a class="prd_name">{{ product.name }}</a></h1>
                                <p class="text">{{ product.feature }}</p>
                                <p class="text">{{ product.effort }}</p>
                                <a href="#" class="button">Read more</a>
                            </div>
                        </div>
                    </div>
                </li>
                </ul>
                <!-- <table>
                <tr>
                    <th class="prd_name">タイトル</th>
                    <th class="demo">デモのgif</th>
                    <th class="feature">機能</th>
                    <th class="effort">苦労したこと</th>
                </tr>
                <tr v-for="product in products" :key="product.id">
                    <td>{{ product.name }}</td>
                    <td><img v-bind:src="product.demoURL"></td>
                    <td>{{ product.feature }}</td>
                    <td>{{ product.effort }}</td>
                </tr>
                </table> -->
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

    // インスタンスライフサイクルフック
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

<style>
.cp_card05 {
position: relative;
overflow: hidden;
width: 350px;
min-height: 330px;
border-radius: 3px;
background: gray;
background-color: #ffffff;
-webkit-box-shadow: 0 3px 7px -3px rgba(0, 0, 0, 0.3);
box-shadow: 0 3px 7px -3px rgba(0, 0, 0, 0.3);
}
.cp_card05:hover .description {
-webkit-transform: translateY(0);
transform: translateY(0);
}
.cp_card05 input[type='checkbox'] {
display: none;
}
.cp_card05 input[type='checkbox']:checked + .meta {
-webkit-transform: translateY(-60px);
transform: translateY(-60px);
}
.cp_card05:hover .meta span {
-webkit-transform: translate(-50%, -10px);
transform: translate(-50%, -10px);
opacity: 1;
}
.cp_card05 .details {
padding: 1em;
color: #ffffff;
}
.cp_card05 .details::before,
.cp_card05 .details::after {
display: table;
content: '';
}
.cp_card05 .details::after {
clear: both;
}
.cp_card05 .details .date {
font-size: 12px;
float: left;
}
.cp_card05 .description {
position: absolute;
bottom: 0;
width: 100%;
-webkit-transition: -webkit-transform 0.3s;
transition: -webkit-transform 0.3s;
transition:         transform 0.3s;
transition:         transform 0.3s, -webkit-transform 0.3s;
-webkit-transform: translateY(40px);
transform: translateY(40px);
color: #ffffff;
background: rgba(0, 0, 0, 0.4);
}
.cp_card05 .description .content {
position: relative;
z-index: 1;
padding: 1em;
}
.cp_card05 .description .author {
font-size: 12px;
}
.cp_card05 .description h1 {
font-size: 1.4em;
margin-top: 10px;
}
.cp_card05 .description h1 a {
color: #ffffff;
text-decoration: none;
}
.cp_card05 .description .text {
height: 3em;
margin: 0;
}
.cp_card05 .description .button {
font-size: 12px;
font-weight: 700;
line-height: 1;
position: relative;
display: block;
width: 100px;
margin: 2em auto 1em;
text-align: center;
color: #ffffff;
text-decoration: none;
}
.cp_card05 .description .button::after {
position: absolute;
top: 50%;
right: 0;
font-family: FontAwesome;
content: '\f061';
-webkit-transition: all 0.3s;
transition: all 0.3s;
-webkit-transform: translate(0, -50%);
transform: translate(0, -50%);
opacity: 0;
}
.cp_card05 .description .button:hover::after {
-webkit-transform: translate(5px, -50%);
transform: translate(5px, -50%);
opacity: 1;
}
.cp_card05 .meta {
float: right;
margin: 0;
padding: 0;
list-style-type: none;
}
.cp_card05 .meta::before,
.cp_card05 .meta::after {
display: table;
content: '';
}
.cp_card05 .meta::after {
clear: both;
}
.cp_card05 .meta li {
position: relative;
display: inline-block;
margin: 0 5px;
}
.cp_card05 .meta a {
color: #ffffff;
text-decoration: none;
}
.cp_card05 .meta span {
font-size: 10px;
position: absolute;
top: 0;
left: 50%;
-webkit-transition: all 0.3s;
transition: all 0.3s;
-webkit-transform: translate(-50%, 0);
transform: translate(-50%, 0);
opacity: 0;
}
@media screen and (max-width: 480px) {
.cp_card05 .description .text {
height: 6em;
}
}
</style>