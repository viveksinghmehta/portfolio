define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter__material) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const colors = packages__flutter__material.src__material__colors;
  const Hello = Object.create(dart.library);
  let VoidTodouble = () => (VoidTodouble = dart.constFn(dart.fnType(core.double, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 13,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 79,
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
        [_Location_column]: 11,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/UI/Hello.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 13,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 89,
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
        [_Location_column]: 11,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/UI/Hello.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 76,
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
        [_Location_column]: 14,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/UI/Hello.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 7,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 75,
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
        [_Location_column]: 12,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/UI/Hello.dart"
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
  Hello.HelloWidget = class HelloWidget extends framework.StatelessWidget {
    build(context) {
      let totalWidth = media_query.MediaQuery.of(context).size.width;
      function returnFontSizeForHello() {
        if (dart.notNull(totalWidth) > 1200) {
          return 150.0;
        } else if (dart.notNull(totalWidth) < 1200 && dart.notNull(totalWidth) > 768) {
          return 100.0;
        } else if (dart.notNull(totalWidth) < 768) {
          return 70.0;
        } else {
          return 0.0;
        }
      }
      dart.fn(returnFontSizeForHello, VoidTodouble());
      function returnMarginFromTop() {
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
      dart.fn(returnMarginFromTop, VoidTodouble());
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
      return new container.Container.new({margin: new edge_insets.EdgeInsets.fromLTRB(returnMarginFromLeft(), returnMarginFromTop(), 0.0, 0.0), child: new basic.Row.new({children: JSArrayOfWidget().of([new text.Text.new("Hello", {style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold, fontSize: returnFontSizeForHello(), color: colors.Colors.white, fontFamily: "ProductSans", letterSpacing: 4.0}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new text.Text.new(".", {style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold, fontSize: returnFontSizeForHello(), color: colors.Colors.deepOrangeAccent, fontFamily: "ProductSans", letterSpacing: 4.0}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4})]), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11});
    }
  };
  (Hello.HelloWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    Hello.HelloWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = Hello.HelloWidget.prototype;
  dart.addTypeTests(Hello.HelloWidget);
  dart.setMethodSignature(Hello.HelloWidget, () => ({
    __proto__: dart.getMethods(Hello.HelloWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(Hello.HelloWidget, "package:vivek_portfolio/UI/Hello.dart");
  dart.trackLibraries("packages/vivek_portfolio/UI/Hello", {
    "package:vivek_portfolio/UI/Hello.dart": Hello
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["Hello.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAmB4B;AAEjB,uBAAwB,AAAY,AAAK,0BAAd,OAAO;AAEzC,eAAO;AACL,YAAe,aAAX,UAAU,IAAG;AAEf,gBAAO;cACF,KAAgB,aAAX,UAAU,IAAG,QAAqB,aAAX,UAAU,IAAG;AAE9C,gBAAO;cACF,KAAe,aAAX,UAAU,IAAG;AAEtB,gBAAO;;AAEP,gBAAO;;;;AAKX,eAAO;AACL,YAAe,aAAX,UAAU,IAAG;AAEf,gBAAO;cACF,KAAgB,aAAX,UAAU,IAAG,QAAqB,aAAX,UAAU,IAAG;AAE9C,gBAAO;cACF,KAAe,aAAX,UAAU,IAAG;AAEtB,gBAAO;;AAEP,gBAAO;;;;AAMX,eAAO;AACL,YAAe,aAAX,UAAU,IAAG;AAEf,gBAAO;cACF,KAAgB,aAAX,UAAU,IAAG,QAAqB,aAAX,UAAU,IAAG;AAE9C,gBAAO;cACF,KAAe,aAAX,UAAU,IAAG;AAEtB,gBAAO;;AAEP,gBAAO;;;;AAKX,YAAO,sCACc,oCAAS,AAAoB,oBAAA,IAAI,AAAmB,mBAAA,IAAI,KAAG,aACvE,6BACa,sBAChB,kBACE,iBACO,0CACoB,8BACb,AAAsB,sBAAA,WAClB,iCACF,8BACG,8DAGrB,kBACE,aACO,0CACoB,8BACb,AAAsB,sBAAA,WAClB,4CACF,8BACG;IAmB7B;;;QAjGM;;AACD,qDAAW,GAAG;;EAAC","file":"Hello.ddc.js"}');
  // Exports:
  return {
    UI__Hello: Hello
  };
});

//# sourceMappingURL=Hello.ddc.js.map
