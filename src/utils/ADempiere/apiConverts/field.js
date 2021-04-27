// ADempiere-Vue (Frontend) for ADempiere ERP & CRM Smart Business Solution
// Copyright (C) 2017-Present E.R.P. Consultores y Asociados, C.A.
// Contributor(s): Yamel Senih ysenih@erpya.com www.erpya.com
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

import { convertContextInfo } from '@/utils/ADempiere/apiConverts/core.js'
import { camelizeObjectKeys, renameObjectKey } from '../transformObject'

export function convertField(field) {
  camelizeObjectKeys(field)
  convertFieldGroup(field, 'Fieldgroup')
  field.reference = convertReference(field.reference)
  field.contextInfo = convertContextInfo(field.contextInfo)
  renameObjectKey(field, 'Fielddefinition', 'fieldDefinition')
  field.fieldDefinition = convertFieldDefinition(field.fieldDefinition)
  field.valueMin = field.valueMax
  renameObjectKey(field, 'columnSql', 'columnSQL')
  renameObjectKey(field, 'isInfoOnly', 'isinfoOnly')
  return field
}

export function convertFieldGroup(object, oldKeyName) {
  if (!object[oldKeyName]) {
    object.fieldGroup = {}
    return
  }
  renameObjectKey(object, oldKeyName, 'fieldGroup')
  camelizeObjectKeys(object.fieldGroup)
  object.fieldGroup.groupName = object.fieldGroup.name
  object.fieldGroup.groupType = object.fieldGroup.fieldGroupType
}

export function convertReference(reference) {
  if (!reference) {
    return {
      zoomWindows: []
    }
  }
  camelizeObjectKeys(reference)
  reference.zoomWindows = reference.zoomWindows.map(zoomWindowItem => convertZoomWindow(zoomWindowItem))
  return reference
}

export function convertZoomWindow(zoomWindowToConvert) {
  if (!zoomWindowToConvert) {
    return {}
  }
  camelizeObjectKeys(zoomWindowToConvert)
  return zoomWindowToConvert
}

export function convertFieldDefinition(fieldDefinition) {
  if (!fieldDefinition) {
    return { conditions: [] }
  }
  camelizeObjectKeys(fieldDefinition)
  renameObjectKey(fieldDefinition, 'Value', 'value')
  fieldDefinition.conditions = fieldDefinition.conditions
    .map(itemCondition => connvertFieldCondition(itemCondition))
  return fieldDefinition
}

export function connvertFieldCondition(fieldConditionToConvert) {
  if (fieldConditionToConvert) {
    return {
      id: fieldConditionToConvert.id,
      uuid: fieldConditionToConvert.uuid,
      condition: fieldConditionToConvert.condition,
      styleSheet: fieldConditionToConvert.style_sheet,
      isActive: fieldConditionToConvert.is_active
    }
  }
  return {
    id: undefined,
    uuid: undefined,
    condition: undefined,
    stylesheet: undefined,
    isActive: undefined
  }
}
