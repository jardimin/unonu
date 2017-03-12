<template>
  <div class="mdl-cell--12-col container">
    <h1 style="text-align: center;">Welcome Friend</h1>
    <p>To begin your sign up tell us your name and an email adress so we can contact you and make a password so you can access your profile.</p>
    <div class="mdl-grid">
      <div class="mdl-cell--6-col-desktop mdl-cell--12-col-phone mdl-cell--12-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input v-model="name" class="mdl-textfield__input" type="text" id="name">
          <label class="mdl-textfield__label" for="name">Name</label>
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
          <label class="mdl-textfield__label" for="password">Password</label>
        </div>
      </div>
      <div class="mdl-cell--6-col-desktop mdl-cell--12-col-phone mdl-cell--12-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="password" id="rpassword">
          <label class="mdl-textfield__label" for="rpassword">Repeat password</label>
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