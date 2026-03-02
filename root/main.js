var url_string = window.location.href;
var url = new URL(url_string);
var q = window.atob(url.searchParams.get("topictd"));
var k = window.atob(url.searchParams.get("tdkey"));
var r = url.searchParams.get("td");
if (r == "valid") {
  document.getElementById("preId").value = q;
  document.getElementById("preK").value = k;
  readgenTOD();
} else {
  $("#intro").show();
}
(function hideMathLiveVKToggle() {
  const STYLE_ID = "hide-ml-vk-toggle";

  function injectStyle(shadowRoot) {
    if (shadowRoot.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .ML__container .ML__virtual-keyboard-toggle {
        display: none !important;
      }
    `;
    shadowRoot.appendChild(style);
  }

  function scanMathLive() {
    document.querySelectorAll("#preTD math-field").forEach((mf) => {
      if (mf.shadowRoot) {
        injectStyle(mf.shadowRoot);
      }
    });
    document.querySelectorAll("#textBox math-field").forEach((mf) => {
      if (mf.shadowRoot) {
        injectStyle(mf.shadowRoot);
      }
    });
  }

  scanMathLive();

  const observer = new MutationObserver(() => scanMathLive());
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
