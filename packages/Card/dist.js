(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?b(exports,require('@slup/theming')):'function'==typeof define&&define.amd?define(['exports','@slup/theming'],b):b((a.Slup=a.Slup||{},a.Slup.Card={}),a.Slup.Theming)})(this,function(a,b){'use strict';b=b&&b.hasOwnProperty('default')?b['default']:b;var c,d=['none','0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)','0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)'],e=(c=['\n  border-radius: 2px;\n  background: white;\n  transition: box-shadow 300ms;\n  box-shadow: ',';\n\n  &:hover {\n    box-shadow: ',';\n  }\n'],c.raw=['\n  border-radius: 2px;\n  background: white;\n  transition: box-shadow 300ms;\n  box-shadow: ',';\n\n  &:hover {\n    box-shadow: ',';\n  }\n'],b.div(c,function(a){return a.hoverable?d[0]:a.raised?d[2]:d[1]},function(a){return a.hoverable?d[2]:a.raised?d[2]:d[1]}));a.Card=e,Object.defineProperty(a,'__esModule',{value:!0})});