<template>
  <el-popover
    v-if="!isMobile"
    placement="top"
    width="400"
    trigger="click"
    style="padding: 0px;"
    @hide="closePopover"
  >
    <component
      :is="optionComponent"
      v-if="visibleForDesktop && showPanelFieldOption"
      :field-attributes="contextMenuField.fieldAttributes"
      :source-field="contextMenuField.fieldAttributes"
      :field-value="contextMenuField.valueField"
    />
    <el-button slot="reference" type="text" style="color: #606266;">
      <div class="contents">
        <i v-if="!option.svg" :class="option.icon" style="font-weight: bolder;" />
        <svg-icon v-else :icon-class="option.icon" class="svg-icon-wrapper" />
        <span class="contents">
          <b class="label">
            {{ option.name }}
          </b>
        </span>
      </div>
    </el-button>
  </el-popover>
</template>

<script>
export default {
  props: {
    isMobile: {
      type: Boolean,
      default: false
    },
    visibleForDesktop: {
      type: Boolean,
      default: true
    },
    contextMenuField: {
      type: Object,
      default: () => ({})
    },
    option: {
      type: Object,
      default: () => ({})
    },
    optionComponent: {
      type: Function,
      default: () => ({})
    }
  },
  computed: {
    showPanelFieldOption() {
      return this.$store.state.contextMenu.isShowOptionField
    }
  },
  methods: {
    closePopover() {
      this.$router.push({
        name: this.$route.name,
        query: {
          ...this.$route.query,
          typeAction: '',
          fieldColumnName: ''
        }
      }, () => {})
    }
  }

}
</script>

<style >
.svg-icon-wrapper {
    margin-left: 5px;
    margin-right: 13px;
}
</style>
