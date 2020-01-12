define(['dart_sdk', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const Responsive = Object.create(dart.library);
  const CT = Object.create(null);
  Responsive.ResponsiveWidget = class ResponsiveWidget extends core.Object {
    init(context) {
      Responsive.ResponsiveWidget._mediaQueryData = media_query.MediaQuery.of(context);
      Responsive.ResponsiveWidget.screenWidth = Responsive.ResponsiveWidget._mediaQueryData.size.width;
      Responsive.ResponsiveWidget.screenHeight = Responsive.ResponsiveWidget._mediaQueryData.size.height;
      Responsive.ResponsiveWidget.blockSizeHorizontal = dart.notNull(Responsive.ResponsiveWidget.screenWidth) / 100;
      Responsive.ResponsiveWidget.blockSizeVertical = dart.notNull(Responsive.ResponsiveWidget.screenHeight) / 100;
      Responsive.ResponsiveWidget._safeAreaHorizontal = dart.notNull(Responsive.ResponsiveWidget._mediaQueryData.padding.left) + dart.notNull(Responsive.ResponsiveWidget._mediaQueryData.padding.right);
      Responsive.ResponsiveWidget._safeAreaVertical = dart.notNull(Responsive.ResponsiveWidget._mediaQueryData.padding.top) + dart.notNull(Responsive.ResponsiveWidget._mediaQueryData.padding.bottom);
      Responsive.ResponsiveWidget.safeBlockHorizontal = (dart.notNull(Responsive.ResponsiveWidget.screenWidth) - dart.notNull(Responsive.ResponsiveWidget._safeAreaHorizontal)) / 100;
      Responsive.ResponsiveWidget.safeBlockVertical = (dart.notNull(Responsive.ResponsiveWidget.screenHeight) - dart.notNull(Responsive.ResponsiveWidget._safeAreaVertical)) / 100;
    }
  };
  (Responsive.ResponsiveWidget.new = function() {
    ;
  }).prototype = Responsive.ResponsiveWidget.prototype;
  dart.addTypeTests(Responsive.ResponsiveWidget);
  dart.setMethodSignature(Responsive.ResponsiveWidget, () => ({
    __proto__: dart.getMethods(Responsive.ResponsiveWidget.__proto__),
    init: dart.fnType(dart.void, [framework.BuildContext])
  }));
  dart.setLibraryUri(Responsive.ResponsiveWidget, "package:vivek_portfolio/ResponsiveLogic/Responsive.dart");
  dart.defineLazy(Responsive.ResponsiveWidget, {
    /*Responsive.ResponsiveWidget._mediaQueryData*/get _mediaQueryData() {
      return null;
    },
    set _mediaQueryData(_) {},
    /*Responsive.ResponsiveWidget.screenWidth*/get screenWidth() {
      return null;
    },
    set screenWidth(_) {},
    /*Responsive.ResponsiveWidget.screenHeight*/get screenHeight() {
      return null;
    },
    set screenHeight(_) {},
    /*Responsive.ResponsiveWidget.blockSizeHorizontal*/get blockSizeHorizontal() {
      return null;
    },
    set blockSizeHorizontal(_) {},
    /*Responsive.ResponsiveWidget.blockSizeVertical*/get blockSizeVertical() {
      return null;
    },
    set blockSizeVertical(_) {},
    /*Responsive.ResponsiveWidget._safeAreaHorizontal*/get _safeAreaHorizontal() {
      return null;
    },
    set _safeAreaHorizontal(_) {},
    /*Responsive.ResponsiveWidget._safeAreaVertical*/get _safeAreaVertical() {
      return null;
    },
    set _safeAreaVertical(_) {},
    /*Responsive.ResponsiveWidget.safeBlockHorizontal*/get safeBlockHorizontal() {
      return null;
    },
    set safeBlockHorizontal(_) {},
    /*Responsive.ResponsiveWidget.safeBlockVertical*/get safeBlockVertical() {
      return null;
    },
    set safeBlockVertical(_) {}
  });
  dart.trackLibraries("packages/vivek_portfolio/ResponsiveLogic/Responsive", {
    "package:vivek_portfolio/ResponsiveLogic/Responsive.dart": Responsive
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["Responsive.dart"],"names":[],"mappings":";;;;;;;;;;SAsByB;AACmB,MAAxC,8CAA6B,0BAAG,OAAO;AACC,MAAxC,0CAAc,AAAgB,AAAK;AACO,MAA1C,2CAAe,AAAgB,AAAK;AACG,MAAvC,kDAAkC,aAAZ,2CAAc;AACE,MAAtC,gDAAiC,aAAb,4CAAe;AAGF,MADjC,kDAAmD,aAA7B,AAAgB,AAAQ,yEAC1C,AAAgB,AAAQ;AAEM,MADlC,gDAAgD,aAA5B,AAAgB,AAAQ,wEACxC,AAAgB,AAAQ;AAEE,MAD9B,kDACyB,CADU,aAAZ,wDACnB,oDAAuB;AAEC,MAD5B,gDACuB,CADW,aAAb,yDACjB,kDAAqB;IAC3B;;;;EACF;;;;;;;;MA3BwB,2CAAe;;;;MACvB,uCAAW;;;;MACX,wCAAY;;;;MACZ,+CAAmB;;;;MACnB,6CAAiB;;;;MAEjB,+CAAmB;;;;MACnB,6CAAiB;;;;MACjB,+CAAmB;;;;MACnB,6CAAiB","file":"Responsive.ddc.js"}');
  // Exports:
  return {
    ResponsiveLogic__Responsive: Responsive
  };
});

//# sourceMappingURL=Responsive.ddc.js.map
