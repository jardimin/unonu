<template>
  <div class="mdl-cell--12-col container">
    <h1 style="text-align: center;">Diploma</h1>
    <p>Do you an degree from other contry?</p>
    <div class="mdl-grid">
      <div class="mdl-cell--4-col-desktop mdl-cell--12-col-phone ">
        <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="switch-1">
          <input v-model="documentos" type="checkbox" id="switch-1" class="mdl-switch__input">
          <span class="mdl-switch__label">Diploma</span>
        </label>
      </div>
      <div class="mdl-cell--12-col-desktop mdl-cell--12-col-phone mdl-cell--12-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input v-model="email" class="mdl-textfield__input" type="email" id="email">
          <label class="mdl-textfield__label" for="email">Course</label>
        </div>
      </div>
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
      documentos: false
    }
  },
  computed: mapGetters([
    'user'
  ]),
  methods: {
    proximaFase() {
      let documentos = {
        prop: 'documentos',
        val: this.documentos
      }
      this.$store.dispatch('changeUser', documentos)
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