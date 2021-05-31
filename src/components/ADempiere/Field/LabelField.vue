<template>
  <div :style="labelStyle">
    <span>
      <span key="is-field-name">
        {{ label }}
      </span>
      <span v-if="isMandatory" :style="'color: #f34b4b'">*</span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    isMandatory: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    labelStyle() {
      let displayStyle
      this.isMobile ? displayStyle = 'display: flex;width: auto;' : 'display: block;'
      return displayStyle + ' margin-left: 3px;'
    }
  }

}
</script>
