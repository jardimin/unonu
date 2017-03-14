<template>
  <div class="mdl-cell--12-col container">
    <div v-if="user.pais === 'timor'">
      <h1 style="text-align: center;">Conecte-se com Outros</h1>
      <p>Agora que está logado, encontre outras pessoas que estão perto de você e adicione-os a sua rede.</p>
    </div>
    <div v-else-if="user.pais === 'siria'">
      <h1 style="text-align: center;">التواصل مع الآخرين</h1>
      <p>والآن بعد أن قمت بتسجيل الدخول، والعثور على أشخاص آخرين من الخاص إلى جانبك وإضافتها إلى الشبكة.</p>
    </div>
    <div v-else-if="user.pais === 'haiti'">
      <h1 style="text-align: center;">Connecter avec d'Autres</h1>
      <p>Maintenant que vous êtes connecté, trouvez d'autres personnes de votre voisin et ajoutez-les à votre réseau.</p>
    </div>
    <div v-else-if="user.pais === 'espanha'">
      <h1 style="text-align: center;">Conéctese con Otros</h1>
      <p>Ahora que ha iniciado sesión, busque a otras personas de su entorno y agregúelas a su red.</p>
    </div>
    <div v-else>
      <h1 style="text-align: center;">Connect With Others</h1>
      <p>Now that you are signed in, find other people your next to you and add them to your network.</p>
    </div>
    <div class="mdl-grid">
      <pessoa v-for="(pe, index) in pessoas" :pessoa="pe" :index="index" style="margin-right: 10px; margin-bottom: 10px;">
        
      </pessoa>
    </div>
    <div class="foot">
      <button @click="proximaFase" class="mdl-button mdl-button--colored mdl-js-button mdl-button--raised">
        OK
      </button>
    </div>
  </div>
</template>

<script>
import Pessoa from '../profile-thumb.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      padrinho: null,
      pessoas: [{
        nome: 'Ana Paula',
        linguas: ['en', 'fr', 'pt'],
        img: 'ana_paula.jpg',
        desc: 'Aenean placerat. In vulputate urna eu arcu. Aliquam erat volutpat. Suspendisse potenti. Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in magna',
        email: 'unonucontato@gmail.com',
        tel: '(21) 555 999 666',
        check: false
      },{
        nome: 'Julio Braga',
        linguas: ['en', 'fr', 'pt'],
        img: 'julio.jpg',
        desc: 'Aenean placerat. In vulputate urna eu arcu. Aliquam erat volutpat. Suspendisse potenti. Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in magna',
        email: 'unonucontato@gmail.com',
        tel: '(21) 555 999 666',
        check: false
      },{
        nome: 'Hugo',
        linguas: ['en', 'fr', 'pt'],
        img: 'hugo.jpg',
        desc: 'Aenean placerat. In vulputate urna eu arcu. Aliquam erat volutpat. Suspendisse potenti. Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in magna',
        email: 'unonucontato@gmail.com',
        tel: '(21) 555 999 666',
        check: false
      },{
        nome: 'Theo',
        linguas: ['en', 'fr', 'pt'],
        img: 'theo.jpg',
        desc: 'Aenean placerat. In vulputate urna eu arcu. Aliquam erat volutpat. Suspendisse potenti. Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in magna',
        email: 'unonucontato@gmail.com',
        tel: '(21) 555 999 666',
        check: false
      }]
    }
  },
  computed: mapGetters([
    'user'
  ]),
  methods: {
    proximaFase() {
      this.$emit('proxima')
    }
  },
  created: function() {
    this.$nextTick( () => {
      componentHandler.upgradeDom()
      $('.profile').css('height', ($('.profile').width() * 16) / 9 + 'px')
    })
  },
  components: {
    Pessoa
  }
}
</script>
<style lang="scss">

</style>