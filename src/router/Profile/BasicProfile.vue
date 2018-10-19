<template>
  <a-card>
    <DescriptionList :col="5" :layout="'vertical'">
      <Description :term="1">
        <template slot="detail">
          dudulu*1
        </template>
      </Description>
      <Description :term="2">
          dudulu*2
      </Description>
      <Description :term="3" :detail="'dudulu*3'">
        dudulu*3
      </Description>
      <Description :term="4">
        dudulu*3
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
