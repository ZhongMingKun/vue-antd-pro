<template>
  <a-col ref="item">
    <div class="term">
      <slot name="term">{{term}}</slot>
    </div>
    <div class="detail">
      <slot name="detail">{{detail}}</slot>
    </div>
  </a-col>
</template>

<script>
// import responsive from './responsive';
export default {
  name: 'DescriptionList',
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
      responsive: {
        1: { xs: 24 },
        2: { xs: 24, sm: 12 },
        3: { xs: 24, sm: 12, md: 8 },
        4: { xs: 24, sm: 12, md: 6 },
      },
    };
  },
};
</script>
<style lang="less" scoped>
@import '~ant-design-vue/lib/style/themes/default.less';

.description-list {
  // offset the padding-bottom of last row
  :global {
    .ant-row {
      margin-bottom: -16px;
      overflow: hidden;
    }
  }

  .title {
    font-size: 14px;
    color: @heading-color;
    font-weight: 500;
    margin-bottom: 16px;
  }

  .term {
    // Line-height is 22px IE dom height will calculate error
    line-height: 20px;
    padding-bottom: 16px;
    margin-right: 8px;
    color: @heading-color;
    white-space: nowrap;
    display: table-cell;

    &:after {
      content: ':';
      margin: 0 8px 0 2px;
      position: relative;
      top: -0.5px;
    }
  }

  .detail {
    line-height: 22px;
    width: 100%;
    padding-bottom: 16px;
    color: @text-color;
    display: table-cell;
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
