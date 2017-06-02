function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function chatTmpl(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"components\u002Fchat\u002Fchat.tmpl.pug":"ul.chat__list\r\n    if !messages.length\r\n        h3.cfont Нет сообщений\r\n\r\n    each message in messages\r\n        li.chat__item\r\n            .chat__item__avatar\r\n                img(src=message.img)\r\n            .chat__item__header.clearfix\r\n                span.chat__item__autor=message.username\r\n                span.chat__item__data=message.data\r\n\r\n            .chat__item__message=message.message\r\n\r\n"};
;var locals_for_with = (locals || {});(function (messages) {;pug_debug_line = 1;pug_debug_filename = "components\u002Fchat\u002Fchat.tmpl.pug";
pug_html = pug_html + "\u003Cul class=\"chat__list\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "components\u002Fchat\u002Fchat.tmpl.pug";
if (!messages.length) {
;pug_debug_line = 3;pug_debug_filename = "components\u002Fchat\u002Fchat.tmpl.pug";
pug_html = pug_html + "\u003Ch3 class=\"cfont\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "components\u002Fchat\u002Fchat.tmpl.pug";
pug_html = pug_html + "Нет сообщений\u003C\u002Fh3\u003E";
}
;pug_debug_line = 5;pug_debug_filename = "components\u002Fchat\u002Fchat.tmpl.pug";
// iterate messages
;(function(){
  var $$obj = messages;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var message = $$obj[pug_index0];
;pug_debug_line = 6;pug_debug_filename = "components\u002Fchat\u002Fchat.tmpl.pug";
pug_html = pug_html + "\u003Cli class=\"chat__item\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "components\u002Fchat\u002Fchat.tmpl.pug";
pug_html = pug_html + "\u003Cdiv class=\"chat__item__avatar\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "components\u002Fchat\u002Fchat.tmpl.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("src", message.img, true, false)) + "\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 9;pug_debug_filename = "components\u002Fchat\u002Fchat.tmpl.pug";
pug_html = pug_html + "\u003Cdiv class=\"chat__item__header clearfix\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "components\u002Fchat\u002Fchat.tmpl.pug";
pug_html = pug_html + "\u003Cspan class=\"chat__item__autor\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "components\u002Fchat\u002Fchat.tmpl.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = message.username) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 11;pug_debug_filename = "components\u002Fchat\u002Fchat.tmpl.pug";
pug_html = pug_html + "\u003Cspan class=\"chat__item__data\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "components\u002Fchat\u002Fchat.tmpl.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = message.data) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 13;pug_debug_filename = "components\u002Fchat\u002Fchat.tmpl.pug";
pug_html = pug_html + "\u003Cdiv class=\"chat__item__message\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "components\u002Fchat\u002Fchat.tmpl.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = message.message) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var message = $$obj[pug_index0];
;pug_debug_line = 6;pug_debug_filename = "components\u002Fchat\u002Fchat.tmpl.pug";
pug_html = pug_html + "\u003Cli class=\"chat__item\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "components\u002Fchat\u002Fchat.tmpl.pug";
pug_html = pug_html + "\u003Cdiv class=\"chat__item__avatar\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "components\u002Fchat\u002Fchat.tmpl.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("src", message.img, true, false)) + "\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 9;pug_debug_filename = "components\u002Fchat\u002Fchat.tmpl.pug";
pug_html = pug_html + "\u003Cdiv class=\"chat__item__header clearfix\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "components\u002Fchat\u002Fchat.tmpl.pug";
pug_html = pug_html + "\u003Cspan class=\"chat__item__autor\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "components\u002Fchat\u002Fchat.tmpl.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = message.username) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 11;pug_debug_filename = "components\u002Fchat\u002Fchat.tmpl.pug";
pug_html = pug_html + "\u003Cspan class=\"chat__item__data\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "components\u002Fchat\u002Fchat.tmpl.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = message.data) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 13;pug_debug_filename = "components\u002Fchat\u002Fchat.tmpl.pug";
pug_html = pug_html + "\u003Cdiv class=\"chat__item__message\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "components\u002Fchat\u002Fchat.tmpl.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = message.message) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E";}.call(this,"messages" in locals_for_with?locals_for_with.messages:typeof messages!=="undefined"?messages:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}