<template>
    <div class="mainImg">

      <div class="body">
        <div id="gradient">
          <Greeting/>
        </div>
      </div>

    </div>

</template>

<script>
import '../../public/js/gradation.js'
import Greeting from '@/components/Greeting.vue'
export default { 
    name: 'MainImg',
    components: {
        Greeting
    }
}
</script>