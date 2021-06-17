<template>
  <el-row class="item-wrapper">
    <el-col :span="3" :style="iconMargin">
      <i v-if="icon.includes('el-icon')" class="icon sub-el-icon" />
      <svg-icon v-else :icon-class="icon" />
    </el-col>
    <el-col v-if="!isCollapsed" :span="21">
      <p class="item-title">{{ title }}</p>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    isCollapsed: {
      type: Boolean,
      default: false
    },
    hasChildItems: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconMargin() {
      if (!this.isCollapsed) {
        return ''
      }
      if (this.hasChildItems) {
        return 'margin-left: -4px;'
      }
      return 'margin-left: 18px;'
    }
  }
}
</script>

<style scoped>
  .sub-el-icon {
    width: 1em;
    height: 1em;
  }

  .item-wrapper {
    white-space: break-spaces;
    line-height: 20px;
    height: auto;
    padding: 18px 23px 18px 0;  
  }

  .item-title {
    margin: 0 0 0 7px;
  }
</style>

<style>
  .el-row::before {
    display: block;
    height: 0;
  }

  .el-row::after {
    display: block;
    height: 0;
  }
</style>
