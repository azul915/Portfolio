<template>
    <div id="sec04">
        <h2><span>BLOG</span></h2>

        <div class="inner">
            <ul>
                <li v-for="post in articles" :key="post.id">
                    <span class="tag" v-for="tag in post['tags']" :key="tag.id">{{ tag['name'] }}</span>

                    <a v-bind:href="post['url']" target="_blank" rel="noopener noreferrer">
                        <div>{{ post['title'] }}</div>
                    </a>
                </li>
            </ul>
        </div>

    </div>

</template>

<script>
import axios from 'axios'

export default {
    name: 'blog',
    data () {
        return {
            articles: [],
        }
    },

    methods: {
    },

    // インスタンスライフサイクルフック
    mounted() {

        axios.get('https://qiita.com/api/v2/users/azul915/items').then(response => {
            this.articles = response.data
        }).catch(response => {
            console.log(response)
        })

    },

}
</script>