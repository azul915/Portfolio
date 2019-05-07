<template>
    <div class="greeting">
        <vue-typer
                :text='["Hi, I am Kosei Aoyagi.","I am a SoftwareEngineer."]'
                :repeat='Infinity'
                :shuffle='false'
                initial-action='typing'
                :pre-type-delay='900'
                :type-delay='70'
                :pre-erase-delay='900'
                :erase-delay='70'
                erase-style='backspace'
                :erase-on-complete='false'
                caret-animation='blink'>
        </vue-typer>
    </div>
</template>
<script>
import { VueTyper } from 'vue-typer'

export default {
    name: 'Greeting',
    components: {
    VueTyper
  },
}
</script>

