"use strict";
var SessionController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionController = void 0;
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const routing_controllers_openapi_1 = require("routing-controllers-openapi");
const jsonwebtoken_1 = require("jsonwebtoken");
const leanengine_1 = require("leanengine");
const leancloud_storage_1 = require("leancloud-storage");
const model_1 = require("../model");
const utility_1 = require("../utility");
const { ROOT_ACCOUNT, LEANCLOUD_APP_KEY } = process.env;
let SessionController = SessionController_1 = class SessionController {
    static signToken(user) {
        return jsonwebtoken_1.sign({ token: user.getSessionToken(), roles: user.get('roles') }, LEANCLOUD_APP_KEY, { expiresIn: '7d' });
    }
    sendSMSCode({ mobilePhoneNumber: phone }) {
        return leancloud_storage_1.Cloud.requestSmsCode(phone);
    }
    async signInWithPhone({ mobilePhoneNumber: phone, verificationCode: code }) {
        const user = await leanengine_1.User.signUpOrlogInWithMobilePhone(phone, code);
        if (!user.get('roles') && phone === ROOT_ACCOUNT)
            await user.save({ roles: [model_1.UserRole.Admin] }, { user });
        return { token: SessionController_1.signToken(user) };
    }
    async signInWithWechat({ code }) {
        const _a = await utility_1.getWechatSession(code), { unionid, session_key } = _a, data = tslib_1.__rest(_a, ["unionid", "session_key"]);
        const user = await (unionid
            ? leanengine_1.User.loginWithWeappWithUnionId(unionid)
            : leanengine_1.User.loginWithAuthData(Object.assign({ access_token: session_key }, data), 'weixin'));
        return { token: SessionController_1.signToken(user) };
    }
    async getProfile(user) {
        return (await user.fetch()).toJSON();
    }
    async editProfile(user, _a) {
        var { roles } = _a, data = tslib_1.__rest(_a, ["roles"]);
        if (roles)
            throw new routing_controllers_1.ForbiddenError();
        return (await user.save(data, { user, fetchWhenSave: true })).toJSON();
    }
    async destroy() {
        await leanengine_1.User.logOut();
    }
};
tslib_1.__decorate([
    routing_controllers_1.Post('/smsCode'),
    tslib_1.__param(0, routing_controllers_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [model_1.SMSCodeRequest]),
    tslib_1.__metadata("design:returntype", void 0)
], SessionController.prototype, "sendSMSCode", null);
tslib_1.__decorate([
    routing_controllers_1.Post(),
    routing_controllers_openapi_1.ResponseSchema(model_1.SignInResponse),
    tslib_1.__param(0, routing_controllers_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [model_1.SignInPhoneRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], SessionController.prototype, "signInWithPhone", null);
tslib_1.__decorate([
    routing_controllers_1.Post(),
    routing_controllers_openapi_1.ResponseSchema(model_1.SignInResponse),
    tslib_1.__param(0, routing_controllers_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [model_1.SignInOAuthRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], SessionController.prototype, "signInWithWechat", null);
tslib_1.__decorate([
    routing_controllers_1.Get(),
    routing_controllers_1.Authorized(),
    routing_controllers_openapi_1.ResponseSchema(model_1.UserModel),
    tslib_1.__param(0, routing_controllers_1.CurrentUser()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [leanengine_1.User]),
    tslib_1.__metadata("design:returntype", Promise)
], SessionController.prototype, "getProfile", null);
tslib_1.__decorate([
    routing_controllers_1.Patch(),
    routing_controllers_1.Authorized(),
    routing_controllers_openapi_1.ResponseSchema(model_1.UserModel),
    tslib_1.__param(0, routing_controllers_1.CurrentUser()),
    tslib_1.__param(1, routing_controllers_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [leanengine_1.User,
        model_1.UserModel]),
    tslib_1.__metadata("design:returntype", Promise)
], SessionController.prototype, "editProfile", null);
tslib_1.__decorate([
    routing_controllers_1.Delete(),
    routing_controllers_1.Authorized(),
    routing_controllers_1.OnUndefined(204),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SessionController.prototype, "destroy", null);
SessionController = SessionController_1 = tslib_1.__decorate([
    routing_controllers_1.JsonController('/session')
], SessionController);
exports.SessionController = SessionController;
//# sourceMappingURL=Session.js.map