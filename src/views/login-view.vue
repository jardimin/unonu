<template>
  <main class="mdl-layout__content">
    <div class="page-content" style="margin-bottom: 50px;">
      <div class="mdl-grid">
        <div @proxima="passarFase" :is="'fase'+etapa"></div>
      </div>
    </div>
  </main>
</template>

<script>
import Fase0 from '../components/login/login-fase-0.vue'
import Fase1 from '../components/login/login-fase-1.vue'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      etapa: 0
    }
  },
  computed: mapGetters([
    'user'
  ]),
  methods: {
    passarFase() {
      this.etapa = this.etapa + 1
    }
  },
  components: {
    Fase0,
    Fase1
  }
}
</script>
