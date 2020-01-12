define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/vivek_portfolio/UI/PhoneScreen/PhoneScreen', 'packages/vivek_portfolio/UI/LaptopScreens/LargeScreen', 'packages/flutter/material'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__vivek_portfolio__UI__PhoneScreen__PhoneScreen, packages__vivek_portfolio__UI__LaptopScreens__LargeScreen, packages__flutter__material) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const safe_area = packages__flutter__src__widgets__actions.src__widgets__safe_area;
  const binding = packages__flutter__src__widgets__actions.src__widgets__binding;
  const PhoneScreen = packages__vivek_portfolio__UI__PhoneScreen__PhoneScreen.UI__PhoneScreen__PhoneScreen;
  const LargeScreen = packages__vivek_portfolio__UI__LaptopScreens__LargeScreen.UI__LaptopScreens__LargeScreen;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const colors = packages__flutter__material.src__material__colors;
  const app = packages__flutter__material.src__material__app;
  const main = Object.create(dart.library);
  let VoidTodouble = () => (VoidTodouble = dart.constFn(dart.fnType(core.double, [])))();
  let VoidToWidget = () => (VoidToWidget = dart.constFn(dart.fnType(framework.Widget, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/main.dart"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/main.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/main.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/main.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 9,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/main.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 3,
        [_Location_line]: 9,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "debugShowCheckedModeBanner",
        [_Location_column]: 3,
        [_Location_line]: 10,
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
        [_Location_column]: 23,
        [_Location_line]: 8,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/main.dart"
      });
    }
  });
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C0;
  let C2;
  let C5;
  let C4;
  let C3;
  let C8;
  let C9;
  let C7;
  let C6;
  main.Portfolio = class Portfolio extends framework.StatelessWidget {
    build(context) {
      let totalWidth = media_query.MediaQuery.of(context).size.width;
      function returnFontSizeForName() {
        if (dart.notNull(totalWidth) > 1200) {
          return 80.0;
        } else if (dart.notNull(totalWidth) < 1200 && dart.notNull(totalWidth) > 768) {
          return 50.0;
        } else if (dart.notNull(totalWidth) < 768) {
          return 30.0;
        } else {
          return 0.0;
        }
      }
      dart.fn(returnFontSizeForName, VoidTodouble());
      function returnMarginFromLeft() {
        if (dart.notNull(totalWidth) > 1200) {
          return 300.0;
        } else if (dart.notNull(totalWidth) < 1200 && dart.notNull(totalWidth) > 768) {
          return 150.0;
        } else if (dart.notNull(totalWidth) < 768) {
          return 50.0;
        } else {
          return 0.0;
        }
      }
      dart.fn(returnMarginFromLeft, VoidTodouble());
      function returnWidget() {
        if (dart.notNull(totalWidth) <= 800) {
          return new PhoneScreen.PhoneScreen.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0});
        } else {
          return new LargeScreen.LargeScreen.new({$creationLocationd_0dea112b090073317d4: C2 || CT.C2});
        }
      }
      dart.fn(returnWidget, VoidToWidget());
      return new scaffold.Scaffold.new({backgroundColor: colors.Colors.black, body: new safe_area.SafeArea.new({child: returnWidget(), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), $creationLocationd_0dea112b090073317d4: C6 || CT.C6});
    }
  };
  (main.Portfolio.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.Portfolio.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.Portfolio.prototype;
  dart.addTypeTests(main.Portfolio);
  dart.setMethodSignature(main.Portfolio, () => ({
    __proto__: dart.getMethods(main.Portfolio.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.Portfolio, "package:vivek_portfolio/main.dart");
  let C10;
  let C13;
  let C14;
  let C12;
  let C11;
  main.main = function main$() {
    return binding.runApp(new app.MaterialApp.new({home: new main.Portfolio.new({$creationLocationd_0dea112b090073317d4: C10 || CT.C10}), debugShowCheckedModeBanner: false, $creationLocationd_0dea112b090073317d4: C11 || CT.C11}));
  };
  dart.trackLibraries("packages/vivek_portfolio/main", {
    "package:vivek_portfolio/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAiB4B;AAEjB,uBAAwB,AAAY,AAAK,0BAAd,OAAO;AAGzC,eAAO;AACL,YAAe,aAAX,UAAU,IAAG;AAEf,gBAAO;cACF,KAAgB,aAAX,UAAU,IAAG,QAAqB,aAAX,UAAU,IAAG;AAE9C,gBAAO;cACF,KAAe,aAAX,UAAU,IAAG;AAEtB,gBAAO;;AAEP,gBAAO;;;;AAMX,eAAO;AACL,YAAe,aAAX,UAAU,IAAG;AAEf,gBAAO;cACF,KAAgB,aAAX,UAAU,IAAG,QAAqB,aAAX,UAAU,IAAG;AAE9C,gBAAO;cACF,KAAe,aAAX,UAAU,IAAG;AAEtB,gBAAO;;AAEP,gBAAO;;;;AAMX,eAAO;AACL,YAAe,aAAX,UAAU,KAAI;AAEhB,gBAAO;;AAEP,gBAAO;;;;AAMX,YAAO,6CACmB,2BAClB,mCACG,AAAY,YAAA;IAGzB;;;;;;EACF;;;;;;;;;;;;;AAnEe,0BAAO,+BACd,6GACsB;EAC5B","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
