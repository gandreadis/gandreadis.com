(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"4gDt":function(n,t,o){"use strict";o.r(t);var r=o("CcnG"),e=o("ZJFI"),a=o("mrSG"),i=o("a3Cf"),l=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return Object(a.d)(t,n),t.prototype.share=function(n,t,o,r){return Object(i.cordova)(this,"share",{successIndex:4,errorIndex:5},arguments)},t.prototype.shareWithOptions=function(n){return Object(i.cordova)(this,"shareWithOptions",{platforms:["iOS","Android"]},arguments)},t.prototype.canShareVia=function(n,t,o,r,e){return Object(i.cordova)(this,"canShareVia",{successIndex:5,errorIndex:6,platforms:["iOS","Android"]},arguments)},t.prototype.shareViaTwitter=function(n,t,o){return Object(i.cordova)(this,"shareViaTwitter",{successIndex:3,errorIndex:4,platforms:["iOS","Android"]},arguments)},t.prototype.shareViaFacebook=function(n,t,o){return Object(i.cordova)(this,"shareViaFacebook",{successIndex:3,errorIndex:4,platforms:["iOS","Android"]},arguments)},t.prototype.shareViaFacebookWithPasteMessageHint=function(n,t,o,r){return Object(i.cordova)(this,"shareViaFacebookWithPasteMessageHint",{successIndex:4,errorIndex:5,platforms:["iOS","Android"]},arguments)},t.prototype.shareViaInstagram=function(n,t){return Object(i.cordova)(this,"shareViaInstagram",{platforms:["iOS","Android"]},arguments)},t.prototype.shareViaWhatsApp=function(n,t,o){return Object(i.cordova)(this,"shareViaWhatsApp",{successIndex:3,errorIndex:4,platforms:["iOS","Android"]},arguments)},t.prototype.shareViaWhatsAppToReceiver=function(n,t,o,r){return Object(i.cordova)(this,"shareViaWhatsAppToReceiver",{successIndex:4,errorIndex:5,platforms:["iOS","Android"]},arguments)},t.prototype.shareViaSMS=function(n,t){return Object(i.cordova)(this,"shareViaSMS",{platforms:["iOS","Android"]},arguments)},t.prototype.canShareViaEmail=function(){return Object(i.cordova)(this,"canShareViaEmail",{platforms:["iOS","Android"]},arguments)},t.prototype.shareViaEmail=function(n,t,o,r,e,a){return Object(i.cordova)(this,"shareViaEmail",{platforms:["iOS","Android"],successIndex:6,errorIndex:7},arguments)},t.prototype.shareVia=function(n,t,o,r,e){return Object(i.cordova)(this,"shareVia",{successIndex:5,errorIndex:6,platforms:["iOS","Android"]},arguments)},t.prototype.setIPadPopupCoordinates=function(n){return Object(i.cordova)(this,"setIPadPopupCoordinates",{sync:!0,platforms:["iOS"]},arguments)},t.prototype.saveToPhotoAlbum=function(n){return Object(i.cordova)(this,"saveToPhotoAlbum",{platforms:["iOS"]},arguments)},t.pluginName="SocialSharing",t.plugin="cordova-plugin-x-socialsharing",t.pluginRef="plugins.socialsharing",t.repo="https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin",t.platforms=["Android","Browser","iOS","Windows","Windows Phone"],t}(i.IonicNativePlugin),c=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return Object(a.d)(t,n),t.prototype.copy=function(n){return Object(i.cordova)(this,"copy",{},arguments)},t.prototype.paste=function(){return Object(i.cordova)(this,"paste",{},arguments)},t.prototype.clear=function(){return Object(i.cordova)(this,"clear",{},arguments)},t.pluginName="Clipboard",t.plugin="cordova-clipboard",t.pluginRef="cordova.plugins.clipboard",t.repo="https://github.com/ihadeed/cordova-clipboard",t.platforms=["Android","iOS","Windows Phone 8"],t}(i.IonicNativePlugin),u=function(){function n(n,t,o){this.databaseService=n,this.socialSharing=t,this.clipboard=o}return n.prototype.ngOnInit=function(){},n.prototype.importDB=function(){var n=this;this.clipboard.paste().then(function(t){return n.databaseService.importDatabase(t)})},n.prototype.exportDB=function(){var n=this;this.databaseService.exportDatabase().then(function(t){return n.socialSharing.share(t)})},n.prototype.resetDB=function(){var n=this;this.databaseService.resetDatabase(function(){return n.databaseService.seedDatabase()})},n}(),s=function(){return function(){}}(),p=o("pMnS"),d=o("oBZk"),b=o("ZZ/e"),h=r.ob({encapsulation:0,styles:[[""]],data:{}});function f(n){return r.Hb(0,[(n()(),r.qb(0,0,null,null,6,"ion-header",[],null,null,null,d.Y,d.s)),r.pb(1,49152,null,0,b.A,[r.h,r.k],null,null),(n()(),r.qb(2,0,null,0,4,"ion-toolbar",[["color","kartuli"]],null,null,null,d.lb,d.F)),r.pb(3,49152,null,0,b.Ab,[r.h,r.k],{color:[0,"color"]},null),(n()(),r.qb(4,0,null,0,2,"ion-title",[],null,null,null,d.kb,d.E)),r.pb(5,49152,null,0,b.yb,[r.h,r.k],null,null),(n()(),r.Gb(-1,0,["Backup 2\ufe0f\u20e3\ud83d\udd19\xa9"])),(n()(),r.qb(7,0,null,null,10,"ion-content",[["padding",""]],null,null,null,d.T,d.n)),r.pb(8,49152,null,0,b.t,[r.h,r.k],null,null),(n()(),r.qb(9,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],function(n,t,o){var r=!0;return"click"===t&&(r=!1!==n.component.importDB()&&r),r},d.J,d.d)),r.pb(10,49152,null,0,b.j,[r.h,r.k],{expand:[0,"expand"]},null),(n()(),r.Gb(-1,0,[" Import DB from clipboard "])),(n()(),r.qb(12,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],function(n,t,o){var r=!0;return"click"===t&&(r=!1!==n.component.exportDB()&&r),r},d.J,d.d)),r.pb(13,49152,null,0,b.j,[r.h,r.k],{expand:[0,"expand"]},null),(n()(),r.Gb(-1,0,[" Export DB to Share "])),(n()(),r.qb(15,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],function(n,t,o){var r=!0;return"click"===t&&(r=!1!==n.component.resetDB()&&r),r},d.J,d.d)),r.pb(16,49152,null,0,b.j,[r.h,r.k],{expand:[0,"expand"]},null),(n()(),r.Gb(-1,0,[" Reset DB "]))],function(n,t){n(t,3,0,"kartuli"),n(t,10,0,"block"),n(t,13,0,"block"),n(t,16,0,"block")},null)}function y(n){return r.Hb(0,[(n()(),r.qb(0,0,null,null,1,"app-backup",[],null,null,null,f,h)),r.pb(1,114688,null,0,u,[e.a,l,c],null,null)],function(n,t){n(t,1,0)},null)}var v=r.mb("app-backup",u,y,{},{},[]),m=o("Ip0R"),O=o("gIcY"),S=o("ZYCi");o.d(t,"BackupPageModuleNgFactory",function(){return g});var g=r.nb(s,[],function(n){return r.xb([r.yb(512,r.j,r.cb,[[8,[p.a,v]],[3,r.j],r.y]),r.yb(4608,m.k,m.j,[r.v,[2,m.r]]),r.yb(4608,O.g,O.g,[]),r.yb(4608,b.a,b.a,[r.A,r.g]),r.yb(4608,b.Eb,b.Eb,[b.a,r.j,r.r]),r.yb(4608,b.Ib,b.Ib,[b.a,r.j,r.r]),r.yb(4608,l,l,[]),r.yb(4608,c,c,[]),r.yb(1073742336,m.b,m.b,[]),r.yb(1073742336,O.f,O.f,[]),r.yb(1073742336,O.a,O.a,[]),r.yb(1073742336,b.Cb,b.Cb,[]),r.yb(1073742336,S.o,S.o,[[2,S.u],[2,S.m]]),r.yb(1073742336,s,s,[]),r.yb(1024,S.k,function(){return[[{path:"",component:u}]]},[])])})}}]);