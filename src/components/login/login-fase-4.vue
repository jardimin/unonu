<template>
  <div class="mdl-cell--12-col container">
    <div v-if="user.pais === 'timor'">
      <h1 style="text-align: center;">Apresentação</h1>
      <p>Conte um pouco sobre você e grave um video se apresentando.</p>
    </div>
    <div v-else-if="user.pais === 'siria'">
      <h1 style="text-align: center;">عرض</h1>
      <p>حدثنا قليلا عنك وتسجيل فيديو تقديم نفسك.</p>
    </div>
    <div v-else-if="user.pais === 'haiti'">
      <h1 style="text-align: center;">Présentation</h1>
      <p>Parlez-nous un peu de vous et enregistrez une vidéo vous présentant.</p>
    </div>
    <div v-else-if="user.pais === 'espanha'">
      <h1 style="text-align: center;">Presentación</h1>
      <p>Cuéntanos un poco sobre ti y graba un video presentándote.</p>
    </div>
    <div v-else>
      <h1 style="text-align: center;">Presentation</h1>
      <p>Tell us a little about you and record a video presenting yourself.</p>
    </div>
    <div class="mdl-grid">
      <div class="mdl-cell--12-col-desktop mdl-cell--12-col-phone mdl-cell--12-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <textarea v-model="descricao" class="mdl-textfield__input" type="email" id="email"></textarea>
          <label v-if="user.pais === 'timor'" class="mdl-textfield__label" for="email">Conte-nos um pouco sobre você.</label>
          <label v-else-if="user.pais === 'siria'" class="mdl-textfield__label" for="email">أخبرنا عن نفسك</label>
          <label v-else-if="user.pais === 'haiti'" class="mdl-textfield__label" for="email">Parlez nous de vous</label>
          <label v-else-if="user.pais === 'espanha'" class="mdl-textfield__label" for="email">Cuéntanos acerca de ti</label>
          <label v-else class="mdl-textfield__label" for="email">Tell us about you</label>
        </div>
      </div>
      <div class="mdl-cell--12-col">
        <button v-if="user.pais === 'timor'" class="mdl-button mdl-button--colored mdl-js-button mdl-button--raised">
          Grave um Vídeo
        </button>
        <button v-else-if="user.pais === 'siria'" class="mdl-button mdl-button--colored mdl-js-button mdl-button--raised">
          تسجيل الفيديو
        </button>
        <button v-else-if="user.pais === 'haiti'" class="mdl-button mdl-button--colored mdl-js-button mdl-button--raised">
          ENREGISTRER UNE VIDÉO
        </button>
        <button v-else-if="user.pais === 'espanha'" class="mdl-button mdl-button--colored mdl-js-button mdl-button--raised">
          GRABAR VIDEO
        </button>
        <button v-else class="mdl-button mdl-button--colored mdl-js-button mdl-button--raised">
          Record Video
        </button>
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