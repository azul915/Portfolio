<template>
    <div class="sample">
        <slick ref="slick" :options="slickOptions">
            <div><img src="../../public/images/iconFb.png"></div>
            <div><img src="../../public/images/iconGitHub.png"></div>
            <div><img src="../../public/images/iconInsta.png"></div>
        </slick>
    </div>
</template>
 
<script>
import Slick from 'vue-slick'
import '../../node_modules/slick-carousel/slick/slick.css'
export default {
    name: 'Sample',
    components: { Slick },
    data () {
        return {
            slickOptions: {
                arrows: false
            }
        }
    },
}
</script>