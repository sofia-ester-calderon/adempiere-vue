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

// Get Instance for connection
import { request } from '@/utils/ADempiere/request'
import { config } from '@/utils/ADempiere/config'
import { isEmptyValue } from '@/utils/ADempiere'

/**
 * method in api/price-checking.js as getProductPrice
 * @author elsiosanchez <elsiosanches@gmail.com>
 */
export { getProductPrice as findProduct } from '@/api/ADempiere/form/price-checking.js'
export { requestGetConversionRate } from '@/api/ADempiere/system-core.js'

// List Point of sales
export function getPointOfSales({
  posUuid
}) {
  return request({
    url: `${config.pointOfSales.endpoint}/point-of-sales`,
    method: 'get',
    params: {
      point_of_sales_uuid: posUuid
    }
  })
    .then(posResponse => {
      const { convertPointOfSales } = require('@/utils/ADempiere/apiConverts/pos.js')

      return convertPointOfSales(posResponse)
    })
}

// List Point of sales
export function listPointOfSales({
  userUuid,
  pageSize,
  pageToken
}) {
  return request({
    url: `${config.pointOfSales.endpoint}/selling-points`,
    method: 'get',
    params: {
      user_uuid: userUuid,
      page_size: pageSize,
      page_token: pageToken
    }
  })
    .then(posListResponse => {
      const { convertPointOfSales } = require('@/utils/ADempiere/apiConverts/pos.js')

      return {
        nextPageToken: posListResponse.next_page_token,
        recordCount: posListResponse.record_count,
        sellingPointsList: posListResponse.records.map(pos => {
          return convertPointOfSales(pos)
        })
      }
    })
}

// Create order from POS
export function createOrder({
  posUuid,
  customerUuid,
  documentTypeUuid,
  salesRepresentativeUuid,
  warehouseUuid
}) {
  return request({
    url: `${config.pointOfSales.endpoint}/create-order`,
    method: 'post',
    data: {
      pos_uuid: posUuid,
      customer_uuid: customerUuid,
      document_type_uuid: documentTypeUuid,
      sales_representative_uuid: salesRepresentativeUuid,
      warehouse_uuid: warehouseUuid
    }
  })
    .then(createOrderResponse => {
      const { convertOrder } = require('@/utils/ADempiere/apiConverts/pos.js')

      return convertOrder(createOrderResponse)
    })
}

// Update order from POS
export function updateOrder({
  orderUuid,
  posUuid,
  customerUuid,
  documentTypeUuid,
  description,
  warehouseUuid
}) {
  return request({
    url: `${config.pointOfSales.endpoint}/update-order`,
    method: 'post',
    data: {
      order_uuid: orderUuid,
      pos_uuid: posUuid,
      customer_uuid: customerUuid,
      document_type_uuid: documentTypeUuid,
      description,
      warehouse_uuid: warehouseUuid
    }
  })
    .then(updateOrderResponse => {
      const { convertOrder } = require('@/utils/ADempiere/apiConverts/pos.js')

      return convertOrder(updateOrderResponse)
    })
}

// Get order from uuid
export function getOrder(orderUuid) {
  return request({
    url: `${config.pointOfSales.endpoint}/order`,
    method: 'get',
    params: {
      order_uuid: orderUuid
    }
  })
    .then(getOrderResponse => {
      const { convertOrder } = require('@/utils/ADempiere/apiConverts/pos.js')

      return convertOrder(getOrderResponse)
    })
}

// Create order from POS
export function deleteOrder({
  orderUuid
  // posUuid,
  // customerUuid,
  // documentTypeUuid,
  // salesRepresentativeUuid
}) {
  return request({
    url: `${config.pointOfSales.endpoint}/delete-order`,
    method: 'post',
    data: {
      order_uuid: orderUuid
      // pos_uuid: posUuid,
      // customer_uuid: customerUuid,
      // document_type_uuid: documentTypeUuid,
      // sales_representative_uuid: salesRepresentativeUuid
    }
  })
    .then(response => {
      return response
    })
}

