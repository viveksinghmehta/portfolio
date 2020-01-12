define(['dart_sdk', 'packages/vivek_portfolio/ResponsiveLogic/Responsive', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material'], function(dart_sdk, packages__vivek_portfolio__ResponsiveLogic__Responsive, packages__flutter__src__widgets__actions, packages__flutter__src__rendering__animated_size, packages__flutter__src__painting___network_image_web, packages__flutter__material) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const Responsive = packages__vivek_portfolio__ResponsiveLogic__Responsive.ResponsiveLogic__Responsive;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const colors = packages__flutter__material.src__material__colors;
  const LargeScreen = Object.create(dart.library);
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/UI/LaptopScreens/LargeScreen.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/UI/LaptopScreens/LargeScreen.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/UI/LaptopScreens/LargeScreen.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 19,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/UI/LaptopScreens/LargeScreen.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/UI/LaptopScreens/LargeScreen.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 19,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/UI/LaptopScreens/LargeScreen.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25, C26 || CT.C26], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/UI/LaptopScreens/LargeScreen.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/UI/LaptopScreens/LargeScreen.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/UI/LaptopScreens/LargeScreen.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 19,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36, C37 || CT.C37], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/UI/LaptopScreens/LargeScreen.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40, C41 || CT.C41], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C39 || CT.C39,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 102,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/UI/LaptopScreens/LargeScreen.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 100,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/UI/LaptopScreens/LargeScreen.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 19,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47, C48 || CT.C48], widget_inspector._Location);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C46 || CT.C46,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/UI/LaptopScreens/LargeScreen.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 15,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51, C52 || CT.C52], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C50 || CT.C50,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/UI/LaptopScreens/LargeScreen.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 125,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/UI/LaptopScreens/LargeScreen.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 15,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59, C60 || CT.C60], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 117,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/UI/LaptopScreens/LargeScreen.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/UI/LaptopScreens/LargeScreen.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.constList([C66 || CT.C66, C67 || CT.C67], widget_inspector._Location);
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C65 || CT.C65,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 161,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/UI/LaptopScreens/LargeScreen.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.constList([C70 || CT.C70, C71 || CT.C71, C72 || CT.C72], widget_inspector._Location);
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C69 || CT.C69,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 141,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/UI/LaptopScreens/LargeScreen.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 13,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.constList([C75 || CT.C75, C76 || CT.C76], widget_inspector._Location);
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C74 || CT.C74,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 139,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/UI/LaptopScreens/LargeScreen.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.constList([C79 || CT.C79, C80 || CT.C80], widget_inspector._Location);
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C78 || CT.C78,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 137,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/UI/LaptopScreens/LargeScreen.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/UI/LaptopScreens/LargeScreen.dart"
      });
    }
  });
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C1;
  let C0;
  let C6;
  let C7;
  let C5;
  let C4;
  let C10;
  let C9;
  let C8;
  let C13;
  let C14;
  let C12;
  let C11;
  let C17;
  let C18;
  let C16;
  let C15;
  let C21;
  let C22;
  let C20;
  let C19;
  let C25;
  let C26;
  let C24;
  let C23;
  let C29;
  let C30;
  let C28;
  let C27;
  let C33;
  let C32;
  let C31;
  let C36;
  let C37;
  let C35;
  let C34;
  let C40;
  let C41;
  let C39;
  let C38;
  let C44;
  let C43;
  let C42;
  let C47;
  let C48;
  let C46;
  let C45;
  let C51;
  let C52;
  let C50;
  let C49;
  let C55;
  let C56;
  let C54;
  let C53;
  let C59;
  let C60;
  let C58;
  let C57;
  let C63;
  let C62;
  let C61;
  let C66;
  let C67;
  let C65;
  let C64;
  let C70;
  let C71;
  let C72;
  let C69;
  let C68;
  let C75;
  let C76;
  let C74;
  let C73;
  let C79;
  let C80;
  let C78;
  let C77;
  let C83;
  let C82;
  let C81;
  LargeScreen.LargeScreen = class LargeScreen extends framework.StatelessWidget {
    build(context) {
      new Responsive.ResponsiveWidget.new().init(context);
      return new basic.Stack.new({children: JSArrayOfWidget().of([new scroll_view.ListView.new({children: JSArrayOfWidget().of([new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new container.Container.new({margin: new edge_insets.EdgeInsets.fromLTRB(dart.notNull(Responsive.ResponsiveWidget.screenWidth) / 5, dart.notNull(Responsive.ResponsiveWidget.screenHeight) / 5, dart.notNull(Responsive.ResponsiveWidget.screenHeight) / 5, 0.0), child: new basic.Row.new({children: JSArrayOfWidget().of([new text.Text.new("Hello", {style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold, fontSize: dart.notNull(Responsive.ResponsiveWidget.screenHeight) / 7, color: colors.Colors.white, fontFamily: "ProductSans", letterSpacing: 4.0}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new text.Text.new(".", {style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold, fontSize: dart.notNull(Responsive.ResponsiveWidget.screenHeight) / 7, color: colors.Colors.deepOrangeAccent, fontFamily: "ProductSans", letterSpacing: 4.0}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4})]), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), new container.Container.new({margin: new edge_insets.EdgeInsets.fromLTRB(dart.notNull(Responsive.ResponsiveWidget.screenWidth) / 5, 0.0, 0.0, 0.0), child: new text.Text.new("I am", {style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold, fontSize: dart.notNull(Responsive.ResponsiveWidget.screenHeight) / 10, color: colors.Colors.white, fontFamily: "SourceCodePro", letterSpacing: 4.0}), $creationLocationd_0dea112b090073317d4: C15 || CT.C15}), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), new container.Container.new({margin: new edge_insets.EdgeInsets.fromLTRB(dart.notNull(Responsive.ResponsiveWidget.screenWidth) / 5, 0.0, dart.notNull(Responsive.ResponsiveWidget.screenWidth) / 20, 10.0), child: new basic.Row.new({children: JSArrayOfWidget().of([new text.Text.new("Vivek Singh Mehta", {style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold, fontSize: dart.notNull(Responsive.ResponsiveWidget.screenHeight) / 10, color: colors.Colors.white, fontFamily: "PTMono", letterSpacing: 4.0}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), new text.Text.new(".", {style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold, fontSize: dart.notNull(Responsive.ResponsiveWidget.screenHeight) / 15, color: colors.Colors.deepOrangeAccent, fontFamily: "ProductSans", letterSpacing: 4.0}), $creationLocationd_0dea112b090073317d4: C27 || CT.C27})]), $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), new container.Container.new({margin: new edge_insets.EdgeInsets.fromLTRB(dart.notNull(Responsive.ResponsiveWidget.screenWidth) / 5, 0.0, 0.0, 0.0), child: new basic.Row.new({children: JSArrayOfWidget().of([new text.Text.new("Flutter & iOS Developer.", {style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold, fontSize: 30.0, color: colors.Colors.deepOrangeAccent, fontFamily: "PTMono", letterSpacing: 3.0}), $creationLocationd_0dea112b090073317d4: C38 || CT.C38})]), $creationLocationd_0dea112b090073317d4: C42 || CT.C42}), $creationLocationd_0dea112b090073317d4: C45 || CT.C45})]), $creationLocationd_0dea112b090073317d4: C49 || CT.C49}), new container.Container.new({margin: new edge_insets.EdgeInsets.fromLTRB(dart.notNull(Responsive.ResponsiveWidget.screenWidth) / 5, dart.notNull(Responsive.ResponsiveWidget.screenHeight) / 2, dart.notNull(Responsive.ResponsiveWidget.screenWidth) / 5, dart.notNull(Responsive.ResponsiveWidget.screenHeight) / 2), child: new text.Text.new("A native iOS Developer, with more than 2 years of experiance in the industry, that is on it's way to learn Flutter", {style: new text_style.TextStyle.new({fontFamily: "PTMono", color: colors.Colors.deepOrangeAccent, fontSize: 30.0}), $creationLocationd_0dea112b090073317d4: C53 || CT.C53}), $creationLocationd_0dea112b090073317d4: C57 || CT.C57})]), $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.fromLTRB(0.0, 0.0, 0.0, dart.notNull(Responsive.ResponsiveWidget.screenHeight) / 40), child: new basic.Align.new({alignment: alignment.Alignment.bottomCenter, child: new container.Container.new({padding: new edge_insets.EdgeInsets.fromLTRB(dart.notNull(Responsive.ResponsiveWidget.screenWidth) / 80, dart.notNull(Responsive.ResponsiveWidget.screenHeight) / 80, dart.notNull(Responsive.ResponsiveWidget.screenWidth) / 80, dart.notNull(Responsive.ResponsiveWidget.screenHeight) / 80), decoration: new box_decoration.BoxDecoration.new({color: colors.Colors.black, borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(dart.notNull(Responsive.ResponsiveWidget.screenHeight) / 40)), border: box_border.Border.all({color: colors.Colors.deepOrangeAccent, width: 1.0, style: borders.BorderStyle.solid})}), child: new text.Text.new("Created with ❤ in Flutter", {style: new text_style.TextStyle.new({fontSize: 20.0, color: colors.Colors.white, fontFamily: "SourceCodePro"}), $creationLocationd_0dea112b090073317d4: C64 || CT.C64}), $creationLocationd_0dea112b090073317d4: C68 || CT.C68}), $creationLocationd_0dea112b090073317d4: C73 || CT.C73}), $creationLocationd_0dea112b090073317d4: C77 || CT.C77})]), $creationLocationd_0dea112b090073317d4: C81 || CT.C81});
    }
  };
  (LargeScreen.LargeScreen.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    LargeScreen.LargeScreen.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = LargeScreen.LargeScreen.prototype;
  dart.addTypeTests(LargeScreen.LargeScreen);
  dart.setMethodSignature(LargeScreen.LargeScreen, () => ({
    __proto__: dart.getMethods(LargeScreen.LargeScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(LargeScreen.LargeScreen, "package:vivek_portfolio/UI/LaptopScreens/LargeScreen.dart");
  dart.trackLibraries("packages/vivek_portfolio/UI/LaptopScreens/LargeScreen", {
    "package:vivek_portfolio/UI/LaptopScreens/LargeScreen.dart": LargeScreen
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["LargeScreen.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAc4B;AAGQ,MAAhC,AAAmB,2CAAK,OAAO;AAE/B,YAAO,gCACa,sBAEhB,wCACoB,sBAEhB,0CACyC,yCACrB,sBAChB,qCAEqB,oCAAsC,aAAZ,2CAAc,GAAiC,aAAb,4CAAe,GAAiC,aAAb,4CAAe,GAAG,aAC7H,6BACa,sBAChB,kBACE,iBACO,0CACoB,8BACiB,aAAb,4CAAe,UAC5B,iCACF,8BACG,8DAGrB,kBACE,aACO,0CACoB,8BACiB,aAAb,4CAAe,UAC5B,4CACF,8BACG,gLAM3B,qCAEqB,oCAAsC,aAAZ,2CAAc,GAAG,KAAG,KAAG,aAC7D,kBACL,gBACO,0CACkB,8BACiB,aAAb,4CAAe,WAC5B,iCACF,gCACG,yHAIrB,qCACqB,oCAAsC,aAAZ,2CAAc,GAAG,KAAgC,aAAZ,2CAAc,IAAI,cAC7F,6BACa,sBAChB,kBACE,6BACO,0CACoB,8BACiB,aAAb,4CAAe,WAC5B,iCACF,yBACG,gEAGrB,kBACE,aACO,0CACkB,8BACiB,aAAb,4CAAe,WAC5B,4CACF,8BACG,oLAMzB,qCACqB,oCAAsC,aAAZ,2CAAc,GAAG,KAAG,KAAG,aAC7D,6BACa,sBAChB,kBACE,oCACO,0CACkB,8BACb,aACI,4CACF,yBACG,+OAQ7B,qCAEqB,oCACc,aAAZ,2CAAc,GACD,aAAb,4CAAe,GACH,aAAZ,2CAAc,GACD,aAAb,4CAAe,WAE7B,kBACL,8HACO,0CACO,iBACE,0CACJ,qLAOpB,gCACsB,oCAAS,KAAG,KAAG,KAAiC,aAAb,4CAAe,YAC/D,gCACgB,yCACd,sCACe,oCACW,aAAZ,2CAAc,IACD,aAAb,4CAAe,IACH,aAAZ,2CAAc,IACD,aAAb,4CAAe,iBAEtB,6CACI,mCACa,mCAChB,uBACyB,aAAb,4CAAe,cAGvB,8BACC,uCACP,YACY,sCAGhB,kBACL,qCACO,wCACO,aACI,iCACF;IAQ9B;;;;;;EACF","file":"LargeScreen.ddc.js"}');
  // Exports:
  return {
    UI__LaptopScreens__LargeScreen: LargeScreen
  };
});

//# sourceMappingURL=LargeScreen.ddc.js.map
