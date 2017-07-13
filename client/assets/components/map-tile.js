Vue.component('map-tile', {
  props: {
    type: String,
    x: Number,
    y: Number,
    selected: Boolean
  },
  template: `
    <section :class="['map-tile', ('map-tile-' + type), (selected ? 'map-tile-selected' : '')]"
      :style="'left: ' + left + 'px; top: ' + top + 'px;'"
      :data-pos="JSON.stringify({ x, y })"></section>
  `,
  computed: {
    left() { return this.x * 30 - 15 },
    top() { return this.y * 30 - 15 }
  }
})