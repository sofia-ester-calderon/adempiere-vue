const { convertFieldGroup, convertField } = require("@/utils/ADempiere/apiConverts/field");
import fieldGroup from "./objects/fieldGroup.json";
import convertedFieldGroup from "./objects/fieldGroup_converted.json";
import field from "./objects/field.json";
import convertedField from "./objects/field_converted.json";

describe("field group", () => {
  it("should return a converted field group object", () => {
    const actualFieldGroup = convertFieldGroup(fieldGroup);
    expect(actualFieldGroup).toEqual(convertedFieldGroup);
  });
});

describe("field", () => {
  it("should return a converted field object", () => {
    const actualField = convertField(field);
    expect(actualField).toEqual(convertedField);
  });
});
