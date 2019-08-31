<template>
    <div class="top">
        <div id="wrapper">

            <!-- ▼Sidebar -->
            <div id="sidebar">
                <div id="sidebarWrap">
                    <h1>BE OPEN</h1>
                    <nav id="mainnav">
                    <p id="menuWrap"><a id="menu"><span id="menuBtn"></span></a></p>
                    <div class="panel">
                        <ul>
                            <li><a href="#top">TOP</a></li>
                            <li><a href="#sec01">PROFILE</a></li>
                            <li><a href="#sec02">SKILL</a></li>
                            <li><a href="#sec03">PRODUCTS</a></li>
                            <li><a href="#sec04">BLOG</a></li>
                            <li><a href="#sec05">CONTACT</a></li>
                        </ul>
                        <ul id="sns">
                            <li><a href="#" target="_blank"><img src="images/iconTw.png" width="20" height="20" alt="twitter"></a></li>
                            <li><a href="#" target="_blank"><img src="images/iconGitHub.png" width="20" height="20" alt="GitHub"></a></li>
                        </ul>
                    </div>
                    </nav>
                </div>
            </div>
            <!-- ▲Sidebar -->

            <!-- ▼Content -->
            <div id="content">
                <p id="mainImg">
                    <!-- <img src="images/mainImg.jpg" alt=""> -->
                    <!-- <img src="images/CLOSING_THE_DISTANCE.png" alt=""> -->
                    <MainImg/>
                </p>
                <!-- ▼sec01_Profile -->
                <section id="sec01">
                    <Profile/>
                </section>
                <!-- ▲sec01_Profile -->
                <!-- ▼sec02_Skills -->
                <section id="sec02">
                    <Skills/>
                </section>
                <!-- ▲sec02_Skills -->
                <!-- ▼sec03_Products -->
                <section id="sec03">
                    <Products/>
                </section>
                <!-- ▲sec03_Products -->
                <!-- ▼sec04_Blog -->
                <section id="sec04">
                    <Blog/>
                </section>
                <!-- ▲sec04_Blog -->
                <!-- ▼sec05_Contact -->
                <section id="sec05">
                    <Contact/>
                </section>
                <!-- ▲sec05_Contact -->
                
                <!-- ▼footer -->
                <footer id="footer">Copyright(c) 2019 domain name Hosted by firebase<!-- クレジット表記を外す場合はシリアルキーが必要です http://f-tpl.com/credit/ --></footer>
                <router-link to="/admin">ログイン</router-link>
                <!-- ▲footer -->
            </div>
            <!-- ▲Content -->

        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import MainImg from '@/components/MainImg.vue'
import Greeting from '@/components/Greeting.vue'
import Profile from '@/components/Profile.vue'
import Skills from '@/components/Skills.vue'
import Slick from '@/components/Slick.vue'
import Products from '@/components/Products.vue'
import Blog from '@/components/Blog.vue'
import Contact from '@/components/Contact.vue'

export default {
    name: 'home',
    components: {
        MainImg,
        Greeting,
        Profile,
        Skills,
        Products,
        Slick,
        Blog,
        Contact
    }
}
</script>
