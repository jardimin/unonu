<template>
  <div class="mdl-cell--12-col container">
    <h1 style="text-align: center;">Presentation</h1>
    <p>Tell us a little about you and record a video presenting yourself.</p>
    <div class="mdl-grid">
      <div class="mdl-cell--12-col-desktop mdl-cell--12-col-phone mdl-cell--12-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <textarea v-model="descricao" class="mdl-textfield__input" type="email" id="email"></textarea>
          <label class="mdl-textfield__label" for="email">Tell us about you</label>
        </div>
      </div>
      <div class="mdl-cell--12-col">
        <button class="mdl-button mdl-js-button mdl-button--raised">
          Record Video
        </button>
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
      descricao: ''
    }
  },
  computed: mapGetters([
    'user'
  ]),
  methods: {
    proximaFase() {
      let descricao = {
        prop: 'descricao',
        val: this.descricao
      }
      this.$store.dispatch('changeUser', descricao)
      this.$emit('fim')
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