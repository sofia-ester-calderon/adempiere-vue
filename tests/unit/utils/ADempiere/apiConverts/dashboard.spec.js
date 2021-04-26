import { uuids } from '../../../randomValues';
import { convertRecentItemsList, convertFavorite, convertDashboard, convertPendingDocument } from '../../../../../src/utils/ADempiere/apiConverts/dashboard';

const recentItemsListToConvert = {
    "record_count": 0,
    "next_page_token": "12345",
    "records": [
      {
        "menu_uuid": uuids[0],
        "menu_name": "Requisition",
        "menu_description": "Requisition Description",
        "window_uuid": uuids[1],
        "tab_uuid": uuids[2],
        "table_id": 3,
        "table_name": "Table Name",
        "id": 23,
        "uuid": uuids[3],
        "display_name": "Requisition",
        "updated": "2021-04-24T05:22:15.961Z",
        "reference_uuid": uuids[4],
        "action": "W"
      }
    ]
}

const favorite = {
    "menu_uuid": uuids[0],
    "menu_name": "Menu Name",
    "menu_description": "Menu Description",
    "reference_uuid": uuids[1],
    "action": "Favorite Action"
}

const dashboard = {
    "window_uuid": uuids[0],
    "browser_uuid": uuids[1],
    "dashboard_name": "Favorites (User)",
    "dashboard_description": "Users Favorites Menu Display",
    "dashboard_html": "<h1>",
    "column_no": 0,
    "line_no": 1,
    "is_collapsible": true,
    "is_open_by_default": true,
    "is_event_required": false,
    "file_name": "userfavorites"
  }

const pendingDocument = {
    "window_uuid": uuids[0],
    "form_uuid": uuids[1],
    "document_name": "Sales Orders",
    "document_description": "Document Description",
    "sequence": 2,
    "record_count": 0,
    "criteria": {
      "table_name": "C_Order",
      "query": "SELECT",
      "where_clause": "C_Order.IsSOTrx=Y",
      "order_by_clause": "DATE",
      "reference_uuid": uuids[2],
      "filters": [],
      "values": ['value1', 'value2'],
      "order_by_columns": ['col1', 'col2'],
      "limit": 5
    }
  }

it('should convert the recent item list', () => {
    const convertedList = convertRecentItemsList(recentItemsListToConvert)
    expect(convertedList.recordCount).toBe(0)
    expect(convertedList.nextPageToken).toBe("12345")
    expect(convertedList.recentItemsList[0].menuUuid).toBe(uuids[0])
    expect(convertedList.recentItemsList[0].menuName).toBe("Requisition")
    expect(convertedList.recentItemsList[0].menuDescription).toBe("Requisition Description")
    expect(convertedList.recentItemsList[0].windowUuid).toBe(uuids[1])
    expect(convertedList.recentItemsList[0].tabUuid).toBe(uuids[2])
    expect(convertedList.recentItemsList[0].tableId).toBe(3)
    expect(convertedList.recentItemsList[0].tableName).toBe('Table Name')
    expect(convertedList.recentItemsList[0].id).toBe(23)
    expect(convertedList.recentItemsList[0].uuid).toBe(uuids[3])
    expect(convertedList.recentItemsList[0].displayName).toBe('Requisition')
    expect(convertedList.recentItemsList[0].updated).toBe("2021-04-24T05:22:15.961Z")
    expect(convertedList.recentItemsList[0].referenceUuid).toBe(uuids[4])
    expect(convertedList.recentItemsList[0].action).toBe('W')
})

 it('should convert the favorite', () => {
     const convertedFavorite = convertFavorite(favorite)
     expect(convertedFavorite.menuName).toBe("Menu Name")
     expect(convertedFavorite.menuUuid).toBe(uuids[0])
     expect(convertedFavorite.menuDescription).toBe("Menu Description")
     expect(convertedFavorite.referenceUuid).toBe(uuids[1])
     expect(convertedFavorite.action).toBe("Favorite Action")
 })

 it('should convert dashboard', () => {
    const convertedDashboard = convertDashboard(dashboard)
    expect(convertedDashboard.windowUuid).toBe(uuids[0])
    expect(convertedDashboard.browserUuid).toBe(uuids[1])
    expect(convertedDashboard.dashboardName).toBe('Favorites (User)')
    expect(convertedDashboard.dashboardDescription).toBe('Users Favorites Menu Display')
    expect(convertedDashboard.dashboardHtml).toBe('<h1>')
    expect(convertedDashboard.columnNo).toBe(0)
    expect(convertedDashboard.lineNo).toBe(1)
    expect(convertedDashboard.isCollapsible).toBe(true)
    expect(convertedDashboard.isOpenByDefault).toBe(true)
    expect(convertedDashboard.isEventRequired).toBe(false)
    expect(convertedDashboard.fileName).toBe('userfavorites')
 })

 it('should convert a pending document', () => {
     const convertedDocument = convertPendingDocument(pendingDocument)
     expect(convertedDocument.windowUuid).toBe(uuids[0])
     expect(convertedDocument.formUuid).toBe(uuids[1])
     expect(convertedDocument.documentName).toBe('Sales Orders')
     expect(convertedDocument.documentDescription).toBe('Document Description')
     expect(convertedDocument.sequence).toBe(2)
     expect(convertedDocument.recordCount).toBe(0)
     expect(convertedDocument.criteria.tableName).toBe('C_Order')
     expect(convertedDocument.criteria.query).toBe('SELECT')
     expect(convertedDocument.criteria.whereClause).toBe('C_Order.IsSOTrx=Y')
     expect(convertedDocument.criteria.orderByClause).toBe('DATE')
     expect(convertedDocument.criteria.referenceUuid).toBe(uuids[2])
     expect(convertedDocument.criteria.valuesList).toStrictEqual(['value1', 'value2'])
     expect(convertedDocument.criteria.orderByColumnList).toStrictEqual(['col1', 'col2'])
     expect(convertedDocument.criteria.limit).toBe(5)
 })