<template >
<div class="card mb-3 col-10 ml-4" v-for="p in pais" :key="p.name">
  <img class="card-img-top w-25  img-fluid d-block mx-auto" :src="p.flag" :alt="p.name">
  <div class="card-body">
    <h2 class="card-title text-center">{{p.name}}</h2>
  </div>
  <ul class="list-group list-group-flush rounded text-center">
    <li class="list-group-item font-italic p-2 bg-dark text-white rounded">Nombre nativo: {{p.nativeName}}</li>
    <li class="list-group-item font-italic p-5 bg-warning text-white rounded">Población: {{poblacionFormat(p.population)}}</li>
    <li class="list-group-item font-italic p-2 bg-dark text-white rounded">Capital: {{p.capital}}</li>
    <li class="list-group-item font-italic p-2 bg-dark text-white rounded">Continente: {{p.region}}</li>
  </ul>

</div>
</template>

<script>
import {computed, onMounted} from 'vue'
import {useStore} from 'vuex'
export default {
    setup(){
        const store=useStore()
        const poblacionFormat=(num)=>{
          return new Intl.NumberFormat("de-DE").format(num)
        }
        const pais = computed(()=>{
            return store.getters.paisPoblacion
        })

        onMounted(()=>{
            store.dispatch('getPais')
        })


        return{pais,poblacionFormat}
    }

}
</script>

