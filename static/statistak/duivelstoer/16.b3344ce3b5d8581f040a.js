(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"4gDt":function(n,o,t){"use strict";t.r(o);var r=t("CcnG"),e=t("ZJFI"),a=t("mrSG"),i=t("a3Cf"),l=function(n){function o(){return null!==n&&n.apply(this,arguments)||this}return Object(a.d)(o,n),o.prototype.share=function(n,o,t,r){return Object(i.cordova)(this,"share",{successIndex:4,errorIndex:5},arguments)},o.prototype.shareWithOptions=function(n){return Object(i.cordova)(this,"shareWithOptions",{platforms:["iOS","Android"]},arguments)},o.prototype.canShareVia=function(n,o,t,r,e){return Object(i.cordova)(this,"canShareVia",{successIndex:5,errorIndex:6,platforms:["iOS","Android"]},arguments)},o.prototype.shareViaTwitter=function(n,o,t){return Object(i.cordova)(this,"shareViaTwitter",{successIndex:3,errorIndex:4,platforms:["iOS","Android"]},arguments)},o.prototype.shareViaFacebook=function(n,o,t){return Object(i.cordova)(this,"shareViaFacebook",{successIndex:3,errorIndex:4,platforms:["iOS","Android"]},arguments)},o.prototype.shareViaFacebookWithPasteMessageHint=function(n,o,t,r){return Object(i.cordova)(this,"shareViaFacebookWithPasteMessageHint",{successIndex:4,errorIndex:5,platforms:["iOS","Android"]},arguments)},o.prototype.shareViaInstagram=function(n,o){return Object(i.cordova)(this,"shareViaInstagram",{platforms:["iOS","Android"]},arguments)},o.prototype.shareViaWhatsApp=function(n,o,t){return Object(i.cordova)(this,"shareViaWhatsApp",{successIndex:3,errorIndex:4,platforms:["iOS","Android"]},arguments)},o.prototype.shareViaWhatsAppToReceiver=function(n,o,t,r){return Object(i.cordova)(this,"shareViaWhatsAppToReceiver",{successIndex:4,errorIndex:5,platforms:["iOS","Android"]},arguments)},o.prototype.shareViaSMS=function(n,o){return Object(i.cordova)(this,"shareViaSMS",{platforms:["iOS","Android"]},arguments)},o.prototype.canShareViaEmail=function(){return Object(i.cordova)(this,"canShareViaEmail",{platforms:["iOS","Android"]},arguments)},o.prototype.shareViaEmail=function(n,o,t,r,e,a){return Object(i.cordova)(this,"shareViaEmail",{platforms:["iOS","Android"],successIndex:6,errorIndex:7},arguments)},o.prototype.shareVia=function(n,o,t,r,e){return Object(i.cordova)(this,"shareVia",{successIndex:5,errorIndex:6,platforms:["iOS","Android"]},arguments)},o.prototype.setIPadPopupCoordinates=function(n){return Object(i.cordova)(this,"setIPadPopupCoordinates",{sync:!0,platforms:["iOS"]},arguments)},o.prototype.saveToPhotoAlbum=function(n){return Object(i.cordova)(this,"saveToPhotoAlbum",{platforms:["iOS"]},arguments)},o.pluginName="SocialSharing",o.plugin="cordova-plugin-x-socialsharing",o.pluginRef="plugins.socialsharing",o.repo="https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin",o.platforms=["Android","Browser","iOS","Windows","Windows Phone"],o}(i.IonicNativePlugin),u=function(n){function o(){return null!==n&&n.apply(this,arguments)||this}return Object(a.d)(o,n),o.prototype.copy=function(n){return Object(i.cordova)(this,"copy",{},arguments)},o.prototype.paste=function(){return Object(i.cordova)(this,"paste",{},arguments)},o.prototype.clear=function(){return Object(i.cordova)(this,"clear",{},arguments)},o.pluginName="Clipboard",o.plugin="cordova-clipboard",o.pluginRef="cordova.plugins.clipboard",o.repo="https://github.com/ihadeed/cordova-clipboard",o.platforms=["Android","iOS","Windows Phone 8"],o}(i.IonicNativePlugin),c=function(){function n(n,o,t){this.databaseService=n,this.socialSharing=o,this.clipboard=t}return n.prototype.ngOnInit=function(){},n.prototype.importDB=function(){var n=this;this.clipboard.paste().then(function(o){return n.databaseService.importDatabase(o)})},n.prototype.exportDB=function(){var n=this;this.databaseService.exportDatabase().then(function(o){return n.socialSharing.share(o)})},n}(),s=function(){return function(){}}(),p=t("pMnS"),d=t("oBZk"),b=t("ZZ/e"),h=r.ob({encapsulation:0,styles:[[""]],data:{}});function f(n){return r.Hb(0,[(n()(),r.qb(0,0,null,null,6,"ion-header",[],null,null,null,d.R,d.p)),r.pb(1,49152,null,0,b.A,[r.h,r.k],null,null),(n()(),r.qb(2,0,null,0,4,"ion-toolbar",[["color","kartuli"]],null,null,null,d.db,d.B)),r.pb(3,49152,null,0,b.Ab,[r.h,r.k],{color:[0,"color"]},null),(n()(),r.qb(4,0,null,0,2,"ion-title",[],null,null,null,d.cb,d.A)),r.pb(5,49152,null,0,b.yb,[r.h,r.k],null,null),(n()(),r.Gb(-1,0,["Backup"])),(n()(),r.qb(7,0,null,null,7,"ion-content",[["padding",""]],null,null,null,d.N,d.l)),r.pb(8,49152,null,0,b.t,[r.h,r.k],null,null),(n()(),r.qb(9,0,null,0,2,"ion-button",[["expand",""]],null,[[null,"click"]],function(n,o,t){var r=!0;return"click"===o&&(r=!1!==n.component.importDB()&&r),r},d.E,d.c)),r.pb(10,49152,null,0,b.j,[r.h,r.k],{expand:[0,"expand"]},null),(n()(),r.Gb(-1,0,[" Import DB from clipboard "])),(n()(),r.qb(12,0,null,0,2,"ion-button",[["expand",""]],null,[[null,"click"]],function(n,o,t){var r=!0;return"click"===o&&(r=!1!==n.component.exportDB()&&r),r},d.E,d.c)),r.pb(13,49152,null,0,b.j,[r.h,r.k],{expand:[0,"expand"]},null),(n()(),r.Gb(-1,0,[" Export DB to Share "]))],function(n,o){n(o,3,0,"kartuli"),n(o,10,0,""),n(o,13,0,"")},null)}function y(n){return r.Hb(0,[(n()(),r.qb(0,0,null,null,1,"app-backup",[],null,null,null,f,h)),r.pb(1,114688,null,0,c,[e.a,l,u],null,null)],function(n,o){n(o,1,0)},null)}var m=r.mb("app-backup",c,y,{},{},[]),v=t("Ip0R"),O=t("gIcY"),S=t("ZYCi");t.d(o,"BackupPageModuleNgFactory",function(){return g});var g=r.nb(s,[],function(n){return r.xb([r.yb(512,r.j,r.cb,[[8,[p.a,m]],[3,r.j],r.y]),r.yb(4608,v.k,v.j,[r.v,[2,v.r]]),r.yb(4608,O.g,O.g,[]),r.yb(4608,b.a,b.a,[r.A,r.g]),r.yb(4608,b.Eb,b.Eb,[b.a,r.j,r.r]),r.yb(4608,b.Ib,b.Ib,[b.a,r.j,r.r]),r.yb(4608,l,l,[]),r.yb(4608,u,u,[]),r.yb(1073742336,v.b,v.b,[]),r.yb(1073742336,O.f,O.f,[]),r.yb(1073742336,O.a,O.a,[]),r.yb(1073742336,b.Cb,b.Cb,[]),r.yb(1073742336,S.o,S.o,[[2,S.u],[2,S.m]]),r.yb(1073742336,s,s,[]),r.yb(1024,S.k,function(){return[[{path:"",component:c}]]},[])])})}}]);