import { randomStrings, uuids } from '../../../randomValues';
import { convertRecentItemsList, convertFavorite, convertDashboard, convertPendingDocument } from '../../../../../src/utils/ADempiere/apiConverts/dashboard';

const recentItemsListToConvert = {
    "record_count": 0,
    "next_page_token": "12345",
    "records": [
      {
        "menu_uuid": uuids[0],
        "menu_name": randomStrings[0],
        "menu_description": randomStrings[1],
        "window_uuid": uuids[1],
        "tab_uuid": uuids[2],
        "table_id": 3,
        "table_name": randomStrings[2],
        "id": 23,
        "uuid": uuids[3],
        "display_name": randomStrings[3],
        "updated": randomStrings[4],
        "reference_uuid": uuids[4],
        "action": randomStrings[5]
      }
    ]
}

const favorite = {
    "menu_uuid": uuids[0],
    "menu_name": randomStrings[0],
    "menu_description": randomStrings[1],
    "reference_uuid": uuids[1],
    "action": randomStrings[2]
}

const dashboard = {
    "window_uuid": uuids[0],
    "browser_uuid": uuids[1],
    "dashboard_name": randomStrings[0],
    "dashboard_description": randomStrings[1],
    "dashboard_html": randomStrings[2],
    "column_no": 0,
    "line_no": 1,
    "is_collapsible": true,
    "is_open_by_default": true,
    "is_event_required": false,
    "file_name": randomStrings[3]
  }

const pendingDocument = {
    "window_uuid": uuids[0],
    "form_uuid": uuids[1],
    "document_name": randomStrings[0],
    "document_description": randomStrings[1],
    "sequence": 2,
    "record_count": 0,
    "criteria": {
      "table_name": randomStrings[2],
      "query": randomStrings[3],
      "where_clause": randomStrings[4],
      "order_by_clause": randomStrings[5],
      "reference_uuid": uuids[2],
      "filters": [],
      "values": [randomStrings[6], randomStrings[7]],
      "order_by_columns": [randomStrings[8], randomStrings[9]],
      "limit": 5
    }
  }

it('should convert the recent item list', () => {
    const convertedList = convertRecentItemsList(recentItemsListToConvert)
    expect(convertedList.recordCount).toBe(0)
    expect(convertedList.nextPageToken).toBe("12345")
    expect(convertedList.recentItemsList[0].menuUuid).toBe(uuids[0])
    expect(convertedList.recentItemsList[0].menuName).toBe(randomStrings[0])
    expect(convertedList.recentItemsList[0].menuDescription).toBe(randomStrings[1])
    expect(convertedList.recentItemsList[0].windowUuid).toBe(uuids[1])
    expect(convertedList.recentItemsList[0].tabUuid).toBe(uuids[2])
    expect(convertedList.recentItemsList[0].tableId).toBe(3)
    expect(convertedList.recentItemsList[0].tableName).toBe(randomStrings[2])
    expect(convertedList.recentItemsList[0].id).toBe(23)
    expect(convertedList.recentItemsList[0].uuid).toBe(uuids[3])
    expect(convertedList.recentItemsList[0].displayName).toBe(randomStrings[3])
    expect(convertedList.recentItemsList[0].updated).toBe(randomStrings[4])
    expect(convertedList.recentItemsList[0].referenceUuid).toBe(uuids[4])
    expect(convertedList.recentItemsList[0].action).toBe(randomStrings[5])
})

 it('should convert the favorite', () => {
     const convertedFavorite = convertFavorite(favorite)
     expect(convertedFavorite.menuName).toBe(randomStrings[0])
     expect(convertedFavorite.menuUuid).toBe(uuids[0])
     expect(convertedFavorite.menuDescription).toBe(randomStrings[1])
     expect(convertedFavorite.referenceUuid).toBe(uuids[1])
     expect(convertedFavorite.action).toBe(randomStrings[2])
 })

 it('should convert dashboard', () => {
    const convertedDashboard = convertDashboard(dashboard)
    expect(convertedDashboard.windowUuid).toBe(uuids[0])
    expect(convertedDashboard.browserUuid).toBe(uuids[1])
    expect(convertedDashboard.dashboardName).toBe(randomStrings[0])
    expect(convertedDashboard.dashboardDescription).toBe(randomStrings[1])
    expect(convertedDashboard.dashboardHtml).toBe(randomStrings[2])
    expect(convertedDashboard.columnNo).toBe(0)
    expect(convertedDashboard.lineNo).toBe(1)
    expect(convertedDashboard.isCollapsible).toBe(true)
    expect(convertedDashboard.isOpenByDefault).toBe(true)
    expect(convertedDashboard.isEventRequired).toBe(false)
    expect(convertedDashboard.fileName).toBe(randomStrings[3])
 })

 it('should convert a pending document', () => {
     const convertedDocument = convertPendingDocument(pendingDocument)
     expect(convertedDocument.windowUuid).toBe(uuids[0])
     expect(convertedDocument.formUuid).toBe(uuids[1])
     expect(convertedDocument.documentName).toBe(randomStrings[0])
     expect(convertedDocument.documentDescription).toBe(randomStrings[1])
     expect(convertedDocument.sequence).toBe(2)
     expect(convertedDocument.recordCount).toBe(0)
     expect(convertedDocument.criteria.tableName).toBe(randomStrings[2])
     expect(convertedDocument.criteria.query).toBe(randomStrings[3])
     expect(convertedDocument.criteria.whereClause).toBe(randomStrings[4])
     expect(convertedDocument.criteria.orderByClause).toBe(randomStrings[5])
     expect(convertedDocument.criteria.referenceUuid).toBe(uuids[2])
     expect(convertedDocument.criteria.valuesList).toStrictEqual([randomStrings[6], randomStrings[7]])
     expect(convertedDocument.criteria.orderByColumnList).toStrictEqual([randomStrings[8], randomStrings[9]])
     expect(convertedDocument.criteria.limit).toBe(5)
 })