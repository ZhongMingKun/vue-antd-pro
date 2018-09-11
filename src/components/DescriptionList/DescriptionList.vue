<template>
    <div class="description-list">
      {title ? <div className={styles.title}>{title}</div> : null}
      <Row gutter={gutter}>
        {React.Children.map(
          children,
          child => (child ? React.cloneElement(child, { column }) : child)
        )}
      </Row>
    </div>
</template>

<script>
export default {
  name: 'DescriptionList',
  props: {
    layout: {
      type: String,
      default: 'horizontal'
    },
    col: {
      type: Number,
      default: 3
    },
    gutter: {
      type: Number,
      default: 32
    },
    title: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      iconMap: {
        success: 'check-circle',
        error: 'close-circle'
      }
    };
  }
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
