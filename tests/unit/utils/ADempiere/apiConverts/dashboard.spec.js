import { convertRecentItemsList, convertFavorite, convertDashboard, convertPendingDocument } from '../../../../../src/utils/ADempiere/apiConverts/dashboard';
import recentListItems from './objects/recentListItems.json'
import convertedRecentListItems from './objects/recentListItems_converted.json'
import favorite from './objects/favorite.json'
import convertedFavorite from './objects/favorite_converted.json'
import dashboard from './objects/dashboard.json'
import convertedDashboard from './objects/dashboard_converted.json'
import pendingDocument from './objects/pendingDocument.json'
import convertedPendingDocument from './objects/pendingDocument_converted.json'

it('should convert the recent item list', () => {
    const actualConvertedList = convertRecentItemsList(recentListItems)
    expect(actualConvertedList).toEqual(convertedRecentListItems)
})

 it('should convert the favorite', () => {
     const actualFavorite = convertFavorite(favorite)
     expect(actualFavorite).toEqual(convertedFavorite)
 })

 it('should convert dashboard', () => {
    const actualDashbaord = convertDashboard(dashboard)
    expect(actualDashbaord).toEqual(convertedDashboard)
 })

 it('should convert a pending document', () => {
     const actualPendingDocument = convertPendingDocument(pendingDocument)
     expect(actualPendingDocument).toEqual(convertedPendingDocument)
 })