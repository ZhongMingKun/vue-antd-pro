<template>
    <div class="description-list" :class="[size, layout]">
      <div class="title">
        <slot name="title">{{title}}</slot>
      </div>
      <a-row :gutter="gutter" ref="items">
        <slot></slot>
      </a-row>
    </div>
</template>

<script>
export default {
  name: 'DescriptionList',
  props: {
    layout: {
      type: String,
      default: 'horizontal',
    },
    col: {
      type: Number,
      default: 3,
      validator: function(value) {
        if (!(value > 0 && value <= 4)) {
          console.warn(`[Vue-Antd-Pro warn]: The props 'col' of component 'DescriptionList' should be greater than 0, less than 5`);
        }
        return (value > 0 && value <= 4);
      },
    },
    gutter: {
      type: Number,
      default: 32,
    },
    title: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
    };
  },
  methods: {
    _setItemGrid(val) {
      let children = this.$refs.items.$children;
      children.map(child => {
        child._setColumn(val);
      });
    },
  },
  watch: {
    col(val) {
      if (val > 0 && val <= 4) {
        this._setItemGrid(val);
      }
    },
  },
};
</script>
<style lang="less">
@import '~ant-design-vue/lib/style/themes/default.less';

.description-list {
  // offset the padding-bottom of last row
  :global {
    .ant-row {
      margin-bottom: -16px;
      overflow: hidden;
    }
  }

  &.small {
    // offset the padding-bottom of last row
    :global {
      .ant-row {
        margin-bottom: -8px;
      }
    }
    .title {
      margin-bottom: 12px;
      color: @text-color;
    }
    .term,
    .detail {
      padding-bottom: 8px;
    }
  }

  &.large {
    .title {
      font-size: 16px;
    }
  }

  &.vertical {
    .term {
      padding-bottom: 8px;
      display: block;
    }

    .detail {
      display: block;
    }
  }
}
</style>
