(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{HAef:function(e,o,t){"use strict";t.r(o),t.d(o,"ion_popover",function(){return f});var r=t("9TBO"),i=t("9t42"),n=(t("9yTv"),t("mPux"),t("F6v2")),s=t("/cWz"),p=t("Sgww"),a=t("rZhp");function l(e,o,t){var r="top",i="left",n=o.querySelector(".popover-content"),s=n.getBoundingClientRect(),p=s.width,a=s.height,l=o.ownerDocument.defaultView.innerWidth,d=o.ownerDocument.defaultView.innerHeight,v=t&&t.target&&t.target.getBoundingClientRect(),h=null!=v&&"top"in v?v.top:d/2-a/2,u=null!=v&&"left"in v?v.left:l/2,f=v&&v.width||0,m=v&&v.height||0,b=o.querySelector(".popover-arrow"),w=b.getBoundingClientRect(),g=w.width,y=w.height;null==v&&(b.style.display="none");var x={top:h+m,left:u+f/2-g/2},k={top:h+m+(y-1),left:u+f/2-p/2},O=!1,D=!1;k.left<c+25?(O=!0,k.left=c):p+c+k.left+25>l&&(D=!0,k.left=l-p-c,i="right"),h+m+a>d&&h-a>0?(x.top=h-(y+1),k.top=h-a-(y-1),o.className=o.className+" popover-bottom",r="bottom"):h+m+a>d&&(n.style.bottom=c+"%"),b.style.top=x.top+"px",b.style.left=x.left+"px",n.style.top=k.top+"px",n.style.left=k.left+"px",O&&(n.style.left="calc("+k.left+"px + var(--ion-safe-area-left, 0px))"),D&&(n.style.left="calc("+k.left+"px - var(--ion-safe-area-right, 0px))"),n.style.transformOrigin=r+" "+i;var j=new e,P=new e;P.addElement(o.querySelector("ion-backdrop")),P.fromTo("opacity",.01,.08);var E=new e;return E.addElement(o.querySelector(".popover-wrapper")),E.fromTo("opacity",.01,1),Promise.resolve(j.addElement(o).easing("ease").duration(100).add(P).add(E))}var c=5;function d(e,o){var t=new e,r=new e;r.addElement(o.querySelector("ion-backdrop"));var i=new e;return i.addElement(o.querySelector(".popover-wrapper")),i.fromTo("opacity",.99,0),r.fromTo("opacity",.08,0),Promise.resolve(t.addElement(o).easing("ease").duration(500).add(r).add(i))}function v(e,o,t){var r=o.ownerDocument,i="rtl"===r.dir,n="top",s=i?"right":"left",p=o.querySelector(".popover-content"),a=p.getBoundingClientRect(),l=a.width,c=a.height,d=r.defaultView.innerWidth,v=r.defaultView.innerHeight,u=t&&t.target&&t.target.getBoundingClientRect(),f=null!=u&&"bottom"in u?u.bottom:v/2-c/2,m=u&&u.height||0,b={top:f,left:null!=u&&"left"in u?i?u.left-l+u.width:u.left:d/2-l/2};b.left<h?(b.left=h,s="left"):l+h+b.left>d&&(b.left=d-l-h,s="right"),f+m+c>v&&f-c>0?(b.top=f-c-m,o.className=o.className+" popover-bottom",n="bottom"):f+m+c>v&&(p.style.bottom=h+"px"),p.style.top=b.top+"px",p.style.left=b.left+"px",p.style.transformOrigin=n+" "+s;var w=new e,g=new e;g.addElement(o.querySelector("ion-backdrop")),g.fromTo("opacity",.01,.32);var y=new e;y.addElement(o.querySelector(".popover-wrapper")),y.fromTo("opacity",.01,1);var x=new e;x.addElement(o.querySelector(".popover-content")),x.fromTo("scale",.001,1);var k=new e;return k.addElement(o.querySelector(".popover-viewport")),k.fromTo("opacity",.01,1),Promise.resolve(w.addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).add(g).add(y).add(x).add(k))}var h=12;function u(e,o){var t=new e,r=new e;r.addElement(o.querySelector("ion-backdrop"));var i=new e;return i.addElement(o.querySelector(".popover-wrapper")),i.fromTo("opacity",.99,0),r.fromTo("opacity",.32,0),Promise.resolve(t.addElement(o).easing("ease").duration(500).add(r).add(i))}var f=function(){function e(e){Object(i.m)(this,e),this.presented=!1,this.mode=Object(i.e)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.didPresent=Object(i.d)(this,"ionPopoverDidPresent",7),this.willPresent=Object(i.d)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(i.d)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(i.d)(this,"ionPopoverDidDismiss",7)}return e.prototype.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),this.dismiss()},e.prototype.onBackdropTap=function(){this.dismiss(void 0,n.a)},e.prototype.lifecycle=function(e){var o=this.usersElement,t=m[e.type];if(o&&t){var r=new CustomEvent(t,{bubbles:!1,cancelable:!1,detail:e.detail});o.dispatchEvent(r)}},e.prototype.present=function(){return r.a(this,void 0,void 0,function(){var e,o,t;return r.c(this,function(r){switch(r.label){case 0:if(this.presented)return[2];if(!(e=this.el.querySelector(".popover-content")))throw new Error("container is undefined");return o=Object.assign({},this.componentProps,{popover:this.el}),t=this,[4,Object(p.a)(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],o)];case 1:return t.usersElement=r.sent(),[4,Object(a.a)(this.usersElement)];case 2:return r.sent(),[2,Object(n.e)(this,"popoverEnter",l,v,this.event)]}})})},e.prototype.dismiss=function(e,o){return r.a(this,void 0,void 0,function(){var t;return r.c(this,function(r){switch(r.label){case 0:return[4,Object(n.f)(this,e,o,"popoverLeave",d,u,this.event)];case 1:return(t=r.sent())?[4,Object(p.b)(this.delegate,this.usersElement)]:[3,3];case 2:r.sent(),r.label=3;case 3:return[2,t]}})})},e.prototype.onDidDismiss=function(){return Object(n.g)(this.el,"ionPopoverDidDismiss")},e.prototype.onWillDismiss=function(){return Object(n.g)(this.el,"ionPopoverWillDismiss")},e.prototype.hostData=function(){var e,o=Object(i.e)(this);return{"aria-modal":"true","no-router":!0,style:{zIndex:2e4+this.overlayIndex},class:Object.assign({},Object(s.b)(this.cssClass),(e={},e[o]=!0,e["popover-translucent"]=this.translucent,e))}},e.prototype.__stencil_render=function(){return[Object(i.i)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(i.i)("div",{class:"popover-wrapper"},Object(i.i)("div",{class:"popover-arrow"}),Object(i.i)("div",{class:"popover-content"}))]},Object.defineProperty(e.prototype,"el",{get:function(){return Object(i.f)(this)},enumerable:!0,configurable:!0}),e.prototype.render=function(){return Object(i.i)(i.a,this.hostData(),this.__stencil_render())},Object.defineProperty(e,"style",{get:function(){return'.sc-ion-popover-ios-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1000}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios:after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios:after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after{top:-6px}.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, .popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}'},enumerable:!0,configurable:!0}),e}(),m={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"}}}]);