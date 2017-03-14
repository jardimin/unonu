<template>

  <div id="info" :style="{bottom: bottom_default + touch_slide + info_offset +'px'}" :class="[{touch: touch},{open: info_open}]">
    <div class="handle" @touchstart.prevent="touchStart" @touchend.prevent="touchEnd" @touchmove.prevent="touchMove" :class="{saiba: saiba_mais}">
      <i class="material-icons open-key">keyboard_arrow_up</i>
    </div>
    <div class="conteudo">
      <div class="mdl-grid">
        <div class="mdl-cell--12-col">
          <h3 style="margin-top: 0; text-align: center;">{{pessoa.nome}}</h3>
        </div>
      </div>
      <div class="mdl-grid">
        <div class="mdl-cell--12-col">
          <button v-if="user.padrinho === null" @click="assist" class="mdl-button mdl-button--colored mdl-js-button mdl-button--raised">
            ask assistance
          </button>
        </div>
      </div>
    </div>
    <!-- <conteudo></conteudo> -->

  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

// import Conteudo from './hv-info-body.vue'

export default {
  name: 'info',
  props: ['pessoa'],
  data () {
    return {
      info_body: true,
      touch: false,
      touch_point: 0,
      touch_slide: 0,
      touch_time: 0,
      bottom_default: -window.innerHeight + 48,
      info_offset: 0,
      info_open: false
    }
  },

  computed: mapGetters([
    'user'
  ]),

  watch: {
    info_open: function (val, oldVal) {
      if (val) {
        this.info_offset = window.innerHeight - 48
      } else {
        this.info_body = true
        this.info_offset = 0
      }
    }
  },

  methods: {
    openInfo (info) {
      this.info_open = info
    },
    touchStart (e) {
      this.touch = true
      this.touch_point = e.changedTouches[0].clientY
      this.touch_time = e.timeStamp
    },
    touchMove (e) {
      this.touch_slide = -(e.changedTouches[0].clientY - this.touch_point)
    },
    touchEnd (e) {
      this.touch = false
      if ( this.touch_slide > 100 ) {
        this.openInfo(true)
      } else if ( this.touch_slide < -100 ) {
        this.openInfo(false)
      } else if ( e.timeStamp - this.touch_time < 200 ) {
        this.openInfo(!this.info_open)
      }
      this.touch_point = 0
      this.touch_slide = 0
    },
    assist() {
      let padrinho = {
        prop: 'padrinho',
        val: this.pessoa
      }
      this.$store.dispatch('changeUser', padrinho)
      this.$emit('proxima')
    }
  },

  updated: function() {
    this.$nextTick( () => {
      componentHandler.upgradeDom()
    })
  },

  components: {
    // Conteudo
  }

}
</script>

<style lang="scss">
#info {
  transition: bottom .5s ease, opacity .3s ease .5s;
  position: fixed;
  bottom: -480px;
  width: 100%;
  height: 100%;
  z-index: 3;
  opacity: 1;
  &.touch {
    transition: none;
  }
  &.open {
    .material-icons.open-key {
      transform: rotate(180deg);
    }
    .handle {
      background: white;
    }
  }
  @media screen and (min-width: 1200px) {
    bottom: 0 !important;
    width: 74%;
    left: 26.65%;
    .handle {
      display: none;
    }
  }
  .handle {
    height: 50px;
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,.4);
    background: rgba(219,0,219,0);
    background: -moz-linear-gradient(top, rgba(219,0,219,0) 0%, rgba(255,255,255,1) 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(219,0,219,0)), color-stop(100%, rgba(255,255,255,1)));
    background: -webkit-linear-gradient(top, rgba(219,0,219,0) 0%, rgba(255,255,255,1) 100%);
    background: -o-linear-gradient(top, rgba(219,0,219,0) 0%, rgba(255,255,255,1) 100%);
    background: -ms-linear-gradient(top, rgba(219,0,219,0) 0%, rgba(255,255,255,1) 100%);
    background: linear-gradient(to bottom, rgba(219,0,219,0) 0%, rgba(255,255,255,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#db00db', endColorstr='#ffffff', GradientType=0 );
    &.saiba {
      height: 45px;
    }
    .material-icons {
      transition: transform .3s;
      margin-left: calc(50% - 30px);
      color: black;
      font-size: 60px;
      margin-top: 0px;
    }
  }
  .mdl-layout__header-row {
    display: none;
  }
  .conteudo {
    background: #ececec;
    width: 100%;
    height: 100%;
    padding-top: 20px;
  }
}
</style>