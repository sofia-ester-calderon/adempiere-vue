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

import { camelizeObjectEntries } from '../camelize.js'
import { convertCriteria } from './core.js'

export function convertRecentItemsList(recentItemsList) {
  camelizeObjectEntries(recentItemsList)
  recentItemsList.records.forEach(record => camelizeObjectEntries(record))
  recentItemsList.recentItemsList = recentItemsList.records
  delete recentItemsList['records']
  return recentItemsList
}

export function convertFavorite(favorite) {
  camelizeObjectEntries(favorite)
  return favorite
}

export function convertDashboard(dashboard) {
  camelizeObjectEntries(dashboard)
  return dashboard
}

export function convertPendingDocument(pendingDocumentToConvert) {
  const conv = {
    windowUuid: pendingDocumentToConvert.window_uuid,
    formUuid: pendingDocumentToConvert.form_uuid,
    documentName: pendingDocumentToConvert.document_name,
    documentDescription: pendingDocumentToConvert.document_description,
    sequence: pendingDocumentToConvert.sequence,
    recordCount: pendingDocumentToConvert.record_count,
    criteria: convertCriteria(
      pendingDocumentToConvert.criteria
    )
  }
  console.log(conv.criteria)
  return {
    windowUuid: pendingDocumentToConvert.window_uuid,
    formUuid: pendingDocumentToConvert.form_uuid,
    documentName: pendingDocumentToConvert.document_name,
    documentDescription: pendingDocumentToConvert.document_description,
    sequence: pendingDocumentToConvert.sequence,
    recordCount: pendingDocumentToConvert.record_count,
    criteria: convertCriteria(
      pendingDocumentToConvert.criteria
    )
  }
}
