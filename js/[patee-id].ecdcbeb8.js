(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["[patee-id]"],{1276:function(e,t,n){"use strict";var r=n("d784"),i=n("44e7"),a=n("825a"),l=n("1d80"),s=n("4840"),u=n("8aa5"),c=n("50c4"),o=n("14c3"),p=n("9263"),d=n("d039"),f=[].push,h=Math.min,m=4294967295,g=!d((function(){return!RegExp(m,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(l(this)),a=void 0===n?m:n>>>0;if(0===a)return[];if(void 0===e)return[r];if(!i(e))return t.call(r,e,a);var s,u,c,o=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),h=0,g=new RegExp(e.source,d+"g");while(s=p.call(g,r)){if(u=g.lastIndex,u>h&&(o.push(r.slice(h,s.index)),s.length>1&&s.index<r.length&&f.apply(o,s.slice(1)),c=s[0].length,h=u,o.length>=a))break;g.lastIndex===s.index&&g.lastIndex++}return h===r.length?!c&&g.test("")||o.push(""):o.push(r.slice(h)),o.length>a?o.slice(0,a):o}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var i=l(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,i,n):r.call(String(i),t,n)},function(e,i){var l=n(r,e,this,i,r!==t);if(l.done)return l.value;var p=a(e),d=String(this),f=s(p,RegExp),v=p.unicode,b=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(g?"y":"g"),x=new f(g?p:"^(?:"+p.source+")",b),w=void 0===i?m:i>>>0;if(0===w)return[];if(0===d.length)return null===o(x,d)?[d]:[];var y=0,C=0,_=[];while(C<d.length){x.lastIndex=g?C:0;var j,P=o(x,g?d:d.slice(C));if(null===P||(j=h(c(x.lastIndex+(g?0:C)),d.length))===y)C=u(d,C,v);else{if(_.push(d.slice(y,C)),_.length===w)return _;for(var k=1;k<=P.length-1;k++)if(_.push(P[k]),_.length===w)return _;C=y=j}}return _.push(d.slice(y)),_}]}),!g)},"4de4":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").filter,a=n("1dde"),l=a("filter");r({target:"Array",proto:!0,forced:!l},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},"5bad":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-screen grid grid-rows-4 place-items-center"},[n("base-header",{staticClass:"row-span-1 self-start",attrs:{title:e.currentPateeMeaning.title}}),n("div",{staticClass:"row-span-1 px-10 text-center"},[n("h1",{staticClass:"text-xl font-bold"},[e._v("အဓိပ္ပါယ်")]),n("p",{staticClass:"my-4 font-base"},[e._v(e._s(e.currentPateeMeaning.meaning))]),n("p",{staticClass:"font-sm font-bold"},[e._v(" ပုတီးစိပ်ရမည့်အပတ်စဉ် - "+e._s(e.en2mmNum(e.currentPateeStep.countLoop))+"ပတ် ")])]),n("patee-counter",{staticClass:"row-span-2",attrs:{"total-count-loop":e.currentPateeStep.countLoop,size:"w-40 h-40 rounded-full bg-red-600 text-white text-3xl"}})],1)},i=[],a=(n("1276"),n("ac1f"),n("4de4"),n("d3b7"),n("25f0"),n("a6f4")),l=n("06d0"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col justify-center items-center"},[n("p",{staticClass:"my-4 text-center text-red-700 font-bold"},[e._v(" အပတ်စဉ် "+e._s(e.en2mmNum(e.currentLoop))+" ")]),n("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"select-none cursor-pointer rounded-lg grid place-items-center",class:e.size,on:{click:e.clickHandler}},[e._v(" "+e._s(e.currentLoop===e.totalCountLoop?"ပြီးပါပြီ":e.en2mmNum(e.count))+" ")])])},u=[],c=(n("a9e3"),n("7bbe"));function o(e){var t=new Audio(e);function n(){t&&(t.currentTime=0,t.play())}return{audio:t,play:n}}var p=n("1285"),d=Object(a["f"])({name:"PateeCounter",props:{totalCountLoop:{type:Number,default:0},pateeLength:{type:Number,default:108},size:{type:String,default:"w-40 h-40"}},methods:{en2mmNum:p["a"]},setup:function(e,t){var n=t.emit,r=Object(c["a"])(e),i=r.totalCountLoop,l=r.pateeLength,s=o("/audio/mixkit-mouse-click-close-1113.mp3"),u=o("/audio/mixkit-positive-interface-click-1112.mp3"),p=Object(c["b"])(),d=p.count,f=p.inc,h=Object(c["b"])(),m=h.count,g=h.inc,v=h.set,b=h.reset;function x(){if(d.value<i)return g(),void s.play();u.play()}return Object(a["R"])(m,(function(e){e===l&&(v(0),f())})),Object(a["R"])(d,(function(e){e===i&&(b(),n("done"))})),{currentLoop:d,count:m,clickHandler:x}}}),f=d,h=n("2877"),m=Object(h["a"])(f,s,u,!1,null,null,null),g=m.exports,v=n("85f2"),b=Object(a["f"])({name:"PagesPateeId",components:{BaseHeader:l["a"],PateeCounter:g},methods:{en2mmNum:p["a"]},setup:function(e,t){var n=t.root,r=n.$route.params.patee,i=n.$route.params.id.split("_"),l=v["a"][r],s=Object(a["a"])((function(){var e=parseInt(i[0])-1;return l.steps[e].filter((function(e){return e.day.toString()===i[1]}))[0]})),u=Object(a["a"])((function(){return l.words.filter((function(e){return e.title===s.value.title}))[0]}));return{currentPatee:r,currentPateeId:i,currentPateeStep:s,currentPateeMeaning:u}}}),x=b,w=Object(h["a"])(x,r,i,!1,null,null,null);t["default"]=w.exports}}]);
//# sourceMappingURL=[patee-id].ecdcbeb8.js.map