// List orders from pos uuid
export function listOrders({
  posUuid,
  documentNo,
  businessPartnerUuid,
  grandTotal,
  openAmount,
  isPaid,
  isProcessed,
  isAisleSeller,
  isInvoiced,
  dateOrderedFrom,
  dateOrderedTo,
  salesRepresentativeUuid,
  pageSize,
  pageToken
}) {
  /*
  const Criteria = require('@/utils/ADempiere/criteria.js')
  const criteria = new Criteria({
    tableName: 'C_Order'
  })

  criteria.addCondition({
    columnName: 'DocumentNo',
    value: documentNo
  }).addCondition({
    columnName: 'C_BPartner_ID_UUID',
    value: businessPartnerUuid
  }).addCondition({
    columnName: 'GrandTotal',
    value: grandTotal
  }).addCondition({
    columnName: 'OpenAmt',
    value: openAmount
  }).addCondition({
    columnName: 'IsPaid',
    value: isPaid
  }).addCondition({
    columnName: 'Processed',
    value: isProcessed
  }).addCondition({
    columnName: 'IsAisleSeller',
    value: isAisleSeller
  }).addCondition({
    columnName: 'IsInvoiced',
    value: isInvoiced
  }).addCondition({
    columnName: 'DateOrderedFrom',
    value: dateOrderedFrom
  }).addCondition({
    columnName: 'DateOrderedTo',
    value: dateOrderedTo
  }).addCondition({
    columnName: 'SalesRep_ID_UUID',
    value: salesRepresentativeId
  })
  */

  return request({
    url: `${config.pointOfSales.endpoint}/orders`,
    method: 'get',
    params: {
      pos_uuid: posUuid,
      document_no: documentNo,
      business_partner_uuid: businessPartnerUuid,
      sales_representative_uuid: salesRepresentativeUuid,
      grand_total: grandTotal,
      open_amount: openAmount,
      is_paid: isPaid,
      is_processed: isProcessed,
      is_aisle_seller: isAisleSeller,
      is_invoiced: isInvoiced,
      date_ordered_from: dateOrderedFrom,
      date_ordered_to: dateOrderedTo,
      page_size: pageSize,
      page_token: pageToken
    }
  })
    .then(ordersListResponse => {
      const { convertOrder } = require('@/utils/ADempiere/apiConverts/pos.js')

      return {
        nextPageToken: ordersListResponse.next_page_token,
        recordCount: ordersListResponse.record_count,
        ordersList: ordersListResponse.records.map(productPrice => {
          return convertOrder(productPrice)
        })
      }
    })
}

// Create order line from order uuid and product
export function createOrderLine({
  orderUuid,
  warehouseUuid,
  productUuid,
  chargeUuid,
  description,
  quantity,
  price,
  discountRate
}) {
  return request({
    url: `${config.pointOfSales.endpoint}/create-order-line`,
    method: 'post',
    data: {
      order_uuid: orderUuid,
      product_uuid: productUuid,
      description,
      quantity,
      price,
      discount_rate: discountRate,
      charge_uuid: chargeUuid,
      warehouse_uuid: warehouseUuid
    }
  })
    .then(createOrderLineResponse => {
      const { convertOrderLine } = require('@/utils/ADempiere/apiConverts/pos.js')

      return convertOrderLine(createOrderLineResponse)
    })
}

// updateOrderLine orders from pos uuid
export function updateOrderLine({
  orderLineUuid,
  description,
  quantity,
  price,
  discountRate
}) {
  return request({
    url: `${config.pointOfSales.endpoint}/update-order-line`,
    method: 'post',
    data: {
      // is_add_quantity: true,
      order_line_uuid: orderLineUuid,
      description,
      quantity,
      price,
      discount_rate: discountRate
    }
  })
    .then(createOrderLineResponse => {
      const { convertOrderLine } = require('@/utils/ADempiere/apiConverts/pos.js')

      return convertOrderLine(createOrderLineResponse)
    })
}

// delete Order Line
export function deleteOrderLine({
  orderLineUuid
}) {
  return request({
    url: `${config.pointOfSales.endpoint}/delete-order-line`,
    method: 'post',
    data: {
      order_line_uuid: orderLineUuid
    }
  })
    .then(response => {
      return response
    })
}

