import * as types from './mutation-types'
import _ from 'underscore'

export const changeUser = ({ commit, state }, prop_change) => {
  console.log(prop_change)
  commit(types.CHANGE, { prop_change })
}