<template>
  <div class="mdl-cell--12-col container">
    <h1 style="text-align: center;">Documents</h1>
    <p>Do you have all de documentation needed?</p>
    <div class="mdl-grid">
      <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="switch-1">
        <input v-model="documentos" type="checkbox" id="switch-1" class="mdl-switch__input" checked>
        <span class="mdl-switch__label"></span>
      </label>
    </div>
    <div class="foot">
      <button @click="proximaFase" class="mdl-button mdl-js-button mdl-button--raised">
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
      documentos: '',
      diploma: ''
    }
  },
  computed: mapGetters([
    'user'
  ]),
  methods: {
    proximaFase() {
      let nome = {
        prop: 'nome',
        val: this.name
      }
      let email = {
        prop: 'email',
        val: this.email
      }
      this.$store.dispatch('changeUser', nome)
      this.$store.dispatch('changeUser', email)
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
.foot {
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  background: black;
  padding-left: 20px;
  padding-bottom: 10px;
  padding-top: 10px;
  z-index: 999;
}
</style>