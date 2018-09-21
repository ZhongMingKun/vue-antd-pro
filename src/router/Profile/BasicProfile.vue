<template>
  <a-card>
    <DescriptionList :col="3">
      <Description :term="1">
        <template slot="detail">
          dudulu*1
        </template>
      </Description>
      <Description :term="2">
        <template slot="detail">
          dudulu*2
        </template>
      </Description>
      <Description :term="3" :detail="'dudulu*3'">
      </Description>
    </DescriptionList>
  </a-card>
</template>

<script>
import { DescriptionList, Description } from '../../components/DescriptionList';
export default {
  components: {
    DescriptionList,
    Description,
  },
};
</script>

<style lang="less" scoped>
</style>