export function listOrderLines({
  orderUuid,
  pageSize,
  pageToken
}) {
  return request({
    url: `${config.pointOfSales.endpoint}/order-lines`,
    method: 'get',
    params: {
      order_uuid: orderUuid,
      page_size: pageSize,
      page_token: pageToken
    }
  })
    .then(ordersLineListResponse => {
      const { convertOrderLine } = require('@/utils/ADempiere/apiConverts/pos.js')

      return {
        nextPageToken: ordersLineListResponse.next_page_token,
        recordCount: ordersLineListResponse.record_count,
        orderLineList: ordersLineListResponse.records.map(productPrice => {
          return convertOrderLine(productPrice)
        })
      }
    })
}

export function getKeyLayout({ keyLayoutUuid }) {
  return request({
    url: `${config.pointOfSales.endpoint}/key-layout`,
    method: 'get',
    params: {
      key_layout_uuid: keyLayoutUuid
    }
  })
    .then(keyLayoutResponse => {
      const { convertKeyLayout } = require('@/utils/ADempiere/apiConverts/pos.js')

      return convertKeyLayout(keyLayoutResponse)
    })
}

// ListProductPrice
export function getProductPriceList({
  searchValue,
  businessPartnerUuid,
  validFrom,
  posUuid,
  // Query
  // criteria,
  pageSize,
  pageToken
}) {
  return request({
    url: `${config.pointOfSales.endpoint}/product-prices`,
    method: 'get',
    params: {
      pos_uuid: posUuid,
      search_value: searchValue,
      valid_from: validFrom,
      business_partner_uuid: businessPartnerUuid,
      page_size: pageSize,
      page_token: pageToken
    }
  })
    .then(productPriceListResponse => {
      const { convertProductPrice } = require('@/utils/ADempiere/apiConverts/core.js')

      return {
        nextPageToken: productPriceListResponse.next_page_token,
        recordCount: productPriceListResponse.record_count,
        productPricesList: productPriceListResponse.records.map(productPrice => {
          return convertProductPrice(productPrice)
        })
      }
    })
}

export function printOrder({
  orderUuid
}) {
  console.info(`Print order ${orderUuid}`)
}

export function generateImmediateInvoice({
  posId,
  posUuid
}) {
  console.info(`Generate imediate invoice with POS id ${posId}, and uuid ${posUuid}`)
}

export function completeOrder({
  orderUuid
}) {
  console.info(`Complete prepared order ${orderUuid}`)
}

export function reverseSalesTransaction({
  orderUuid
}) {
  console.info(`Reverse sales transaction ${orderUuid}`)
}

export function withdrawal({
  posId,
  posUuid
}) {
  console.info(`Withdrall cash with POS id ${posId}, and uuid ${posUuid}`)
}

export function createNewReturnOrder({
  orderUuid
}) {
  console.info(`New Customer Return Order ${orderUuid}`)
}

export function cashClosing({
  posId,
  posUuid
}) {
  console.info(`Cash closing with POS id ${posId}, and uuid ${posUuid}`)
}

// Create Payment

export function createPayment({
  posUuid,
  orderUuid,
  invoiceUuid,
  bankUuid,
  referenceNo,
  description,
  amount,
  paymentDate,
  tenderTypeCode,
  currencyUuid
}) {
  return request({
    url: `${config.pointOfSales.endpoint}/create-payment`,
    method: 'post',
    data: {
      pos_uuid: posUuid,
      order_uuid: orderUuid,
      invoice_uuid: invoiceUuid,
      bank_uuid: bankUuid,
      reference_no: referenceNo,
      description: description,
      amount: amount,
      payment_date: paymentDate,
      tender_type_code: tenderTypeCode,
      currency_uuid: currencyUuid
    }
  })
    .then(createPaymentResponse => {
      return createPaymentResponse
    })
}

// Update Payment

export function updatePayment({
  paymentUuid,
  bankUuid,
  referenceNo,
  description,
  amount,
  paymentDate,
  tenderTypeCode
}) {
  return request({
    url: `${config.pointOfSales.endpoint}/update-payment`,
    method: 'post',
    data: {
      payment_uuid: paymentUuid,
      bank_uuid: bankUuid,
      reference_no: referenceNo,
      description: description,
      amount: amount,
      payment_date: paymentDate,
      tender_type_code: tenderTypeCode
    }
  })
    .then(updatePaymentResponse => {
      return updatePaymentResponse
    })
}

// Delete Payment

