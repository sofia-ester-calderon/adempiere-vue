import { convertContextInfo, convertOrganization, convertLanguage, convertCountry, convertBusinessPartner } from '@/utils/ADempiere/apiConverts/core.js';
import contextInfo from './objects/contextInfo.json'
import convertedContextInfo from './objects/contextInfo_converted.json'
import contextInfoWithoutMessage from './objects/contextInfoWithoutMessage.json'
import convertedContextInfoWithoutMessage from './objects/contextInfoWithoutMessage_converted.json'
import organization from './objects/organization.json'
import convertedOrganization from './objects/organization_converted.json'
import language from './objects/language.json'
import convertedLanguage from './objects/language_converted.json'
import country from './objects/country.json'
import convertedCountry from './objects/country_converted.json'
import countryWithNoCurrency from './objects/countryNoCurrency.json'
import convertedCountryWithNoCurrency from './objects/countryNoCurrency_converted.json'
import businessPartner from './objects/businessPartner.json'
import convertedBusinessPartner from './objects/businessPartner_converted.json'

describe('context info', () => {
    it('should return a converted context info', () => {
        const actualContextInfo = convertContextInfo(contextInfo)
        expect(actualContextInfo).toEqual(convertedContextInfo)
    })
    it('should return empty object for undefined context info', () => {
        const actualContextInfo = convertContextInfo(null)
        expect(actualContextInfo).toEqual({messageText: {}})
    })
    it('should return a converted context info with an empty message', () => {
        const actualContextInfo = convertContextInfo(contextInfoWithoutMessage)
        expect(actualContextInfo).toEqual(convertedContextInfoWithoutMessage)
    })
})

describe('organization', () => {
    it('should return a converted organization object', () => {
        const actualOrganization = convertOrganization(organization)
        expect(actualOrganization).toEqual(convertedOrganization)
    })
})

describe('language', () => {
    it('should return a converted language object', () => {
        const actualLanguage = convertLanguage(language)
        expect(actualLanguage).toEqual(convertedLanguage)
    })
})

describe('country', () => {
    it('should return a converted country object with currency', () => {
        const actualCountry = convertCountry(country)
        expect(actualCountry).toEqual(convertedCountry)
    })
    it('should return a converted country object without currency', () => {
        const actualCountry = convertCountry(countryWithNoCurrency)
        expect(actualCountry).toEqual(convertedCountryWithNoCurrency)
    })
})

describe('business partner', () => {
    it('should return a converted business partner object', () => {
        const actualBusinessPartner = convertBusinessPartner(businessPartner)
        expect(actualBusinessPartner).toEqual(convertedBusinessPartner)
    })
})