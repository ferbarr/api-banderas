<template>
  <input type="text" placeholder="Buscar nombre pais" class="form-control" v-model="texto" @keyup="procesar">
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
    setup(){
        const store = useStore()
        const texto=ref('')
        const procesar=()=>{
            store.dispatch('filtroNombre',texto.value)
        }
        return {texto,procesar}
    }
    

}
</script>

<style>

</style>