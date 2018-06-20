exports.install = function (Vue, options) {
  Vue.prototype.getCookie = function (name) {
      var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
      return v ? v[2] : null;
    },
    Vue.prototype.setCookie = function (name, value, days) {
      var d = new Date;
      d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
      window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
    },
    Vue.prototype.delCookie = function (name) {
      this.set(name, '', -1);
    },
    Vue.prototype.getLocalTime = function (nS) {
      return new Date(parseInt(nS) * 1000)
        .toLocaleString()
        .replace(/:\d{1,2}$/, " ");
    }
}
