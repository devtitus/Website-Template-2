!(function (e) {
  var n = {};
  function a(i) {
    if (n[i]) return n[i].exports;
    var l = (n[i] = { i: i, l: !1, exports: {} });
    return e[i].call(l.exports, l, l.exports, a), (l.l = !0), l.exports;
  }
  (a.m = e),
    (a.c = n),
    (a.d = function (e, n, i) {
      a.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: i });
    }),
    (a.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function (e, n) {
      if ((1 & n && (e = a(e)), 8 & n)) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (a.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var l in e)
          a.d(
            i,
            l,
            function (n) {
              return e[n];
            }.bind(null, l)
          );
      return i;
    }),
    (a.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return a.d(n, "a", n), n;
    }),
    (a.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (a.p = ""),
    a((a.s = 25));
})({
  25: function (e, n) {
    var a = function (e, n) {
      var a = n(".eael-simple-menu-container", e).data("indicator-class"),
        i = n(".eael-simple-menu-container", e).data("hamburger-icon"),
        l = n(".eael-simple-menu-container", e).data("indicator"),
        s = n(".eael-simple-menu-container", e).data("dropdown-indicator"),
        t = n(".eael-simple-menu-container", e).data(
          "dropdown-indicator-class"
        ),
        r = n(".eael-simple-menu", e).hasClass("eael-simple-menu-horizontal"),
        o = n(".eael-simple-menu-container", e).data("hamburger-breakpoints"),
        m = n(".eael-simple-menu-container", e).data("hamburger-device");
      (void 0 !== m && "" !== m && null !== m) || (m = "tablet");
      var p = r ? ".eael-simple-menu-horizontal" : ".eael-simple-menu-vertical",
        u = (function (e, n) {
          var a = 0;
          if ("none" === n || void 0 === n || "" === n || null === n) return a;
          for (var i in e) i == n && (a = e[i]);
          return (a = a.replace(/[^0-9]/g, ""));
        })(o, m),
        c = (n(".eael-simple-menu--stretch"), []);
      function d() {
        var a =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        if (window.matchMedia("(max-width: " + a + "px)").matches)
          if (
            (n(".eael-simple-menu-container", e).addClass(
              "eael-simple-menu-hamburger"
            ),
            n(p, e).addClass("eael-simple-menu-responsive"),
            n(".eael-simple-menu-toggle-text", e).text(
              n(".eael-simple-menu-horizontal .current-menu-item a", e)
                .eq(0)
                .text()
            ),
            n(".eael-simple-menu-container", e)
              .closest(".elementor-widget-eael-simple-menu")
              .removeClass("eael-hamburger--not-responsive")
              .addClass("eael-hamburger--responsive"),
            n(".eael-simple-menu-container", e).hasClass(
              "eael-simple-menu--stretch"
            ))
          ) {
            var i = {};
            n(p, e).parent().hasClass("eael-nav-menu-wrapper") ||
              n(p, e).wrap('<nav class="eael-nav-menu-wrapper"></nav>');
            var l = n(".eael-simple-menu-container nav", e);
            h(l),
              (i.width = parseFloat(n(".elementor").width()) + "px"),
              (i.left = -parseFloat(l.offset().left) + "px"),
              (i.position = "absolute"),
              l.css(i);
          } else {
            var s = {};
            n(p, e).parent().hasClass("eael-nav-menu-wrapper") ||
              n(p, e).wrap('<nav class="eael-nav-menu-wrapper"></nav>');
            var t = n(".eael-simple-menu-container nav", e);
            h(t),
              (s.width = ""),
              (s.left = ""),
              (s.position = "inherit"),
              t.css(s);
          }
        else
          n(".eael-simple-menu-container", e).removeClass(
            "eael-simple-menu-hamburger"
          ),
            n(p, e).removeClass("eael-simple-menu-responsive"),
            n(p + ", " + p + " ul", e).css("display", ""),
            n(".eael-simple-menu-container nav", e).removeAttr("style"),
            n(".eael-simple-menu-container", e)
              .closest(".elementor-widget-eael-simple-menu")
              .removeClass("eael-hamburger--responsive")
              .addClass("eael-hamburger--not-responsive");
      }
      function h(e) {
        var n = { width: "", left: "", position: "inherit" };
        e.css(n);
      }
      n(".eael-simple-menu li a", e).each(function () {
        var e,
          a = n(this),
          i = a.attr("href"),
          l = i,
          s = void 0 !== l ? l.split("#") : [];
        (e = (i = void 0 === i ? "" : i).startsWith("#")),
          "#" !== i &&
            s.length > 1 &&
            localize.page_permalink === s[0] &&
            s[1] &&
            c.push(s[1]),
          e || localize.page_permalink !== l || a.addClass("eael-item-active");
      }),
        n(window).on("load resize scroll", function () {
          c.length > 0 &&
            n.each(c, function (a, i) {
              n("#" + i).isInViewport()
                ? n(
                    'a[href="' + localize.page_permalink + "#" + i + '"]',
                    e
                  ).addClass("eael-menu-" + i + " eael-item-active")
                : n(".eael-menu-" + i).removeClass(
                    "eael-menu-" + i + " eael-item-active"
                  );
            });
        }),
        r &&
          ("svg" == l
            ? n(".eael-simple-menu > li.menu-item-has-children", e).each(
                function () {
                  n("> a", n(this)).append(
                    '<span class="indicator-svg">' + a + "</span>"
                  );
                }
              )
            : n(".eael-simple-menu > li.menu-item-has-children", e).each(
                function () {
                  n("> a", n(this)).append('<span class="' + a + '"></span>');
                }
              ),
          "svg" == s
            ? n(".eael-simple-menu > li ul li.menu-item-has-children", e).each(
                function () {
                  n("> a", n(this)).append(
                    '<span class="dropdown-indicator-svg">' + t + "</span>"
                  );
                }
              )
            : n(".eael-simple-menu > li ul li.menu-item-has-children", e).each(
                function () {
                  n("> a", n(this)).append('<span class="' + t + '"></span>');
                }
              )),
        n(p, e)
          .before('<span class="eael-simple-menu-toggle-text"></span>')
          .after(
            '<button class="eael-simple-menu-toggle">' +
              i +
              '<span class="eael-simple-menu-toggle-text"></span></button>'
          ),
        d(u),
        n(".eael-simple-menu-container", e).on(
          "click",
          ".eael-simple-menu-toggle",
          function (e) {
            e.preventDefault();
            var a = n(this).siblings("nav").children(p);
            "none" == a.css("display") ? a.slideDown(300) : a.slideUp(300);
          }
        ),
        n(window).on("resize load", function () {
          d(u);
        }),
        n(".eael-simple-menu > li.menu-item-has-children", e).each(function () {
          if ("svg" == l) {
            parseInt(n("a", this).css("line-height"));
            n(this).append(
              '<span class="eael-simple-menu-indicator"> ' + a + "</span>"
            );
          } else {
            parseInt(n("a", this).css("line-height"));
            n(this).append(
              '<span class="eael-simple-menu-indicator ' + a + '"></span>'
            );
          }
        }),
        n(".eael-simple-menu > li ul li.menu-item-has-children", e).each(
          function (e) {
            if ("svg" == s) {
              parseInt(n("a", this).css("line-height"));
              n(this).append(
                '<span class="eael-simple-menu-indicator"> ' + t + "</span>"
              );
            } else {
              parseInt(n("a", this).css("line-height"));
              n(this).append(
                '<span class="eael-simple-menu-indicator ' + t + '"></span>'
              );
            }
          }
        ),
        n(
          ".eael-simple-menu-dropdown-align-left .eael-simple-menu-vertical li.menu-item-has-children"
        ).each(function () {
          var e = parseInt(n("a", n(this)).css("padding-left"));
          n("ul li a", this).css({ "padding-left": e + 20 + "px" });
        }),
        n(
          ".eael-simple-menu-dropdown-align-right .eael-simple-menu-vertical li.menu-item-has-children"
        ).each(function () {
          var e = parseInt(n("a", n(this)).css("padding-right"));
          n("ul li a", this).css({ "padding-right": e + 20 + "px" });
        }),
        n(".eael-simple-menu-container", e).on(
          "click",
          '.eael-simple-menu-responsive li a:not([href="#"])',
          function (e) {
            n(this).parents(p).slideUp(300);
          }
        ),
        n(".eael-simple-menu", e).on("click", 'a[href="#"]', function (e) {
          e.preventDefault(),
            n(this).siblings(".eael-simple-menu-indicator").click();
        }),
        n(".eael-simple-menu", e).on(
          "click",
          ".eael-simple-menu-indicator",
          function (e) {
            e.preventDefault(),
              n(this).toggleClass("eael-simple-menu-indicator-open"),
              n(this).hasClass("eael-simple-menu-indicator-open")
                ? n(this).siblings("ul").slideDown(300)
                : n(this).siblings("ul").slideUp(300),
              n(".eael-simple-menu-indicator-open")
                .not(
                  n(this).parents(".menu-item-has-children").children("span")
                )
                .removeClass("eael-simple-menu-indicator-open")
                .siblings("ul")
                .slideUp(300);
          }
        ),
        elementorFrontend.isEditMode() &&
          elementor.channels.editor.on("change", function (e) {
            e.elementSettingsModel.changed.eael_simple_menu_dropdown &&
              elementor.saver.update.apply().then(function () {
                elementor.reloadPreview();
              });
          });
    };
    jQuery(window).on("elementor/frontend/init", function () {
      if (ea.elementStatusCheck("eaelSimpleMenu")) return !1;
      elementorFrontend.hooks.addAction(
        "frontend/element_ready/eael-simple-menu.default",
        a
      );
    });
  },
});
