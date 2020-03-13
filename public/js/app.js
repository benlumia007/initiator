/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Primary front-end script.\n *\n * Primary JavaScript file. Any includes or anything imported should be filtered through this file \n * and eventually saved back into the `/assets/js/app.js` file.\n *\n * @package   Initiator\n * @author    Benjamin Lu <benlumia007@gmail.com>\n * @copyright 2019-2020 Benjamin Lu\n * @license   https://www.gnu.org/licenses/gpl-2.0.html GPL-2.0-or-later\n * @link      https://github.com/benlumia007/initiator\n */\n\n/**\n * A simple immediately-invoked function expression to kick-start\n * things and encapsulate our code.\n *\n * @since  1.0.0 \n * @access public\n * @return void\n */\n(function ($) {\n  var container, button, menu, links, subMenus;\n  container = document.getElementById('site-navigation');\n\n  if (!container) {\n    return;\n  }\n\n  button = container.getElementsByTagName('button')[0];\n\n  if ('undefined' === typeof button) {\n    return;\n  }\n\n  menu = container.getElementsByTagName('ul')[0]; // Hide menu toggle button if menu is empty and return early.\n\n  if ('undefined' === typeof menu) {\n    button.style.display = 'none';\n    return;\n  }\n\n  menu.setAttribute('aria-expanded', 'false');\n\n  if (-1 === menu.className.indexOf('nav-menu')) {\n    menu.className += 'nav-menu';\n  }\n\n  button.onclick = function () {\n    if (-1 !== container.className.indexOf('toggled')) {\n      container.className = container.className.replace(' toggled', '');\n      button.setAttribute('aria-expanded', 'false');\n      menu.setAttribute('aria-expanded', 'false');\n    } else {\n      container.className += ' toggled';\n      button.setAttribute('aria-expanded', 'true');\n      menu.setAttribute('aria-expanded', 'true');\n    }\n  }; // Get all the link elements within the menu.\n\n\n  links = menu.getElementsByTagName('a');\n  subMenus = menu.getElementsByTagName('ul'); // Set menu items with submenus to aria-haspopup=\"true\".\n\n  for (var i = 0, len = subMenus.length; i < len; i++) {\n    subMenus[i].parentNode.setAttribute('aria-haspopup', 'true');\n  } // Each time a menu link is focused or blurred, toggle focus.\n\n\n  for (i = 0, len = links.length; i < len; i++) {\n    links[i].addEventListener('focus', toggleFocus, true);\n    links[i].addEventListener('blur', toggleFocus, true);\n  }\n  /**\n   * Sets or removes .focus class on an element.\n   */\n\n\n  function toggleFocus() {\n    var self = this; // Move up through the ancestors of the current link until we hit .nav-menu.\n\n    while (-1 === self.className.indexOf('nav-menu')) {\n      // On li elements toggle the class .focus.\n      if ('li' === self.tagName.toLowerCase()) {\n        if (-1 !== self.className.indexOf('focus')) {\n          self.className = self.className.replace('focus', '');\n        } else {\n          self.className += 'focus';\n        }\n      }\n\n      self = self.parentElement;\n    }\n  }\n\n  function initMainNavigation(container) {\n    // Add dropdown toggle that display child menu items.\n    container.find('.menu-item-has-children > a, .page_item_has_children > a').after('<button class=\"dropdown-toggle\" aria-expanded=\"false\">' + backdropScreenReaderText.expand + '</button>');\n    container.find('.dropdown-toggle').click(function (e) {\n      var _this = $(this);\n\n      e.preventDefault();\n\n      _this.toggleClass('toggle-on');\n\n      _this.next('.children, .sub-menu').toggleClass('toggled-on');\n\n      _this.attr('aria-expanded', _this.attr('aria-expanded') === 'false' ? 'true' : 'false');\n\n      _this.html(_this.html() === backdropScreenReaderText.expand ? backdropScreenReaderText.collapse : backdropScreenReaderText.expand);\n    });\n  }\n\n  initMainNavigation($('.primary-navigation')); // Re-initialize the main navigation when it is updated, persisting any existing submenu expanded states.\n\n  $(document).on('customize-preview-menu-refreshed', function (e, params) {\n    if ('primary-navigation' === params.wpNavMenuArgs.theme_location) {\n      initMainNavigation(params.newContainer); // Re-sync expanded states from oldContainer.\n\n      params.oldContainer.find('.dropdown-toggle.toggle-on').each(function () {\n        var containerId = $(this).parent().prop('id');\n        $(params.newContainer).find('#' + containerId + ' > .dropdown-toggle').triggerHandler('click');\n      });\n    }\n  }); // Hide/show toggle button on scroll\n\n  var position, direction, previous;\n  $(window).scroll(function () {\n    if ($(this).scrollTop() >= position) {\n      direction = 'down';\n\n      if (direction !== previous) {\n        $('.menu-toggle').addClass('hide');\n        previous = direction;\n      }\n    } else {\n      direction = 'up';\n\n      if (direction !== previous) {\n        $('.menu-toggle').removeClass('hide');\n        previous = direction;\n      }\n    }\n\n    position = $(this).scrollTop();\n  });\n})(jQuery);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBwLmpzPzZkNDAiXSwibmFtZXMiOlsiJCIsImNvbnRhaW5lciIsImJ1dHRvbiIsIm1lbnUiLCJsaW5rcyIsInN1Yk1lbnVzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic3R5bGUiLCJkaXNwbGF5Iiwic2V0QXR0cmlidXRlIiwiY2xhc3NOYW1lIiwiaW5kZXhPZiIsIm9uY2xpY2siLCJyZXBsYWNlIiwiaSIsImxlbiIsImxlbmd0aCIsInBhcmVudE5vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlRm9jdXMiLCJzZWxmIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwicGFyZW50RWxlbWVudCIsImluaXRNYWluTmF2aWdhdGlvbiIsImZpbmQiLCJhZnRlciIsImJhY2tkcm9wU2NyZWVuUmVhZGVyVGV4dCIsImV4cGFuZCIsImNsaWNrIiwiZSIsIl90aGlzIiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsIm5leHQiLCJhdHRyIiwiaHRtbCIsImNvbGxhcHNlIiwib24iLCJwYXJhbXMiLCJ3cE5hdk1lbnVBcmdzIiwidGhlbWVfbG9jYXRpb24iLCJuZXdDb250YWluZXIiLCJvbGRDb250YWluZXIiLCJlYWNoIiwiY29udGFpbmVySWQiLCJwYXJlbnQiLCJwcm9wIiwidHJpZ2dlckhhbmRsZXIiLCJwb3NpdGlvbiIsImRpcmVjdGlvbiIsInByZXZpb3VzIiwid2luZG93Iiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7QUFhQTs7Ozs7Ozs7QUFRQSxDQUFFLFVBQVVBLENBQVYsRUFBYztBQUNmLE1BQUlDLFNBQUosRUFBZUMsTUFBZixFQUF1QkMsSUFBdkIsRUFBNkJDLEtBQTdCLEVBQW9DQyxRQUFwQztBQUVBSixXQUFTLEdBQUdLLFFB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LENBQUQsQ0FBa0IwRCxXQUFsQixDQUE4QixNQUE5QjtBQUVBTCxnQkFBUSxHQUFHRCxTQUFYO0FBQ0E7QUFDRDs7QUFDREQsWUFBUSxHQUFHbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRd0QsU0FBUixFQUFYO0FBQ0EsR0FqQkQ7QUFrQkEsQ0E3SEQsRUE2SEtHLE1BN0hMIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUHJpbWFyeSBmcm9udC1lbmQgc2NyaXB0LlxuICpcbiAqIFByaW1hcnkgSmF2YVNjcmlwdCBmaWxlLiBBbnkgaW5jbHVkZXMgb3IgYW55dGhpbmcgaW1wb3J0ZWQgc2hvdWxkIGJlIGZpbHRlcmVkIHRocm91Z2ggdGhpcyBmaWxlIFxuICogYW5kIGV2ZW50dWFsbHkgc2F2ZWQgYmFjayBpbnRvIHRoZSBgL2Fzc2V0cy9qcy9hcHAuanNgIGZpbGUuXG4gKlxuICogQHBhY2thZ2UgICBJbml0aWF0b3JcbiAqIEBhdXRob3IgICAgQmVuamFtaW4gTHUgPGJlbmx1bWlhMDA3QGdtYWlsLmNvbT5cbiAqIEBjb3B5cmlnaHQgMjAxOS0yMDIwIEJlbmphbWluIEx1XG4gKiBAbGljZW5zZSAgIGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvZ3BsLTIuMC5odG1sIEdQTC0yLjAtb3ItbGF0ZXJcbiAqIEBsaW5rICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2Jlbmx1bWlhMDA3L2luaXRpYXRvclxuICovXG5cbi8qKlxuICogQSBzaW1wbGUgaW1tZWRpYXRlbHktaW52b2tlZCBmdW5jdGlvbiBleHByZXNzaW9uIHRvIGtpY2stc3RhcnRcbiAqIHRoaW5ncyBhbmQgZW5jYXBzdWxhdGUgb3VyIGNvZGUuXG4gKlxuICogQHNpbmNlICAxLjAuMCBcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuKCBmdW5jdGlvbiggJCApIHtcblx0dmFyIGNvbnRhaW5lciwgYnV0dG9uLCBtZW51LCBsaW5rcywgc3ViTWVudXM7XG5cblx0Y29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGUtbmF2aWdhdGlvbicpO1xuXHRpZiAoIWNvbnRhaW5lcikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGJ1dHRvbiA9IGNvbnRhaW5lci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYnV0dG9uJylbMF07XG5cdGlmICgndW5kZWZpbmVkJyA9PT0gdHlwZW9mIGJ1dHRvbikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG1lbnUgPSBjb250YWluZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3VsJylbMF07XG5cblx0Ly8gSGlkZSBtZW51IHRvZ2dsZSBidXR0b24gaWYgbWVudSBpcyBlbXB0eSBhbmQgcmV0dXJuIGVhcmx5LlxuXHRpZiAoICd1bmRlZmluZWQnID09PSB0eXBlb2YgbWVudSApIHtcblx0XHRidXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtZW51LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuXHRpZiAoLTEgPT09IG1lbnUuY2xhc3NOYW1lLmluZGV4T2YoJ25hdi1tZW51JykpIHtcblx0XHRtZW51LmNsYXNzTmFtZSArPSAnbmF2LW1lbnUnO1xuXHR9XG5cblx0YnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoLTEgIT09IGNvbnRhaW5lci5jbGFzc05hbWUuaW5kZXhPZigndG9nZ2xlZCcpKSB7XG5cdFx0XHRjb250YWluZXIuY2xhc3NOYW1lID0gY29udGFpbmVyLmNsYXNzTmFtZS5yZXBsYWNlKCcgdG9nZ2xlZCcsICcnKTtcblx0XHRcdGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcblx0XHRcdG1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRhaW5lci5jbGFzc05hbWUgKz0gJyB0b2dnbGVkJztcblx0XHRcdGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuXHRcdFx0bWVudS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuXHRcdH1cblx0fTtcblxuXHQvLyBHZXQgYWxsIHRoZSBsaW5rIGVsZW1lbnRzIHdpdGhpbiB0aGUgbWVudS5cblx0bGlua3MgICAgPSBtZW51LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhJyk7XG5cdHN1Yk1lbnVzID0gbWVudS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndWwnKTtcblxuXHQvLyBTZXQgbWVudSBpdGVtcyB3aXRoIHN1Ym1lbnVzIHRvIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIuXG5cdGZvciAodmFyIGkgPSAwLCBsZW4gPSBzdWJNZW51cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdHN1Yk1lbnVzW2ldLnBhcmVudE5vZGUuc2V0QXR0cmlidXRlKCdhcmlhLWhhc3BvcHVwJywgJ3RydWUnKTtcblx0fVxuXG5cdC8vIEVhY2ggdGltZSBhIG1lbnUgbGluayBpcyBmb2N1c2VkIG9yIGJsdXJyZWQsIHRvZ2dsZSBmb2N1cy5cblx0Zm9yIChpID0gMCwgbGVuID0gbGlua3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRsaW5rc1tpXS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRvZ2dsZUZvY3VzLCB0cnVlKTtcblx0XHRsaW5rc1tpXS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdG9nZ2xlRm9jdXMsIHRydWUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldHMgb3IgcmVtb3ZlcyAuZm9jdXMgY2xhc3Mgb24gYW4gZWxlbWVudC5cblx0ICovXG5cdGZ1bmN0aW9uIHRvZ2dsZUZvY3VzKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIE1vdmUgdXAgdGhyb3VnaCB0aGUgYW5jZXN0b3JzIG9mIHRoZSBjdXJyZW50IGxpbmsgdW50aWwgd2UgaGl0IC5uYXYtbWVudS5cblx0XHR3aGlsZSAoLTEgPT09IHNlbGYuY2xhc3NOYW1lLmluZGV4T2YoJ25hdi1tZW51JykpIHtcblxuXHRcdFx0Ly8gT24gbGkgZWxlbWVudHMgdG9nZ2xlIHRoZSBjbGFzcyAuZm9jdXMuXG5cdFx0XHRpZiAoJ2xpJyA9PT0gc2VsZi50YWdOYW1lLnRvTG93ZXJDYXNlKCkpIHtcblx0XHRcdFx0aWYgKC0xICE9PSBzZWxmLmNsYXNzTmFtZS5pbmRleE9mKCdmb2N1cycpKSB7XG5cdFx0XHRcdFx0c2VsZi5jbGFzc05hbWUgPSBzZWxmLmNsYXNzTmFtZS5yZXBsYWNlKCdmb2N1cycsICcnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzZWxmLmNsYXNzTmFtZSArPSAnZm9jdXMnO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHNlbGYgPSBzZWxmLnBhcmVudEVsZW1lbnQ7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gaW5pdE1haW5OYXZpZ2F0aW9uKGNvbnRhaW5lcikge1xuXHRcdC8vIEFkZCBkcm9wZG93biB0b2dnbGUgdGhhdCBkaXNwbGF5IGNoaWxkIG1lbnUgaXRlbXMuXG5cdFx0Y29udGFpbmVyLmZpbmQoJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYSwgLnBhZ2VfaXRlbV9oYXNfY2hpbGRyZW4gPiBhJykuYWZ0ZXIoJzxidXR0b24gY2xhc3M9XCJkcm9wZG93bi10b2dnbGVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj4nICsgYmFja2Ryb3BTY3JlZW5SZWFkZXJUZXh0LmV4cGFuZCArICc8L2J1dHRvbj4nKTtcblxuXHRcdGNvbnRhaW5lci5maW5kKCcuZHJvcGRvd24tdG9nZ2xlJykuY2xpY2soZnVuY3Rpb24oZSkge1xuXHRcdFx0dmFyIF90aGlzID0gJCh0aGlzKTtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdF90aGlzLnRvZ2dsZUNsYXNzKCd0b2dnbGUtb24nKTtcblx0XHRcdF90aGlzLm5leHQoJy5jaGlsZHJlbiwgLnN1Yi1tZW51JykudG9nZ2xlQ2xhc3MoJ3RvZ2dsZWQtb24nKTtcblx0XHRcdF90aGlzLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBfdGhpcy5hdHRyKCdhcmlhLWV4cGFuZGVkJykgPT09ICdmYWxzZScgPyAndHJ1ZScgOiAnZmFsc2UnKTtcblx0XHRcdF90aGlzLmh0bWwoX3RoaXMuaHRtbCgpID09PSBiYWNrZHJvcFNjcmVlblJlYWRlclRleHQuZXhwYW5kID8gYmFja2Ryb3BTY3JlZW5SZWFkZXJUZXh0LmNvbGxhcHNlIDogYmFja2Ryb3BTY3JlZW5SZWFkZXJUZXh0LmV4cGFuZCk7XG5cdFx0fSk7XG5cdH1cblx0aW5pdE1haW5OYXZpZ2F0aW9uKCAkKCcucHJpbWFyeS1uYXZpZ2F0aW9uJykpO1xuXG5cdC8vIFJlLWluaXRpYWxpemUgdGhlIG1haW4gbmF2aWdhdGlvbiB3aGVuIGl0IGlzIHVwZGF0ZWQsIHBlcnNpc3RpbmcgYW55IGV4aXN0aW5nIHN1Ym1lbnUgZXhwYW5kZWQgc3RhdGVzLlxuXHQkKGRvY3VtZW50ICkub24oJ2N1c3RvbWl6ZS1wcmV2aWV3LW1lbnUtcmVmcmVzaGVkJywgZnVuY3Rpb24oZSwgcGFyYW1zKSB7XG5cdFx0aWYgKCdwcmltYXJ5LW5hdmlnYXRpb24nID09PSBwYXJhbXMud3BOYXZNZW51QXJncy50aGVtZV9sb2NhdGlvbikge1xuXHRcdFx0aW5pdE1haW5OYXZpZ2F0aW9uKCBwYXJhbXMubmV3Q29udGFpbmVyICk7XG5cblx0XHRcdC8vIFJlLXN5bmMgZXhwYW5kZWQgc3RhdGVzIGZyb20gb2xkQ29udGFpbmVyLlxuXHRcdFx0cGFyYW1zLm9sZENvbnRhaW5lci5maW5kKCcuZHJvcGRvd24tdG9nZ2xlLnRvZ2dsZS1vbicpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBjb250YWluZXJJZCA9ICQodGhpcykucGFyZW50KCkucHJvcCgnaWQnKTtcblx0XHRcdFx0JChwYXJhbXMubmV3Q29udGFpbmVyKS5maW5kKCcjJyArIGNvbnRhaW5lcklkICsgJyA+IC5kcm9wZG93bi10b2dnbGUnKS50cmlnZ2VySGFuZGxlcignY2xpY2snKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG5cblx0Ly8gSGlkZS9zaG93IHRvZ2dsZSBidXR0b24gb24gc2Nyb2xsXG5cblx0dmFyIHBvc2l0aW9uLCBkaXJlY3Rpb24sIHByZXZpb3VzO1xuXG5cdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcblx0XHRpZiggJCh0aGlzKS5zY3JvbGxUb3AoKSA+PSBwb3NpdGlvbiApe1xuXHRcdFx0ZGlyZWN0aW9uID0gJ2Rvd24nO1xuXHRcdFx0aWYoZGlyZWN0aW9uICE9PSBwcmV2aW91cyl7XG5cdFx0XHRcdCQoJy5tZW51LXRvZ2dsZScpLmFkZENsYXNzKCdoaWRlJyk7XG5cblx0XHRcdFx0cHJldmlvdXMgPSBkaXJlY3Rpb247XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRpcmVjdGlvbiA9ICd1cCc7XG5cdFx0XHRpZihkaXJlY3Rpb24gIT09IHByZXZpb3VzKXtcblx0XHRcdFx0JCgnLm1lbnUtdG9nZ2xlJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcblxuXHRcdFx0XHRwcmV2aW91cyA9IGRpcmVjdGlvbjtcblx0XHRcdH1cblx0XHR9XG5cdFx0cG9zaXRpb24gPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xuXHR9KTtcbn0gKSggalF1ZXJ5ICk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/app.js\n");

/***/ }),

/***/ "./resources/scss/editor.scss":
/*!************************************!*\
  !*** ./resources/scss/editor.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Nzcy9lZGl0b3Iuc2Nzcz83NjMxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL3Njc3MvZWRpdG9yLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/scss/editor.scss\n");

/***/ }),

/***/ "./resources/scss/screen.scss":
/*!************************************!*\
  !*** ./resources/scss/screen.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Nzcy9zY3JlZW4uc2Nzcz80MTk0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL3Njc3Mvc2NyZWVuLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/scss/screen.scss\n");

/***/ }),

/***/ 0:
/*!*********************************************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/scss/screen.scss ./resources/scss/editor.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/benlumia007/WordPress/sites/initiator/public_html/wp-content/themes/initiator/resources/js/app.js */"./resources/js/app.js");
__webpack_require__(/*! /home/benlumia007/WordPress/sites/initiator/public_html/wp-content/themes/initiator/resources/scss/screen.scss */"./resources/scss/screen.scss");
module.exports = __webpack_require__(/*! /home/benlumia007/WordPress/sites/initiator/public_html/wp-content/themes/initiator/resources/scss/editor.scss */"./resources/scss/editor.scss");


/***/ })

/******/ });