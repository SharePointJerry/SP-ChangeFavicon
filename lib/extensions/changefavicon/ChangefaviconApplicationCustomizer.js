var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
var LOG_SOURCE = 'ChangefaviconApplicationCustomizer';
/** A Custom Action which can be run during execution of a Client Side Application */
var ChangefaviconApplicationCustomizer = (function (_super) {
    __extends(ChangefaviconApplicationCustomizer, _super);
    function ChangefaviconApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChangefaviconApplicationCustomizer.prototype.onInit = function () {
        var url = this.properties.favicon;
        if (!url) {
            Log.info(LOG_SOURCE, 'Icon URL was not provided.');
        }
        else {
            var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
            link.setAttribute('type', 'image/x-icon');
            link.setAttribute('rel', 'shortcut icon');
            link.setAttribute('href', url);
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        return Promise.resolve();
    };
    __decorate([
        override
    ], ChangefaviconApplicationCustomizer.prototype, "onInit", null);
    return ChangefaviconApplicationCustomizer;
}(BaseApplicationCustomizer));
export default ChangefaviconApplicationCustomizer;
//# sourceMappingURL=ChangefaviconApplicationCustomizer.js.map