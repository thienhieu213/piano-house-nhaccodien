function heateorFfcpFBCommentCreate(){"undefined"!=typeof FB&&FB.Event.subscribe("comment.create",function(e){e.commentID&&("undefined"==typeof heateorFfcpOptin||1==heateorFfcpOptin)&&heateorFfcpFBCommentID!=e.commentID&&(heateorFfcpFBCommentID=e.commentID,"undefined"!=typeof heateorFfcpAppLimit?jQuery.getJSON("https://graph.facebook.com/?id="+e.href,function(t){t.og_object&&t.og_object.id&&(e.page_id=t.og_object.id,heateorFfcpSaveFBComment(e))}):heateorFfcpSaveFBComment(e)),e.commentID&&heateorFfcpFBmyCREDCommentID!=e.commentID&&"undefined"!=typeof heateorFfcpmyCREDIntEnabled&&(heateorFfcpFBmyCREDCommentID=e.commentID,jQuery.ajax({type:"POST",dataType:"json",url:heateorFfcpAjaxUrl,data:{action:"heateor_ffcp_facebook_comment_posted",url:e.href}}))})}
function heateorFfcpSaveFBComment(t){jQuery.ajax({type:"POST",dataType:"json",url:heateorFfcpWebsiteUrl+"/index.php",data:{action:"heateor_ffcp_save_fb_comment",data:t},success:function(){}})}
var heateorFfcpFBCommentID="",heateorFfcpFBmyCREDCommentID="";jQuery(window).on('load',function(){if(void 0!==jQuery(window).fbAsyncInit&&!0===jQuery(window).fbAsyncInit.hasRun)heateorFfcpFBCommentCreate();else{var t=jQuery(window).fbAsyncInit;jQuery(window).fbAsyncInit=function(){"function"==typeof t&&t(),heateorFfcpFBCommentCreate()},heateorFfcpFBCommentCreate()}}),jQuery(function(){jQuery(".heateor_ffcp_facebook_comments time").timeago(),(0==jQuery("input.heateor_ffcp_fb_comments_optin").length)&&(jQuery("input.heateor_ffcp_fb_comments_optin").prop("checked",!0)),jQuery("input.heateor_ffcp_fb_comments_optin").click(function(){if(jQuery(this).is(":checked")){heateorFfcpOptin=1}else{heateorFfcpOptin=0}})}),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof module&&"object"==typeof module.exports?require("jquery"):jQuery)}(function(h){function o(){var t=i.settings;if(t.autoDispose&&!h.contains(document.documentElement,this))return h(this).timeago("dispose"),this;var e=function(t){if(!(t=h(t)).data("timeago")){t.data("timeago",{datetime:i.datetime(t)});var e=h.trim(t.text());i.settings.localeTitle?t.attr("title",t.data("timeago").datetime.toLocaleString()):!(0<e.length)||i.isTime(t)&&t.attr("title")||t.attr("title",e)}
return t.data("timeago")}(this);return isNaN(e.datetime)||(0===t.cutoff||Math.abs(a(e.datetime))<t.cutoff?h(this).text(n(e.datetime)):0<h(this).attr("title").length&&h(this).text(h(this).attr("title"))),this}
function n(t){return i.inWords(a(t))}
function a(t){return(new Date).getTime()-t.getTime()}
h.timeago=function(t){return n(t instanceof Date?t:"string"==typeof t?h.timeago.parse(t):"number"==typeof t?new Date(t):h.timeago.datetime(t))};var i=h.timeago;h.extend(h.timeago,{settings:{refreshMillis:6e4,allowPast:!0,allowFuture:!1,localeTitle:!1,cutoff:0,autoDispose:!0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",inPast:"any moment now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}},inWords:function(a){function t(t,e){var o=h.isFunction(t)?t(e,a):t,n=i.numbers&&i.numbers[e]||e;return o.replace(/%d/i,n)}
if(!this.settings.allowPast&&!this.settings.allowFuture)throw "timeago allowPast and allowFuture settings can not both be set to false.";var i=this.settings.strings,e=i.prefixAgo,o=i.suffixAgo;if(this.settings.allowFuture&&a<0&&(e=i.prefixFromNow,o=i.suffixFromNow),!this.settings.allowPast&&0<=a)return this.settings.strings.inPast;var n=Math.abs(a)/1e3,r=n/60,s=r/60,c=s/24,m=c/365,u=n<45&&t(i.seconds,Math.round(n))||n<90&&t(i.minute,1)||r<45&&t(i.minutes,Math.round(r))||r<90&&t(i.hour,1)||s<24&&t(i.hours,Math.round(s))||s<42&&t(i.day,1)||c<30&&t(i.days,Math.round(c))||c<45&&t(i.month,1)||c<365&&t(i.months,Math.round(c/30))||m<1.5&&t(i.year,1)||t(i.years,Math.round(m)),f=i.wordSeparator||"";return void 0===i.wordSeparator&&(f=" "),h.trim([e,u,o].join(f))},parse:function(t){var e=h.trim(t);return e=(e=(e=(e=(e=e.replace(/\.\d+/,"")).replace(/-/,"/").replace(/-/,"/")).replace(/T/," ").replace(/Z/," UTC")).replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2")).replace(/([\+\-]\d\d)$/," $100"),new Date(e)},datetime:function(t){var e=i.isTime(t)?h(t).attr("datetime"):h(t).attr("title");return i.parse(e)},isTime:function(t){return "time"===h(t).get(0).tagName.toLowerCase()}});var r={init:function(){r.dispose.call(this);var t=h.proxy(o,this);t();var e=i.settings;0<e.refreshMillis&&(this._timeagoInterval=setInterval(t,e.refreshMillis))},update:function(t){var e=t instanceof Date?t:i.parse(t);h(this).data("timeago",{datetime:e}),i.settings.localeTitle&&h(this).attr("title",e.toLocaleString()),o.apply(this)},updateFromDOM:function(){h(this).data("timeago",{datetime:i.parse(i.isTime(this)?h(this).attr("datetime"):h(this).attr("title"))}),o.apply(this)},dispose:function(){this._timeagoInterval&&(window.clearInterval(this._timeagoInterval),this._timeagoInterval=null)}};h.fn.timeago=function(t,e){var o=t?r[t]:r.init;if(!o)throw new Error("Unknown function name '"+t+"' for timeago");return this.each(function(){o.call(this,e)}),this},document.createElement("abbr"),document.createElement("time")});