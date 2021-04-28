import {
  convertContextInfo,
  convertOrganization,
  convertLanguage,
  convertCountry,
  convertBusinessPartner,
  convertConversionRate,
  convertBankAccount,
  convertDocumentType,
  convertDocumentStatus,
  convertPriceList,
  convertTaxRate,
  convertProduct,
  convertProductPrice
} from "@/utils/ADempiere/apiConverts/core.js";
import contextInfo from "./objects/contextInfo.json";
import convertedContextInfo from "./objects/contextInfo_converted.json";
import contextInfoWithoutMessage from "./objects/contextInfoWithoutMessage.json";
import convertedContextInfoWithoutMessage from "./objects/contextInfoWithoutMessage_converted.json";
import organization from "./objects/organization.json";
import convertedOrganization from "./objects/organization_converted.json";
import language from "./objects/language.json";
import convertedLanguage from "./objects/language_converted.json";
import country from "./objects/country.json";
import convertedCountry from "./objects/country_converted.json";
import countryWithNoCurrency from "./objects/countryNoCurrency.json";
import convertedCountryWithNoCurrency from "./objects/countryNoCurrency_converted.json";
import businessPartner from "./objects/businessPartner.json";
import convertedBusinessPartner from "./objects/businessPartner_converted.json";
import conversionRate from "./objects/conversionRate.json";
import convertedConversionRate from "./objects/conversionRate_converted.json";
import conversionRateNoCurrency from "./objects/conversionRateNoCurrency.json";
import convertedConversionRateNoCurrency from "./objects/conversionRateNoCurrency_converted.json";
import salesRepresentative from "./objects/salesRepresentative.json";
import convertedSalesRepresentative from "./objects/salesRepresentative_converted.json";
import bankAccount from "./objects/bankAccount.json";
import convertedBankAccount from "./objects/bankAccount_converted.json";
import documentType from "./objects/documentType.json";
import convertedDocumentType from "./objects/documentType_converted.json";
import documentStatus from "./objects/documentStatus.json";
import convertedDocumentStatus from "./objects/documentStatus_converted.json";
import priceList from "./objects/priceList.json";
import convertedPriceList from "./objects/priceList_converted.json";
import taxRate from "./objects/taxRate.json";
import convertedTaxRate from "./objects/taxRate_converted.json";
import product from "./objects/product.json";
import convertedProduct from "./objects/product_converted.json";
import productPrice from "./objects/productPrice.json";
import convertedProductPrice from "./objects/productPrice_converted.json";

describe("context info", () => {
  it("should return a converted context info", () => {
    const actualContextInfo = convertContextInfo(contextInfo);
    expect(actualContextInfo).toEqual(convertedContextInfo);
  });
  it("should return empty object for undefined context info", () => {
    const actualContextInfo = convertContextInfo(null);
    expect(actualContextInfo).toEqual({ messageText: {} });
  });
  it("should return a converted context info with an empty message", () => {
    const actualContextInfo = convertContextInfo(contextInfoWithoutMessage);
    expect(actualContextInfo).toEqual(convertedContextInfoWithoutMessage);
  });
});

describe("organization", () => {
  it("should return a converted organization object", () => {
    const actualOrganization = convertOrganization(organization);
    expect(actualOrganization).toEqual(convertedOrganization);
  });
});

describe("language", () => {
  it("should return a converted language object", () => {
    const actualLanguage = convertLanguage(language);
    expect(actualLanguage).toEqual(convertedLanguage);
  });
});

describe("country", () => {
  it("should return a converted country object with currency", () => {
    const actualCountry = convertCountry(country);
    expect(actualCountry).toEqual(convertedCountry);
  });
  it("should return a converted country object without currency", () => {
    const actualCountry = convertCountry(countryWithNoCurrency);
    expect(actualCountry).toEqual(convertedCountryWithNoCurrency);
  });
});

describe("business partner", () => {
  it("should return a converted business partner object", () => {
    const actualBusinessPartner = convertBusinessPartner(businessPartner);
    expect(actualBusinessPartner).toEqual(convertedBusinessPartner);
  });
});

describe("conversion rate", () => {
  it("should return a converted conversion rate object with currencies", () => {
    const actualConversionRate = convertConversionRate(conversionRate);
    expect(actualConversionRate).toEqual(convertedConversionRate);
  });

  it("should return a converted conversion rate object without currencies", () => {
    const actualConversionRate = convertConversionRate(
      conversionRateNoCurrency
    );
    expect(actualConversionRate).toEqual(convertedConversionRateNoCurrency);
  });
});

describe("sales representative", () => {
  it("should return a converted sales representative object", () => {
    const actualSalesRep = convertBusinessPartner(salesRepresentative);
    expect(actualSalesRep).toEqual(convertedSalesRepresentative);
  });
});

describe("bank account", () => {
  it("should return a converted bank account object", () => {
    const actualBankAccount = convertBankAccount(bankAccount);
    expect(actualBankAccount).toEqual(convertedBankAccount);
  });
  it("should return undefined", () => {
    const actualBankAccount = convertBankAccount(null);
    expect(actualBankAccount).toBeUndefined();
  });
});

describe("document type", () => {
  it("should return a converted document type object", () => {
    const actualDocumentType = convertDocumentType(documentType);
    expect(actualDocumentType).toEqual(convertedDocumentType);
  });
  it("should return undefined", () => {
    const actualDocumentType = convertBankAccount(null);
    expect(actualDocumentType).toBeUndefined();
  });
});

describe("document status", () => {
  it("should return a converted document status object", () => {
    const actualDocumentStatus = convertDocumentStatus(documentStatus);
    expect(actualDocumentStatus).toEqual(convertedDocumentStatus);
  });
});

describe("price list", () => {
  it("should return a converted price list object", () => {
    const actualPriceList = convertPriceList(priceList);
    expect(actualPriceList).toEqual(convertedPriceList);
  });
});

describe("tax rate", () => {
  it("should return a converted tax rate object", () => {
    const actualTaxRate = convertTaxRate(taxRate);
    expect(actualTaxRate).toEqual(convertedTaxRate);
  });
});

describe("product", () => {
  it("should return a converted product object", () => {
    const actualProduct = convertProduct(product);
    expect(actualProduct).toEqual(convertedProduct);
  });
});

describe("product price", () => {
  it("should return a converted product price object", () => {
    const actualProductPrice = convertProductPrice(productPrice);
    expect(actualProductPrice).toEqual(convertedProductPrice);
  });
});
