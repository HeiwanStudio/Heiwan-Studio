
export const state = () => ({
  cursor: 'default'
})

export const mutations = {
  setCursor: (state,payload) => {
    state['cursor'] = payload.newVal
  }
}



