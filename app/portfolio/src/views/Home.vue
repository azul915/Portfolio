<template>
    <div class="home">
        <Login />
        <Greeting />
        <Skills />
    </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import Greeting from '@/components/Greeting.vue'
import Skills from '@/components/Skills.vue'

export default {
    name: 'home',
    components: {
        Login,
        Greeting,
        Skills
    }
}
</script>
