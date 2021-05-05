import { convertReportOutput } from "@/utils/ADempiere/apiConverts/report";
import reportOutput from "./objects/fromApi/reportOutput.json";
import convertedReportOutput from "./objects/converted/reportOutput.json";

describe("reportOutput", () => {
  it("should return a converted reportOutput object", () => {
    const actualReportOutput = convertReportOutput(reportOutput);
    expect(actualReportOutput).toEqual(convertedReportOutput);
  });
});
