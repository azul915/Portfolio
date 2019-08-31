<template>
    <div class="carousel">
        <slick ref="slick" :options="slickOptions">
            <div class="product"><img class="hoge" src="../../public/images/photo01.jpg" style="width:150px; height:150px"></div>
            <div class="product"><img class="fuga" src="../../public/images/photo02.jpg" style="width:150px; height:150px"></div>
            <div class="product"><img class="foo" src="../../public/images/photo03.jpg" style="width:150px; height:150px"></div>
            <div class="product"><img class="bar" src="../../public/images/photo04.jpg" style="width:150px; height:150px"></div>
            <!-- <Product /> -->
        </slick>
    </div>
</template>
 
<script>
import Slick from 'vue-slick'
import '../../node_modules/slick-carousel/slick/slick.css'
export default {
    name: 'Carousel',
    components: { Slick },
    data () {
        return {
            slickOptions: {
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 3,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }]
            }
        }
    },

    methods: {

        next() {
            this.$refs.slick.next()
        },
        prev() {
            this.$refs.slick.prev()
        },
        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },

    },

}
</script>