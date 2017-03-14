<template>
  <div class="mdl-cell--12-col container">
    <div v-if="user.pais === 'timor'">
      <h1 style="text-align: center;">Bem Vindo Amigo</h1>
      <p>Para começar seu cadastro preencha seu nome e email para que possamos entrar em contato com você e crie uma senha para acessar seu perfil.</p>
    </div>
    <div v-else-if="user.pais === 'siria'">
      <h1 style="text-align: center;">مرحبا صديقى</h1>
      <p>لبدء برجك اقول تصل لنا اسمك والبريد الإلكتروني حتى نتمكن من الاتصال بك وجعل كلمة المرور حتى تتمكن من الوصول إلى ملف التعريف الخاص بك.</p>
    </div>
    <div v-else-if="user.pais === 'haiti'">
      <h1 style="text-align: center;">Bienvenue Mon Ami</h1>
      <p>Pour commencer votre inscription, indiquez-nous votre nom et un e-mail afin que nous puissions vous contacter et faire un mot de passe pour accéder à votre profil.</p>
    </div>
    <div v-else-if="user.pais === 'espanha'">
      <h1 style="text-align: center;">Bienvenido Amigo</h1>
      <p>Para comenzar su inscripción, díganos su nombre y un correo electrónico para que podamos ponernos en contacto con usted y hacer una contraseña para que pueda acceder a su perfil.</p>
    </div>
    <div v-else>
      <h1 style="text-align: center;">Welcome Friend</h1>
      <p>To begin your sign up tell us your name and an email adress so we can contact you and make a password so you can access your profile.</p>
    </div>
    <div class="mdl-grid">
      <div class="mdl-cell--6-col-desktop mdl-cell--12-col-phone mdl-cell--12-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input v-model="name" class="mdl-textfield__input" type="text" id="name">
          <label v-if="user.pais === 'timor'" class="mdl-textfield__label" for="name">Nome</label>
          <label v-else-if="user.pais === 'siria'" class="mdl-textfield__label" for="name">اسم</label>
          <label v-else-if="user.pais === 'haiti'" class="mdl-textfield__label" for="name">Nom</label>
          <label v-else-if="user.pais === 'espanha'" class="mdl-textfield__label" for="name">Nombre</label>
          <label v-else class="mdl-textfield__label" for="name">Name</label>
        </div>
      </div>
      <div class="mdl-cell--6-col-desktop mdl-cell--12-col-phone mdl-cell--12-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input v-model="email" class="mdl-textfield__input" type="email" id="email">
          <label class="mdl-textfield__label" for="email">Email</label>
        </div>
      </div>
      <div class="mdl-cell--6-col-desktop mdl-cell--12-col-phone mdl-cell--12-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="password" id="password">
          <label v-if="user.pais === 'timor'" class="mdl-textfield__label" for="password">Senha</label>
          <label v-else-if="user.pais === 'siria'" class="mdl-textfield__label" for="password">كلمه السر</label>
          <label v-else-if="user.pais === 'haiti'" class="mdl-textfield__label" for="password">Mot de passe</label>
          <label v-else-if="user.pais === 'espanha'" class="mdl-textfield__label" for="password">Contraseña</label>
          <label v-else class="mdl-textfield__label" for="password">Password</label>
        </div>
      </div>
      <div class="mdl-cell--6-col-desktop mdl-cell--12-col-phone mdl-cell--12-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="password" id="rpassword">
          <label v-if="user.pais === 'timor'" class="mdl-textfield__label" for="rpassword">Repetir senha</label>
          <label v-else-if="user.pais === 'siria'" class="mdl-textfield__label" for="rpassword">كرر كلمه السر</label>
          <label v-else-if="user.pais === 'haiti'" class="mdl-textfield__label" for="rpassword">Répéter mot de passe</label>
          <label v-else-if="user.pais === 'espanha'" class="mdl-textfield__label" for="rpassword">Repetir Contraseña</label>
          <label v-else class="mdl-textfield__label" for="rpassword">Repeat password</label>
        </div>
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
      name: '',
      email: ''
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