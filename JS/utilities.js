(() => {
  var l = class {
    constructor({ clientId: e, ...n } = {}) {
      this.options = {
        activeClass: "nfd-wb-animated-in",
        root: null,
        rootMargin: "0px",
        threshold: 0,
        ...n,
      };
    }
    observeElements(e, n = null, t = !1) {
      if (!("IntersectionObserver" in window)) return;
      function a(o, s) {
        this._mutationCallback(o, s, n);
      }
      let i = new IntersectionObserver(
          this._handleIntersection.bind(this),
          this.options
        ),
        d = new MutationObserver(a.bind(this)),
        u = new MutationObserver(this._handleClassMutation.bind(this));
      e.forEach((o) => {
        let s = o;
        o.classList.contains("nfd-wb-reveal-right") && (s = o.parentElement),
          i.observe(s),
          t &&
            (u.observe(s, { attributes: !0, attributeFilter: ["class"] }),
            d.observe(s, { attributes: !0, attributeFilter: ["class"] }));
      });
    }
    _handleIntersection(e, n) {
      e.forEach((t) => {
        t.isIntersecting &&
          (t.target.classList.add(this.options.activeClass),
          t.target.querySelectorAll(".nfd-wb-animate").forEach((a) => {
            a.classList.add(this.options.activeClass);
          }),
          n.unobserve(t.target));
      });
    }
    _handleClassMutation(e) {
      e.forEach((n) => {
        if (n?.type === "attributes") {
          let t = n.target;
          t.classList.contains("nfd-wb-animated-in") ||
            t.classList.add("nfd-wb-animated-in");
        }
      });
    }
    _mutationCallback(e, n, t = null) {
      e.forEach((a) => {
        if (a?.type === "attributes") {
          let i = a.target;
          t &&
            t === i.getAttribute("data-block") &&
            (i.getAttribute("data-replay-animation") === null &&
              (i.setAttribute("data-replay-animation", !0),
              setTimeout(() => {
                i.removeAttribute("data-replay-animation");
              }, 50)),
            n.disconnect());
        }
      });
    }
  };
  document.addEventListener("DOMContentLoaded", () => {
    c();
  });
  document.addEventListener("wonder-blocks/toolbar-button-added", () => {
    c();
  });
  document.addEventListener("wonder-blocks/animation-changed", (r) => {
    let e = r?.detail?.clientId;
    c(e);
  });
  function c(r = null) {
    let e = document.body.classList.contains("block-editor-page"),
      n = new l({
        root: e
          ? document.querySelector(".interface-interface-skeleton__content")
          : null,
        threshold: 0.2,
      });
    setTimeout(() => {
      let t = Array.from(document.getElementsByClassName("nfd-wb-animate"));
      n.observeElements(t, r, e);
    }, 10);
  }
})();
