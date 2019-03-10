
export default ({ app }) => {
  /*
  ** Only run on client-side and only in production mode
  */
 if (process.env.NODE_ENV !== 'production') return

  var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?339d01968e147d0435ab2a5f59b43338";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();
}
