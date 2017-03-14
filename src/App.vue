<template>
  <div id="app" class="demo-layout-transparent mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header style="background: white; z-index: 0;" class="mdl-layout__header ">
      <img class="logo mdl-cell--hide-desktop" style="margin-top: 10px;" src="./imgs/logo2.png">
      
    </header>
    <div class="mdl-layout__drawer">
      <span v-if="user.nome !== ''" class="mdl-layout-title">{{user.nome}}</span>
      <span v-if="user.pais !== ''" class="mdl-chip mdl-chip--contact">
        <span class="mdl-chip__contact mdl-color--teal mdl-color-text--white">{{user.pais.charAt(0)}}</span>
        <span class="mdl-chip__text">{{user.pais}}</span>
      </span>
      <span v-if="user.diploma && user.curso !== ''" class="mdl-chip mdl-chip--contact">
        <span class="mdl-chip__contact mdl-color--teal mdl-color-text--white">{{user.curso.charAt(0)}}</span>
        <span class="mdl-chip__text">{{user.curso}}</span>
      </span>
      <p v-if="user.descricao !== ''">{{user.descricao}}</p>
      <span v-if="user.emprego !== null" class="mdl-layout-title">EMPREGO</span>
      <div v-if="user.emprego !== null" style="width: auto;" class="demo-card-wide mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title" style="padding-bottom: 0;">
          <h2 class="mdl-card__title-text">{{user.emprego.nome}}</h2>
        </div>
        <div class="mdl-card__supporting-text">
          {{user.emprego.dias}}<br>
          <strong>{{user.emprego.horario}}</strong>
          <a href="tel:(21) 2567-4105">(21) 2567-4105</a><br>
          <a href="mailto:carj.refugiados@caritas-rj.org.br">carj.refugiados@caritas-rj.org.br</a>
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <a href="tel:(21) 2567-4105" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            Ligar
          </a>
        </div>
        <div class="mdl-card__menu">
          <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
            <i class="material-icons">public</i>
          </button>
        </div>
      </div>
      <span class="mdl-layout-title">ONG</span>
      <div style="width: auto;" class="demo-card-wide mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title" style="padding-bottom: 0;">
          <h2 class="mdl-card__title-text">Caritas Arquediocese</h2>
        </div>
        <div class="mdl-card__supporting-text">
          Rua São Francisco Xavier, 483 - Maracanã - 20550-011<br>
          <a href="tel:(21) 2567-4105">(21) 2567-4105</a><br>
          <a href="mailto:carj.refugiados@caritas-rj.org.br">carj.refugiados@caritas-rj.org.br</a>
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <a href="tel:(21) 2567-4105" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            Ligar
          </a>
        </div>
        <div class="mdl-card__menu">
          <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
            <i class="material-icons">public</i>
          </button>
        </div>
      </div>
      <span v-if="user.padrinho !== null" class="mdl-layout-title">PADRINHO</span>
      <div v-if="user.padrinho !== null" style="width: auto; display: block;" class="demo-card-wide mdl-card mdl-shadow--2dp">
        <div style="width: 30%; float: left;">
          <img style="width: 100%;" :src="'./imgs/'+user.padrinho.img">
        </div>
        <div style="width: 70%; float: left;">
          <div class="mdl-card__title" style="padding-bottom: 0;">
            <h2 class="mdl-card__title-text">{{user.padrinho.nome}}</h2>
          </div>
          <div class="mdl-card__supporting-text">
            <a href="tel:(21) 2567-4105">{{user.padrinho.tel}}</a><br>
            <a href="mailto:carj.refugiados@caritas-rj.org.br">{{user.padrinho.email}}</a>
          </div>
        </div>
        <div class="mdl-card__supporting-text">
          {{user.padrinho.desc | length}}<br>
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <a :href="'tel:'+user.padrinho.tel" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            Ligar
          </a>
        </div>
      </div>
      <span v-if="user.padrinho !== null" class="mdl-layout-title">DOCUMENTOS</span>
      <nav class="mdl-navigation">
        <a v-if="!user.rne" class="mdl-navigation__link" href="">RNE(Registro Nacional de Estrangeiro)</a>
        <a v-if="!user.ct" class="mdl-navigation__link" href="">Carteira de Trabalho</a>
        <a v-if="!user.cpf" class="mdl-navigation__link" href="">Como tirar um CPF</a>
        <a v-if="!user.rg" class="mdl-navigation__link" href="">Como se Nacionalisar</a>
        <a v-if="!user.cnpj" class="mdl-navigation__link" href="">Como abrir uma empresa</a>
        <a v-if="user.diploma && user.curso !==''" class="mdl-navigation__link" href="">Como validar seu diploma: {{user.curso}}</a>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  computed: mapGetters([
    'user'
  ]),
  components: {
    
  },
  filters: {
    length: function (title) {
      if (title.length > 30) {
        return title.slice(0, 30)+'...'
      } else {
        return title
      }
    }
  }
}
</script>
<style lang="scss">
.demo-layout-transparent {
  background: url('./imgs/bkg.png') center / cover;
}
.demo-layout-transparent .mdl-layout__header,
.demo-layout-transparent .mdl-layout__drawer-button {
  /* This background is dark, so we set text to white. Use 87% black instead if
     your background is light. */
  color: black;
}
</style>