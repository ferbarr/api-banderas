<template>
 <div class="container">
   <h1 class="text-center mt-2 col-10 ml-4">Paises</h1>
   <continentes/>
   <buscador class="mb-3"/>
   <cardList/>
 </div>

</template>

<script>

import cardList from './components/cardList.vue'
import continentes from './components/continentes.vue'
import buscador from './components/buscador.vue'
export default {
  components:{
    cardList, continentes,buscador
  },
  name: 'App'
}
</script>

