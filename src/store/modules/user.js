import * as types from '../mutation-types'

// initial state
const state = {
  nome: '',
  descricao: '',
  email: '',
  pais: '',
  video: '',
  emprego: null,
  rec_cultural: [],
  rec_ambiental: [],
  rec_social: [],
  rec_financeira: [],
  refugiado: true,
  rne: false,
  ct: false,
  cpf: false,
  rg: false,
  cnpj: false,
  diploma: false,
  padrinho: null,
  curso: '',
  facebook: '',
  linkedin: '',
  twitter: '',
  nec_ambiental: [],
  nec_social: [],
  nec_cultural: [],
  nec_financeira: [],
  complete: false
}

// mutations
const mutations = {
  [types.CHANGE] (state, { prop_change }) {
    console.log(prop_change)
    state[prop_change.prop] = prop_change.val
  },
}

export default {
  state,
  mutations
}
