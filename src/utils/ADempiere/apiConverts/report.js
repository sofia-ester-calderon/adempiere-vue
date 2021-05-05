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

import { camelizeObjectKeys, renameObjectKey } from '../transformObject'

export function convertListPrintFormats(listPrintFormatsToConvert) {
  return {
    recordCount: listPrintFormatsToConvert.record_count,
    records: listPrintFormatsToConvert.records.map(record => {
      return convertPrintFormat(record)
    }),
    nextPageToken: listPrintFormatsToConvert.next_page_token
  }
}

export function convertPrintFormat(printFormatToConvert) {
  const { name, description } = printFormatToConvert

  return {
    name,
    description,
    tableName: printFormatToConvert.table_name,
    isDefault: printFormatToConvert.is_default,
    reportViewUuid: printFormatToConvert.report_view_uuid,
    printFormatUuid: printFormatToConvert.print_format_uuid
  }
}

export function convertReportOutput(reportOutput) {
  const convertedReportOutput = camelizeObjectKeys(reportOutput)
  renameObjectKey(convertedReportOutput, 'outputStreamAsB64', 'outputStream_asB64')
  renameObjectKey(convertedReportOutput, 'outputStreamAsU8', 'outputStream_asU8')
  return convertedReportOutput
}

export function convertDrillTables(drillTablesToConvert) {
  return {
    tableName: drillTablesToConvert.table_name,
    printName: drillTablesToConvert.print_name
  }
}

export function convertReportView(reportViewToConvert) {
  const { uuid, name, description } = reportViewToConvert

  return {
    uuid,
    name,
    description,
    tableName: reportViewToConvert.table_name,
    reportViewUuid: reportViewToConvert.report_view_uuid
  }
}
