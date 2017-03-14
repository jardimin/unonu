<template>
  <main class="mdl-layout__content">
    <div class="page-content">
      <div class="mdl-grid">
        <div class="mdl-cell--12-col">
          <img class="logo mdl-cell--hide-phone" style="" src="./imgs/logo2.png">
          <h4 style="text-align: center;">This is a service for refugees that are in <strong>Rio de Janeiro</strong> and been registered by <strong>Caritas Arquidiocesana</strong>.</h4>
        </div>
      </div>
      <div class="mdl-grid">
        <div class="mdl-cell--12-col container">
          <div class="mdl-grid">
            <div class="mdl-cell--4-col-desktop mdl-cell--12-col-phone mdl-cell--12-col-tablet">
              <div @click="login('timor')" class="demo-card-wide mdl-card mdl-shadow--2dp bandeira">
                <div class="mdl-card__title" style="background: url('./imgs/timor.jpg') center / cover; height: 176px;">
                </div>
              </div>
            </div>
            <div class="mdl-cell--4-col-desktop mdl-cell--12-col-phone mdl-cell--12-col-tablet">
              <div @click="login('siria')" class="demo-card-wide mdl-card mdl-shadow--2dp bandeira">
                <div class="mdl-card__title" style="background: url('./imgs/siria.png') center / cover; height: 176px;">
                </div>
              </div>
            </div>
            <div class="mdl-cell--4-col-desktop mdl-cell--12-col-phone mdl-cell--12-col-tablet">
              <div @click="login('haiti')" class="demo-card-wide mdl-card mdl-shadow--2dp bandeira">
                <div class="mdl-card__title" style="background: url('./imgs/haiti.png') center / cover; height: 176px;">
                </div>
              </div>
            </div>
            <div class="mdl-cell--4-col-desktop mdl-cell--12-col-phone mdl-cell--12-col-tablet">
              <div @click="login('espanha')" class="demo-card-wide mdl-card mdl-shadow--2dp bandeira">
                <div class="mdl-card__title" style="background: url('./imgs/espanha.png') center / cover; height: 176px;">
                </div>
              </div>
            </div> 
            <div class="mdl-cell--4-col-desktop mdl-cell--12-col-phone mdl-cell--12-col-tablet">
              <div @click="login('inglaterra')" class="demo-card-wide mdl-card mdl-shadow--2dp bandeira">
                <div class="mdl-card__title" style="background: url('./imgs/inglaterra.png') center / cover; height: 176px;">
                </div>
              </div>
            </div>
            
          </div> 
        </div>
        
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'home',
  methods: {
    login(pais) {
      let user = {
        prop: 'pais',
        val: pais
      }
      this.$store.dispatch('changeUser', user)
      this.$router.push('login')
    }
  },
  components: {
    
  }
}
</script>
<style lang="scss">
.bandeira {
  min-height: auto;
  margin-bottom: 20px;
}
.logo {
  width: 100%;
  @media screen and (min-width: 1200px) {
    width: 100%;
  }
}
.container {
  width: 1200px;
  margin: 0 auto;
  padding: 0;
  @media screen and (max-width: 1440px) {
    width: 1100px;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
}
</style>