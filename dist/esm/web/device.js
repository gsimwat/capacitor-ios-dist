import { __awaiter, __extends, __generator } from "tslib";
import { WebPlugin } from './index';
import { uuid4 } from '../util';
var DevicePluginWeb = /** @class */ (function (_super) {
    __extends(DevicePluginWeb, _super);
    function DevicePluginWeb() {
        return _super.call(this, {
            name: 'Device',
            platforms: ['web']
        }) || this;
    }
    DevicePluginWeb.prototype.getInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ua, uaFields;
            return __generator(this, function (_a) {
                ua = navigator.userAgent;
                uaFields = this.parseUa(ua);
                return [2 /*return*/, Promise.resolve({
                        model: uaFields.model,
                        platform: 'web',
                        appVersion: '',
                        appBuild: '',
                        appId: '',
                        appName: '',
                        operatingSystem: uaFields.operatingSystem,
                        osVersion: uaFields.osVersion,
                        manufacturer: navigator.vendor,
                        isVirtual: false,
                        uuid: this.getUid()
                    })];
            });
        });
    };
    DevicePluginWeb.prototype.getBatteryInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var battery, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        battery = {};
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, navigator.getBattery()];
                    case 2:
                        battery = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, Promise.resolve({
                            batteryLevel: battery.level,
                            isCharging: battery.charging
                        })];
                }
            });
        });
    };
    DevicePluginWeb.prototype.getLanguageCode = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, {
                        value: navigator.language
                    }];
            });
        });
    };
    DevicePluginWeb.prototype.parseUa = function (_ua) {
        var uaFields = {};
        var start = _ua.indexOf('(') + 1;
        var end = _ua.indexOf(') AppleWebKit');
        if (_ua.indexOf(') Gecko') !== -1) {
            end = _ua.indexOf(') Gecko');
        }
        var fields = _ua.substring(start, end);
        if (_ua.indexOf('Android') !== -1) {
            uaFields.model = fields.replace('; wv', '').split('; ').pop().split(' Build')[0];
            uaFields.osVersion = fields.split('; ')[1];
        }
        else {
            uaFields.model = fields.split('; ')[0];
            if (navigator.oscpu) {
                uaFields.osVersion = navigator.oscpu;
            }
            else {
                if (_ua.indexOf('Windows') !== -1) {
                    uaFields.osVersion = fields;
                }
                else {
                    var lastParts = fields.split('; ').pop().replace(' like Mac OS X', '').split(' ');
                    uaFields.osVersion = lastParts[lastParts.length - 1].replace(/_/g, '.');
                }
            }
        }
        if (/android/i.test(_ua)) {
            uaFields.operatingSystem = 'android';
        }
        else if (/iPad|iPhone|iPod/.test(_ua) && !window.MSStream) {
            uaFields.operatingSystem = 'ios';
        }
        else if (/Win/.test(_ua)) {
            uaFields.operatingSystem = 'windows';
        }
        else if (/Mac/i.test(_ua)) {
            uaFields.operatingSystem = 'mac';
        }
        else {
            uaFields.operatingSystem = 'unknown';
        }
        return uaFields;
    };
    DevicePluginWeb.prototype.getUid = function () {
        var uid = window.localStorage.getItem('_capuid');
        if (uid) {
            return uid;
        }
        uid = uuid4();
        window.localStorage.setItem('_capuid', uid);
        return uid;
    };
    return DevicePluginWeb;
}(WebPlugin));
export { DevicePluginWeb };
var Device = new DevicePluginWeb();
export { Device };
//# sourceMappingURL=device.js.map