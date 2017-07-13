Vue.config.devtools = true

window._here_vue_instance = new Vue({
  el: '#app',
  data: {
    viewX: 40,
    viewY: 45,
    zoomRatio: 1,
    tiles: window._here_mapGenerator(),
    currentTile: {}
  },
  methods: {
    readTileInfo(e){ this.currentTile = _.find(this.tiles, JSON.parse(e.target.dataset.pos)) }
  }  
})