<template>
  <div class="mdl-cell--12-col container">
    <div v-if="user.pais === 'timor'">
      <h1 style="text-align: center;">Documentos</h1>
      <p>Você tem toda a documentação necessária?</p>
    </div>
    <div v-else-if="user.pais === 'siria'">
      <h1 style="text-align: center;">مستندات</h1>
      <p>هل لديك كل الوثائق اللازمة؟</p>
    </div>
    <div v-else-if="user.pais === 'haiti'">
      <h1 style="text-align: center;">Documents</h1>
      <p>Avez-vous toute la documentation nécessaire?</p>
    </div>
    <div v-else-if="user.pais === 'espanha'">
      <h1 style="text-align: center;">Documents</h1>
      <p>Avez-vous toute la documentation nécessaire?</p>
    </div>
    <div v-else>
      <h1 style="text-align: center;">Documentos</h1>
      <p>¿Tiene toda la documentación necesaria?</p>
    </div>
    <div class="mdl-grid">
      <div class="mdl-cell--4-col-desktop mdl-cell--12-col-phone ">
        <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="switch-0">
          <input v-model="rne" type="checkbox" id="switch-0" class="mdl-switch__input" checked>
          <span class="mdl-switch__label">RNE</span>
        </label>
      </div>
      <div class="mdl-cell--4-col-desktop mdl-cell--12-col-phone ">
        <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="switch-1">
          <input v-model="ct" type="checkbox" id="switch-1" class="mdl-switch__input" checked>
          <span class="mdl-switch__label">Carteira de trabalho</span>
        </label>
      </div>
      <div class="mdl-cell--4-col-desktop mdl-cell--12-col-phone ">
        <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="switch-2">
          <input v-model="rg" type="checkbox" id="switch-2" class="mdl-switch__input" checked>
          <span class="mdl-switch__label">Identidade</span>
        </label>
      </div>
      <div class="mdl-cell--4-col-desktop mdl-cell--12-col-phone ">
        <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="switch-3">
          <input v-model="cpf" type="checkbox" id="switch-3" class="mdl-switch__input" checked>
          <span class="mdl-switch__label">CPF</span>
        </label>
      </div>
      <div class="mdl-cell--4-col-desktop mdl-cell--12-col-phone ">
        <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="switch-4">
          <input v-model="cnpj" type="checkbox" id="switch-4" class="mdl-switch__input" checked>
          <span class="mdl-switch__label">CNPJ</span>
        </label>
      </div>
    </div>
    <div class="foot">
      <button @click="proximaFase" class="mdl-button mdl-button--colored mdl-js-button mdl-button--raised">
        OK
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      rne: false,
      ct: false,
      rg: false,
      cpf: false,
      cnpj: false
    }
  },
  computed: mapGetters([
    'user'
  ]),
  methods: {
    proximaFase() {
      let rne = {
        prop: 'rne',
        val: this.rne
      }
      let ct = {
        prop: 'ct',
        val: this.ct
      }
      let rg = {
        prop: 'rg',
        val: this.rg
      }
      let cpf = {
        prop: 'cpf',
        val: this.cpf
      }
      let cnpj = {
        prop: 'cnpj',
        val: this.cnpj
      }
      this.$store.dispatch('changeUser', rne)
      this.$store.dispatch('changeUser', ct)
      this.$store.dispatch('changeUser', rg)
      this.$store.dispatch('changeUser', cpf)
      this.$store.dispatch('changeUser', cnpj)
      this.$emit('proxima')
    }
  },
  created: function() {
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