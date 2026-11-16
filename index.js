import { eventBus as e } from "@vp/common";
// src/navigation.ts
var t = class extends HTMLElement {
	connectedCallback() {
		if (this.shadowRoot) return;
		let t = this.attachShadow({ mode: "open" });
		t.innerHTML = "\n      <nav>\n        <a href=\"/\">Home</a>\n        <a href=\"/products\">Products</a>\n        <a href=\"/account\">Account</a>\n      </nav>\n    ", e.emit("navigation:loaded", {});
	}
};
customElements.get("vp-navigation") || customElements.define("vp-navigation", t);
export { t as MyNavigation };
