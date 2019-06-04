<template>
    <div class="mainImg">
        <link href='https://fonts.googleapis.com/css?family=Lato:300' rel='stylesheet' type='text/css'>
        <div class="container">
        <div class="overlay">
            <h1><Greeting/></h1>
        </div>
        </div>
    </div>
</template>

<script>
import Greeting from '@/components/Greeting.vue'
export default { 
    name: 'MainImg',
    components: {
        Greeting
    }
}
</script>

<style lang="scss">
html, body, .container {
  width: 100%;
  height: 100%;
}

.container,
.overlay:before {
  background: url("../../public/images/CLOSING_THE_DISTANCE.png") no-repeat fixed 0 0 / cover;
}


.container {
  align-items: center;
  display: flex;
  justify-content: center;
}

.overlay {
  max-height: 200px;
  margin: 0 auto;
  max-width: 768px;
  overflow: hidden;
  padding: 50px;
  position: relative;
  color: white;
  font-family: 'Lato';
  position: relative;
  text-align: center;
  z-index: 0;
  &:before {
    content: '';
    filter: blur(20px);
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
}
</style>
