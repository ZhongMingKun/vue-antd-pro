import Vue from 'vue';
import responsive from './responsive';
// import styles from './index.less';

export default Vue.component('Description', {
  props: {
    term: {
      default: '',
    },
    detail: {
      default: '',
    },
  },
  data() {
    return {
      column: 4,
    };
  },
  methods: {
    _setColumn(column) {
      this.column = column;
    },
  },
  render: function(h) {
    return h(
      'a-col',
      {
        attrs: {
          ...responsive[this.column],
        },
      },
      [
        this.$slots.term ? h('div', {class: 'term'}, this.$slots.term) : <div class="term">{this.term}</div>,
        this.$slots.default ? h('div', {class: 'detail'}, this.$slots.default) : <div class="detail">{this.detail}</div>,
      ]
    );
  },
});
