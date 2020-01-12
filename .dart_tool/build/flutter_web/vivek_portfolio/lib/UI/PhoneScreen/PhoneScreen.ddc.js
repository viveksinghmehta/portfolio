define(['dart_sdk', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const PhoneScreen = Object.create(dart.library);
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
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/vivek_portfolio/UI/PhoneScreen/PhoneScreen.dart"
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
  PhoneScreen.PhoneScreen = class PhoneScreen extends framework.StatelessWidget {
    build(context) {
      return new container.Container.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
  };
  (PhoneScreen.PhoneScreen.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    PhoneScreen.PhoneScreen.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = PhoneScreen.PhoneScreen.prototype;
  dart.addTypeTests(PhoneScreen.PhoneScreen);
  dart.setMethodSignature(PhoneScreen.PhoneScreen, () => ({
    __proto__: dart.getMethods(PhoneScreen.PhoneScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(PhoneScreen.PhoneScreen, "package:vivek_portfolio/UI/PhoneScreen/PhoneScreen.dart");
  dart.trackLibraries("packages/vivek_portfolio/UI/PhoneScreen/PhoneScreen", {
    "package:vivek_portfolio/UI/PhoneScreen/PhoneScreen.dart": PhoneScreen
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["PhoneScreen.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAe4B;AACxB,YAAO;IACT;;;;;;EACF","file":"PhoneScreen.ddc.js"}');
  // Exports:
  return {
    UI__PhoneScreen__PhoneScreen: PhoneScreen
  };
});

//# sourceMappingURL=PhoneScreen.ddc.js.map
