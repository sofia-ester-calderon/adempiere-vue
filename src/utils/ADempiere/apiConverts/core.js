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

import { isEmptyValue } from '../valueUtils'
import { camelizeObjectKeys, renameObjectKey } from '../transformObject'

export function convertContextInfo(contextInfo) {
  if (!contextInfo) {
    return { messageText: {}}
  }
  camelizeObjectKeys(contextInfo)
  const messageText = contextInfo.messageText ? camelizeObjectKeys(contextInfo.messageText) : {}
  contextInfo.messageText = messageText
  return contextInfo
}

export function convertOrganization(organization) {
  return camelizeObjectKeys(organization)
}

export function convertLanguage(language) {
  camelizeObjectKeys(language)
  renameObjectKey(language, 'languageIso', 'languageISO')
  return language
}

export function convertCountry(country) {
  camelizeObjectKeys(country)
  renameObjectKey(country, 'isPostCodeLookup', 'isPostcodeLookup')
  country.currency = convertCurrency(country.currency)
  return country
}

function convertCurrency(currency) {
  if (isEmptyValue(currency)) {
    return {
      id: 0,
      uuid: '',
      iSOCode: '',
      curSymbol: '',
      description: '',
      standardPrecision: 0,
      costingPrecision: 0
    }
  }
  camelizeObjectKeys(currency)
  renameObjectKey(currency, 'isoCode', 'iSOCode')
  renameObjectKey(currency, 'currencySymbol', 'curSymbol')
  return currency
}

export function convertBusinessPartner(businessPartner) {
  return camelizeObjectKeys(businessPartner)
}

export function convertConversionRate(conversionRateToConvert) {
  const { id, uuid } = conversionRateToConvert
  if (isEmptyValue(conversionRateToConvert.currency_from) && isEmptyValue(conversionRateToConvert.currency_from)) {
    return {
      uuid,
      id,
      multiplyRate: conversionRateToConvert.multiply_rate,
      divideRate: conversionRateToConvert.divide_rate
    }
  }
  return {
    uuid,
    id,
    conversionTypeUuid: conversionRateToConvert.conversion_type_uuid,
    validFrom: conversionRateToConvert.valid_from,
    currencyFrom: convertCurrency(
      conversionRateToConvert.currency_from
    ),
    currencyTo: convertCurrency(
      conversionRateToConvert.currency_to
    ),
    multiplyRate: conversionRateToConvert.multiply_rate,
    divideRate: conversionRateToConvert.divide_rate
  }
}

export function convertSalesRepresentative(salesRepresentativeToConvert) {
  const { uuid, id, name, description } = salesRepresentativeToConvert

  return {
    uuid,
    id,
    name,
    description
  }
}

export function convertBankAccount(bankAccountToConvert) {
  if (!bankAccountToConvert) {
    return undefined
  }

  const { uuid, id, name, description } = bankAccountToConvert
  return {
    uuid,
    id,
    name,
    accountNo: bankAccountToConvert.account_no,
    description,
    currency: convertCurrency(
      bankAccountToConvert.currency
    ),
    bban: bankAccountToConvert.bban,
    iban: bankAccountToConvert.iban,
    creditLimit: bankAccountToConvert.credit_limit,
    current_balance: bankAccountToConvert.current_balance,
    isDefault: bankAccountToConvert.is_default,
    businessPartner: convertBusinessPartner(
      bankAccountToConvert.business_partner
    ),
    bankAccountType: bankAccountToConvert.bank_account_type,
    bankAccountTypeName: bankAccountToConvert.bank_account_type_name
  }
}

export function convertDocumentType(documentTypeToConvert) {
  if (!documentTypeToConvert) {
    return undefined
  }
  const { uuid, id, name, description } = documentTypeToConvert

  return {
    uuid,
    id,
    name,
    description,
    printName: documentTypeToConvert.print_name
  }
}

export function convertDocumentStatus(documentStatusToConvert) {
  const { name, description } = documentStatusToConvert

  return {
    name,
    description,
    value: documentStatusToConvert.value
  }
}

export function convertPriceList(priceListToConvert) {
  const { uuid, id, name, description } = priceListToConvert

  return {
    uuid,
    id,
    name,
    description,
    currency: convertCurrency(
      priceListToConvert.currency
    ),
    isDefault: priceListToConvert.is_default,
    isTaxIncluded: priceListToConvert.is_tax_included,
    isEnforcePriceLimit: priceListToConvert.is_enforce_price_limit,
    isNetPrice: priceListToConvert.is_net_price,
    pricePrecision: priceListToConvert.price_precision
  }
}

export function convertProductPrice(productPriceToConvert) {
  return {
    currency: convertCurrency(
      productPriceToConvert.currency
    ),
    taxRate: convertTaxRate(
      productPriceToConvert.tax_rate
    ),
    product: convertProduct(
      productPriceToConvert.product
    ),
    schemaCurrency: convertCurrency(
      productPriceToConvert.schema_currency
    ),
    schemaPriceLimit: productPriceToConvert.schema_price_limit,
    schemaPriceList: productPriceToConvert.schema_price_list,
    schemaPriceStandard: productPriceToConvert.schema_price_standard,
    priceList: productPriceToConvert.price_list,
    priceStandard: productPriceToConvert.price_standard,
    priceLimit: productPriceToConvert.price_limit,
    priceListName: productPriceToConvert.price_list_name,
    isTaxIncluded: productPriceToConvert.is_tax_included,
    valid_from: productPriceToConvert.validFrom,
    pricePrecision: productPriceToConvert.price_precision,
    quantityOnHand: productPriceToConvert.quantity_on_hand,
    quantityReserved: productPriceToConvert.quantity_reserved,
    quantityOrdered: productPriceToConvert.quantity_ordered,
    quantityAvailable: productPriceToConvert.quantity_available
  }
}

export function convertTaxRate(taxRateToConvert) {
  return {
    name: taxRateToConvert.name,
    description: taxRateToConvert.description,
    taxIndicator: taxRateToConvert.tax_indicator,
    rate: taxRateToConvert.rate
  }
}

export function convertProduct(productToConvert) {
  const { uuid, id, name, description, help } = productToConvert

  return {
    uuid,
    id,
    value: productToConvert.value,
    name,
    help,
    documentNote: productToConvert.document_note,
    uomName: productToConvert.uom_name,
    productType: productToConvert.product_type,
    isStocked: productToConvert.is_stocked,
    isDropShip: productToConvert.is_drop_ship,
    isPurchased: productToConvert.is_purchased,
    isSold: productToConvert.is_sold,
    imageUrl: productToConvert.image_url,
    productCategoryName: productToConvert.product_category_name,
    productGroupName: productToConvert.product_group_name,
    productClassName: productToConvert.product_class_name,
    productClassification_name: productToConvert.product_classification_name,
    weight: productToConvert.weight,
    volume: productToConvert.volume,
    upc: productToConvert.upc,
    sku: productToConvert.sku,
    shelfWidth: productToConvert.shelf_width,
    shelfHeight: productToConvert.shelf_height,
    shelfDepth: productToConvert.shelf_depth,
    unitsPerPack: productToConvert.units_per_pack,
    unitsPerPallet: productToConvert.units_per_pallet,
    guaranteeDays: productToConvert.guarantee_days,
    descriptionUrl: productToConvert.description_url,
    versionNo: productToConvert.version_no,
    taxCategory: productToConvert.tax_category,
    description
  }
}