export function deletePayment({
  paymentUuid
}) {
  return request({
    url: `${config.pointOfSales.endpoint}/delete-payment`,
    method: 'post',
    data: {
      payment_uuid: paymentUuid
    }
  })
    .then(deletePaymentResponse => {
      return deletePaymentResponse
    })
}

// List Payments

export function getPaymentsList({
  posUuid,
  orderUuid
}) {
  return request({
    url: `${config.pointOfSales.endpoint}/payments`,
    method: 'get',
    params: {
      pos_uuid: posUuid,
      order_uuid: orderUuid
    }
  })
    .then(listPaymentsResponse => {
      const { paymentsMethod } = require('@/utils/ADempiere/apiConverts/pos.js')
      return {
        nextPageToken: listPaymentsResponse.next_page_token,
        recordCount: listPaymentsResponse.record_count,
        listPayments: listPaymentsResponse.records.map(payments => {
          return paymentsMethod(payments)
        })
      }
    })
}

/**
 * Process Order
 * This request allows process a draft order with payments
 *
 * req.query.token - user token
 * Body:
 * req.body.pos_uuid - POS UUID reference
 * req.body.order_uuid - Order UUID reference
 * req.body.create_payments - Optional create payments (if is true then hope payments array)
 * req.body.payments
 * [
 * invoice_uuid - Invoice UUID reference
 * bank_uuid - Bank UUID reference
 * reference_no - Reference no
 * description - Description for Payment
 * amount - Payment Amount
 * tender_type_code - Tender Type
 * payment_date - Payment Date (default now)
 * currency_uuid - Currency UUID reference
 * ]
 */
export function processOrder({
  posUuid,
  orderUuid,
  createPayments,
  payments
}) {
  if (!isEmptyValue(payments)) {
    payments = payments.map(parameter => {
      return {
        invoice_uuid: parameter.invoiceUuid,
        bank_uuid: parameter.bankUuid,
        reference_no: parameter.referenceNo,
        description: parameter.description,
        amount: parameter.amount,
        tender_type_code: parameter.tenderTypeCode,
        payment_ate: parameter.paymentDate,
        currency_uid: parameter.currencyUuid
      }
    })
  }
  return request({
    url: `${config.pointOfSales.endpoint}/process-order`,
    method: 'post',
    data: {
      pos_uuid: posUuid,
      order_uuid: orderUuid,
      create_payments: createPayments,
      payments: payments
    }
  })
    .then(processOrderResponse => {
      return processOrderResponse
    })
}

/**
 * Validate Ping
 * @param {string} posUuidd - POS UUID reference
 * @param {string} pin - User PIN
 * @returns {string}
 */
export function validatePin({
  posUuid,
  pin
}) {
  return request({
    url: `${config.pointOfSales.endpoint}/validate-pin`,
    method: 'post',
    data: {
      pos_uuid: posUuid,
      pin: pin
    }
  })
    .then(pinResponse => {
      return pinResponse
    })
}

/**
 * list Warehouse
 * @param {string} posUuidd - POS UUID reference
 */
export function listWarehouse({
  posUuid
}) {
  return request({
    url: `${config.pointOfSales.endpoint}/available-warehouses`,
    method: 'get',
    params: {
      pos_uuid: posUuid
    }
  })
    .then(listWarehouseResponse => {
      return listWarehouseResponse
    })
}

/**
 * List Prices
 * @param {string} posUuidd - POS UUID reference
 */
export function listPrices({
  posUuid
}) {
  return request({
    url: `${config.pointOfSales.endpoint}/available-price-list`,
    method: 'get',
    params: {
      pos_uuid: posUuid
    }
  })
    .then(listPricesResponse => {
      return listPricesResponse
    })
}

/**
 * Currencies
 * @param {string} posUuidd - POS UUID reference
 */
export function listCurrencies({
  posUuid
}) {
  return request({
    url: `${config.pointOfSales.endpoint}/available-currencies`,
    method: 'get',
    params: {
      pos_uuid: posUuid
    }
  })
    .then(listCurrencies => {
      return listCurrencies
    })
}

/**
 * Tender Type
 * @param {string} posUuidd - POS UUID reference
 */
export function listTenderType({
  posUuid
}) {
  return request({
    url: `${config.pointOfSales.endpoint}/available-tender-types`,
    method: 'get',
    params: {
      pos_uuid: posUuid
    }
  })
    .then(listTenderType => {
      return listTenderType
    })
}
