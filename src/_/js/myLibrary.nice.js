var a51 = a51 || {};
/**
 * @param {(Array|Node|string)} s
 * @return {?}
 */
a51.dollar = function(s) {
  var el = {};

  return el.selector = s, 
  
         el.element = document.querySelector(el.selector), 

         el.html = function() {
            return el.element;
         }, 

         el.attr = function(name, value) {
            return value ? el.setAttribute(name, value) : el.getAttribute(name);
         }, 

         el.getAttribute = function(name) {
            return el.element.getAttribute(name);
         }, 

         el.setAttribute = function(name, value) {
            return el.element.setAttribute(name, value), el;
         }, 

         el.on = function(name, fn) {
            return el.element["on" + name] = fn, el;
         }, 

         el.click = function(fn) {
            return el.on("click", fn), el;
         }, 

         el;
};