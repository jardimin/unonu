<template>
  <main class="mdl-layout__content">
    <div class="page-content">
      <div class="mdl-grid">
        <div class="mdl-cell--12-col">
          <h3 style="text-align: center;">Oportunidades</h3>
        </div>
      </div>
      <div class="mdl-grid">
        <div class="mdl-cell--12-col container">
          <div class="mdl-grid">
            <div v-for="(vaga, index) in vagas" class="demo-card-wide mdl-card mdl-shadow--2dp" style="min-height: auto;">
              <div class="mdl-card__title" style="padding-bottom: 0;">
                <h2 class="mdl-card__title-text">{{vaga.nome}}</h2>
              </div>
              <div class="mdl-card__supporting-text">
                {{vaga.dias}}<br>
                <strong>{{vaga.horario}}</strong>
              </div>
              <div class="mdl-card__actions mdl-card--border">
                <a @click.prevent="aplicar(index)" style="float: right;" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                  Aplicar
                </a>
                <span>R$ {{vaga.valor}} {{vaga.pagamento}}</span>
              </div>
              <div class="mdl-card__menu">
                <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                  <i class="material-icons">public</i>
                </button>
              </div>
            </div>
          </div> 
        </div>
        
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'profile',
  data () {
    return {
      vagas: [{
        nome: 'Cozinheiro',
        dias: 'Segunda à Sabado',
        horario: '8:00 - 18:00',
        valor: 500,
        pagamento: 'mensal'
      }]
    }
  },
  computed: mapGetters([
    'user'
  ]),
  methods: {
    aplicar(index) {
      let emprego = {
        prop: 'emprego',
        val: this.vagas[index]
      }
      this.$store.dispatch('changeUser', emprego)
    }
  },
  mounted: function() {
    this.$nextTick( () => {
      componentHandler.upgradeDom()
    })
  },
  components: {
    
  }
}
</script>
<style lang="scss">

</style>