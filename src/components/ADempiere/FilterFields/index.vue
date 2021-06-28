<!--
 ADempiere-Vue (Frontend) for ADempiere ERP & CRM Smart Business Solution
 Copyright (C) 2017-Present E.R.P. Consultores y Asociados, C.A.
 Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com www.erpya.com
 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program.  If not, see <https:www.gnu.org/licenses/>.
-->

<template>
  <el-form class="form-filter-fields">
    <!-- <el-form-item :label="groupField"> -->
    <el-form-item>
      <el-select
        v-model="selectedFields"
        :filterable="!isMobile"
        :placeholder="$t('components.filterableItems')"
        multiple
        collapse-tags
        value-key="key"
        :popper-append-to-body="false"
        @change="addField"
      >
        <el-option
          v-for="(item, key) in fieldsListOptional"
          :key="key"
          :label="item.name"
          :value="item.columnName"
        />
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script>

export default {
  name: 'FilterFields',
  props: {
    containerUuid: {
      type: String,
      required: true
    },
    groupField: {
      type: String,
      default: ''
    },
    panelType: {
      type: String,
      default: 'window'
    }
  },
  data() {
    return {
      selectedFields: [],
      fieldsListOptional: []
    }
  },

  computed: {
    isAdvancedQuery() {
      return this.panelType === 'table'
    },
    isMobile() {
      return this.$store.state.app.device === 'mobile'
    }
  },
  created: async function() {
    let notMandatoryFields = this.$store.getters.getFieldsListNotMandatory({ containerUuid: this.containerUuid })
    if (this.panelType === 'window' && !this.isEmptyValue(this.groupField)) {
      // compare group fields to window
      notMandatoryFields = notMandatoryFields
        .filter(fieldItem => {
          return fieldItem.groupAssigned === this.groupField
        })
    }
    this.fieldsListOptional = notMandatoryFields
    if (notMandatoryFields) {
      this.selectedFields = notMandatoryFields
        .filter(fieldItem => {
          return fieldItem.isShowedFromUser
        })
        .map(itemField => {
          return itemField.columnName
        })
    }
  },
  methods: {
    addField(selectedValues) {
      console.log('adding field: ', selectedValues)
      this.$store.dispatch('changeFieldShowedFromUser', {
        containerUuid: this.containerUuid,
        fieldsUser: selectedValues,
        show: true,
        groupField: this.groupField,
        isAdvancedQuery: this.isAdvancedQuery
      })
      this.selectedFields = selectedValues
    },
    getOptionText(item) {
      if (item.isShowedFromUser) {
        return 'YES - ' + item.name
      } else return item.name
    }
  }
}
</script>

<style lang="scss" scoped>
.form-filter-fields {
  .el-form-item {
    margin-bottom: 0px !important;
    margin-left: 0px !important;
    margin-right: 0px !important;
  }
}
</style>
<style lang="scss">
.form-filter-fields {
  // position
  float: right;

  .el-tag--small {
    max-width: 132px !important;
  }

  // text tag
  .el-tag {
    &.el-tag--info {
      &.el-tag--small {
        &.el-tag--light  {
          // max-width: calc(100% - 10px);
          &:first-child {
            .el-select__tags-text {
              max-width: calc(100% - 15px);
            }
          }
        }
      }
    }
  }
  .el-select__tags-text {
    width: 100%;
    overflow: hidden !important;
    white-space: nowrap;
    text-overflow: ellipsis !important; // ... end text
    display: inline-block;
  }

  // icon X close tag
  .el-select i.el-tag__close {
    &.el-tag__close {
      // left: 58%;
      // margin-top: 0px !important;
      // top: 0 !important;
      color: #FFF !important;
      // position: absolute !important;
      position: relative !important;
      top: -7 !important;
    }
  }

  .el-select-dropdown.is-multiple .el-select-dropdown__item.selected::after {
    content: "";
  }
}
</style>
