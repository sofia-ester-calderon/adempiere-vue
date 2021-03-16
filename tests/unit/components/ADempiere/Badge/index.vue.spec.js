import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Badge from "@/components/ADempiere/Badge/index.vue";
import i18n from "../../../../../src/lang/index.js";
import ElementUI from "element-ui";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(ElementUI);

let store;
let getters;
beforeEach(() => {
  getters = {
    getNotificationProcess: () => []
  };
  store = new Vuex.Store({ getters });
});

describe("given i am testing", () => {
  it("should display the test", () => {
    console.log("my first test");

    const wrapper = shallowMount(Badge, {
      store,
      localVue,
      i18n,
      stubs: ["svg-icon"]
    });
    const text = wrapper.find("p");
    console.log("TEXT", text);
    expect(text.text()).toBe("FIRST TEST");
  });
});
