import { createStore } from 'vuex'

export default createStore({
  state: {
    pais:[],
    paisFiltrado:[]
  },
  mutations: {
    setPais(state,payload){
      state.pais=payload
    
    },
    setPaisFiltrado(state,payload){
      state.paisFiltrado=payload
    }
  },
  actions: {
    async getPais({commit}){
      try{
        const res=await fetch('banderas.json')
        const dataPais= await res.json()
        // console.log(dataPais)
        commit('setPais',dataPais)
      }catch(e){
        console.log(e)
      }
    },
    filtrarRegion({commit,state},region){
      const filtro=state.pais.filter(paisF=>paisF.region.includes(region))
      commit('setPaisFiltrado',filtro)
    },
    filtroNombre({commit,state},texto){
      const filtro=state.pais.filter((paisN)=>{
        let nombreApi=paisN.name.toLowerCase()
        let nombreP=paisN.region.toLowerCase()
        let nombreC=paisN.capital.toLowerCase()
        let nombreInput=texto.toLowerCase()
        if(nombreApi.includes(nombreInput) || nombreP.includes(nombreInput) || nombreC.includes(nombreInput)){
          return paisN
        }
      })
      commit('setPaisFiltrado',filtro)
    }
  },
  getters: {
    paisPoblacion(state){
      return state.paisFiltrado.sort((a,b)=>{
        return a.population < b.population?1:-1
      })
    }
  }
})
