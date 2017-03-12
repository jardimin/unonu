<template>
  <div id="app" class="demo-layout-transparent mdl-layout mdl-js-layout" :class="{'mdl-layout--no-drawer-button': !user.complete}">
    <header v-if="user.complete" class="mdl-layout__header mdl-layout__header--transparent">
      <div class="mdl-layout__header-row">
        <!-- Title -->
        <span class="mdl-layout-title">Title</span>
        <!-- Add spacer, to align navigation to the right -->
        <div class="mdl-layout-spacer"></div>
        <!-- Navigation -->
        <nav class="mdl-navigation">
          <a class="mdl-navigation__link" href="">Link</a>
          <a class="mdl-navigation__link" href="">Link</a>
          <a class="mdl-navigation__link" href="">Link</a>
          <a class="mdl-navigation__link" href="">Link</a>
        </nav>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Title</span>
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" href="">Link</a>
        <a class="mdl-navigation__link" href="">Link</a>
        <a class="mdl-navigation__link" href="">Link</a>
        <a class="mdl-navigation__link" href="">Link</a>
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