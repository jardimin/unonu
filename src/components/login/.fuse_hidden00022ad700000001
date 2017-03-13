<template>
  <div class="mdl-cell--12-col container">
    <h1 style="text-align: center;">Connect With Others</h1>
    <p>Now that you are signed in, find other people from your next to you and add them to your network.</p>
    <div v-for="(pe, index) in pessoas" class="mdl-grid">
      <div class="mdl-cell--4-col-desktop mdl-cell--12-col-phone">
        <div class="demo-card-wide mdl-card mdl-shadow--2dp">
          <div class="mdl-card__title profile" :style="{background: 'url(./imgs/'+ pe.img +') center / cover'}">
            <h2 class="mdl-card__title-text">{{pe.nome}}</h2>
          </div>
          <div class="mdl-card__supporting-text">
            {{pe.desc}}
          </div>
          <div class="mdl-card__actions mdl-card--border">
            <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              + friend
            </a>
          </div>
          <div class="mdl-card__menu">
            <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" style="background-color: green;">
              <i style="color: white;" class="material-icons">check</i>
            </button>
          </div>
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
      pessoas: [{
        nome: 'Ana Paula',
        linguas: ['en', 'fr', 'pt'],
        img: 'ana_paula.jpg',
        desc: 'Menina muito legal, que vai ajudar você a se inserir no mercado de trabalho.',
        check: false
      }],
      amigos: []
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
.profile {
  height: 200px;
}
</style>