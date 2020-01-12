define(['dart_sdk', 'packages/vivek_portfolio/ResponsiveLogic/Responsive', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__vivek_portfolio__ResponsiveLogic__Responsive, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const Responsive = packages__vivek_portfolio__ResponsiveLogic__Responsive.ResponsiveLogic__Responsive;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const CreateByWidget = Object.create(dart.library);
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
        [_Location_column]: 12,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/UI/CreateByWidget.dart"
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
  CreateByWidget.CreatedByWidget = class CreatedByWidget extends framework.StatelessWidget {
    build(context) {
      new Responsive.ResponsiveWidget.new().init(context);
      return new container.Container.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
  };
  (CreateByWidget.CreatedByWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    CreateByWidget.CreatedByWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = CreateByWidget.CreatedByWidget.prototype;
  dart.addTypeTests(CreateByWidget.CreatedByWidget);
  dart.setMethodSignature(CreateByWidget.CreatedByWidget, () => ({
    __proto__: dart.getMethods(CreateByWidget.CreatedByWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(CreateByWidget.CreatedByWidget, "package:vivek_portfolio/UI/CreateByWidget.dart");
  dart.trackLibraries("packages/vivek_portfolio/UI/CreateByWidget", {
    "package:vivek_portfolio/UI/CreateByWidget.dart": CreateByWidget
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["CreateByWidget.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAoB4B;AAEQ,MAAhC,AAAmB,2CAAK,OAAO;AA2D/B,YAAO;IACT;;;QAnEM;;AACD,kEAAW,GAAG;;EAAC","file":"CreateByWidget.ddc.js"}');
  // Exports:
  return {
    UI__CreateByWidget: CreateByWidget
  };
});

//# sourceMappingURL=CreateByWidget.ddc.js.map
