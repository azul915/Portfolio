<template>
    <slick
        ref="slick"
        :options="slickOptions">
        <div v-for="(image, index) in images" :key="index" class="image-thumb">
            <img :src="image.first_image_url">
        </div>
    </slick>
</template>

<script>
import Slick from 'vue-slick'

export default {
    name: 'Slick',
    components: { Slick },
    data() {
            return {
                // slickの設定
                slickOptions: {
                    autoplay: true,
                    dots: true,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    responsive: [
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 2,
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 2
                            }
                        },
                    ]
                },
            };
        },
        methods: {
            next() {
                this.$refs.slick.next();
            },
            prev() {
                this.$refs.slick.prev();
            },
            reInit() {
                this.$nextTick(() => {
                    this.$refs.slick.reSlick();
                });
            },
        },
}
</script>
