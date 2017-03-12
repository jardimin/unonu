<template>
  <main class="mdl-layout__content">
    <div class="page-content">
      <div class="mdl-grid">
        <div class="mdl-cell--12-col">
          <img style="width: 100%;" src="./imgs/logo.png">
        </div>
      </div>
      <div class="mdl-grid">
        <div class="mdl-cell--12-col container">
          <div class="mdl-grid">
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
              <div @click="login('senegal')" class="demo-card-wide mdl-card mdl-shadow--2dp bandeira">
                <div class="mdl-card__title" style="background: url('./imgs/senegal.png') center / cover; height: 176px;">
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