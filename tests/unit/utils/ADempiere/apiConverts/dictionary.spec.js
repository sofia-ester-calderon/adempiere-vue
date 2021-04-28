import {
  convertBrowser,
  convertProcess,
  convertReportExportType,
  convertTab,
  convertWindow
} from "../../../../../src/utils/ADempiere/apiConverts/dictionary";
import process from "./objects/process.json";
import convertedProcess from "./objects/process_converted.json";
import processWithUndefined from "./objects/processWithUndefined.json";
import convertedProcessWithUndefined from "./objects/processWithUndefined_converted.json";
import reportExportType from "./objects/reportExportType.json";
import convertedReportExportType from "./objects/reportExportType_converted.json";
import tab from "./objects/tab.json";
import convertedTab from "./objects/tab_converted.json";
import windowObj from "./objects/window.json";
import convertedWindow from "./objects/window_converted.json";
import browser from "./objects/browser.json";
import convertedBrowser from "./objects/browser_converted.json";

describe("process", () => {
  it("should convert a process with all fields defined", () => {
    const actualConvertedProcess = convertProcess(process);
    expect(actualConvertedProcess).toEqual(convertedProcess);
  });

  it("should convert a process with some fields undefined", () => {
    const actualConvertedProcess = convertProcess(processWithUndefined);
    expect(actualConvertedProcess).toEqual(convertedProcessWithUndefined);
  });
});

describe("report export type", () => {
  it("should return a converted report export type object", () => {
    const actualExportType = convertReportExportType(reportExportType);
    expect(actualExportType).toEqual(convertedReportExportType);
  });
});

describe("tab", () => {
  it("should return a converted tab object", () => {
    const actualTab = convertTab(tab);
    expect(actualTab).toEqual(convertedTab);
  });
});

describe("window", () => {
  it("should return a converted window object", () => {
    const actualWindow = convertWindow(windowObj);
    expect(actualWindow).toEqual(convertedWindow);
  });
});

describe("browser", () => {
  it("should return a converted browser object", () => {
    const actualBrowser = convertBrowser(browser);
    expect(actualBrowser).toEqual(convertedBrowser);
  });
});
