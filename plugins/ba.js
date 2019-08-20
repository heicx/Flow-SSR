
export default ({ app }) => {
 if (process.env.NODE_ENV !== 'production') return

 var _hmt = _hmt || [];
 (function() {
   var hm = document.createElement("script");
   hm.src = "https://hm.baidu.com/hm.js?c55a4bd98c7017cbc79754945896c7ca";
   var s = document.getElementsByTagName("script")[0]; 
   s.parentNode.insertBefore(hm, s);
 })();
}