<template>
  <div class="mdl-cell--12-col container">
    <div v-if="user.pais === 'timor'">
      <h1 style="text-align: center;">Diploma</h1>
      <p>Você tem algum diploma de outro país?</p>
    </div>
    <div v-else-if="user.pais === 'siria'">
      <h1 style="text-align: center;">شهادة</h1>
      <p>هل لديك شهادة من بلد آخر؟</p>
    </div>
    <div v-else-if="user.pais === 'haiti'">
      <h1 style="text-align: center;">Diplôme</h1>
      <p>Avez-vous un diplôme d'un autre pays?</p>
    </div>
    <div v-else-if="user.pais === 'espanha'">
      <h1 style="text-align: center;">Diploma</h1>
      <p>¿Tienes un diploma de otro país?</p>
    </div>
    <div v-else>
      <h1 style="text-align: center;">Degree</h1>
      <p>Do you an degree from other contry?</p>
    </div>
    <div class="mdl-grid">
      <div class="mdl-cell--4-col-desktop mdl-cell--12-col-phone ">
        <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="switch-1">
          <input v-model="diploma" type="checkbox" id="switch-1" class="mdl-switch__input">
          <span v-if="user.pais === 'timor'" class="mdl-switch__label">Diploma</span>
          <span v-else-if="user.pais === 'siria'" class="mdl-switch__label">شهادة</span>
          <span v-else-if="user.pais === 'haiti'" class="mdl-switch__label">Diplôme</span>
          <span v-else-if="user.pais === 'espanha'" class="mdl-switch__label">Diploma</span>
          <span v-else class="mdl-switch__label">Degree</span>
        </label>
      </div>
      <div class="mdl-cell--12-col-desktop mdl-cell--12-col-phone mdl-cell--12-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input v-model="curso" class="mdl-textfield__input" type="text" id="text">
          <label v-if="user.pais === 'timor'" class="mdl-textfield__label" for="text">Curso</label>
          <label v-else-if="user.pais === 'siria'" class="mdl-textfield__label" for="text">تخرج</label>
          <label v-else-if="user.pais === 'haiti'" class="mdl-textfield__label" for="text">Cours</label>
          <label v-else-if="user.pais === 'espanha'" class="mdl-textfield__label" for="text">Curso</label>
          <label v-else class="mdl-textfield__label" for="text">Course</label>
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
      diploma: false,
      curso: ''
    }
  },
  computed: mapGetters([
    'user'
  ]),
  methods: {
    proximaFase() {
      let diploma = {
        prop: 'diploma',
        val: this.diploma
      }
      let curso = {
        prop: 'curso',
        val: this.curso
      }
      this.$store.dispatch('changeUser', diploma)
      this.$store.dispatch('changeUser', curso)
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

</style>