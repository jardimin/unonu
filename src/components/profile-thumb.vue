<template>
  <div :id="'profile-'+index" @click="fullScreen" class="mdl-cell--2-col-desktop mdl-cell--2-col-phone">
    <div class="profile-card mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title profile" :style="{background: 'url(./imgs/'+ pessoa.img +') center / cover'}">
        <h2 class="mdl-card__title-text profile-nome">{{pessoa.nome}}</h2>
        <i style="color: white;" class="material-icons play-icon">play_circle_filled</i>
      </div>
      <div v-if="open" class="mdl-card__menu">
        <button @click="exitFullScreen" class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" style="">
          <i style="color: white;" class="material-icons">clear</i>
        </button>
      </div>
    </div>
    <transition name="swipe">
      <info v-if="open"></info>
    </transition>
  </div>
</template>

<script>
import Info from './info.vue'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'login',
  props: ['pessoa', 'index'],
  data () {
    return {
      open: false,
      width: '',
      height: '',
      left: '',
      top: ''
    }
  },
  computed: mapGetters([
    'user'
  ]),
  methods: {
    fullScreen() {
      if (!this.open) {
        this.width = $('#profile-'+this.index).width()
        this.height = $('#profile-'+this.index).height()
        this.left = $('#profile-'+this.index)[0].offsetLeft
        this.top = $('#profile-'+this.index)[0].offsetTop
        $('#profile-'+this.index).css('width', (this.width * 100) / window.innerWidth+'%')
        $('#profile-'+this.index).css('height', (this.height * 100) / window.innerHeight +'%')
        $('#profile-'+this.index).css('left', this.left+'px')
        $('#profile-'+this.index).css('top', this.top+'px')
        $('#profile-'+this.index).css('position', 'fixed')
        console.log('test')
        setTimeout( () => {
          $('#profile-'+this.index).addClass('trans')
          setTimeout( () => {
            $('#profile-'+this.index).addClass('full')
            $('#profile-'+this.index).css('width', '')
            $('#profile-'+this.index).css('height', '')
            $('#profile-'+this.index).css('left', '')
            $('#profile-'+this.index).css('top', '')
            if (window.innerWidth >= 1200) {
              $('#profile-'+this.index).css('width', (window.innerHeight * 9) / 16 + 'px')
              console.log('foi')
            }
            this.open = true
          }, 10)
        }, 10)
      }
    },
    exitFullScreen() {
      $('#profile-'+this.index).css('width', (this.width * 100) / window.innerWidth+'%')
      $('#profile-'+this.index).css('height', (this.height * 100) / window.innerHeight +'%')
      $('#profile-'+this.index).css('left', this.left+'px')
      $('#profile-'+this.index).css('top', this.top+'px')
      $('#profile-'+this.index).removeClass('full')
      setTimeout( () => {
        $('#profile-'+this.index).removeClass('trans')
        setTimeout( () => {
          // $('#profile-'+this.index).css('width', '')
          // $('#profile-'+this.index).css('height', '')
          // $('#profile-'+this.index).css('left', '')
          // $('#profile-'+this.index).css('top', '')
          this.open = false
        }, 10)
      }, 500)
    }
  },
  created: function() {
    this.$nextTick( () => {
      componentHandler.upgradeDom()
      $('.profile').css('height', ($('.profile').width() * 16) / 9 + 'px')
    })
  },
  components: {
    Info
  }
}
</script>
<style lang="scss">
.profile-card {
  width: 100%;
  height: 100%;
}
.profile {
  height: 100% !important;
}
.play-icon {
  opacity: .5;
  color: white;
  position: absolute;
  font-size: 50px;
  left: calc(50% - 25px);
  transition: opacity .5s;
}
.profile-nome {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 5px;
  background: rgba(255,255,255,.5);
  opacity: 1;
  transition: opacity .5s;
}
.trans {
  transition: all .5s;
}
.full {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 9999;
  .play-icon {
    opacity: 0;
  }
  .profile-nome {
    opacity: 0;
  }
  @media (max-width: 479px) {
    width: 100% !important;
  }
}
.swipe-enter-active, .swipe-leave.swipe-leave-active {
  transition: opacity .3s ease .5s;
  opacity: 1 !important;
}
.swipe-leave-active, .swipe-enter {
  transition: opacity .3s ease .5s;
  opacity: 0 !important;
}
</style>