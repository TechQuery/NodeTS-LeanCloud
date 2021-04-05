"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserList = exports.UserModel = exports.UserRole = void 0;
const tslib_1 = require("tslib");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const Base_1 = require("./Base");
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "Admin";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
class UserModel extends Base_1.BaseModel {
}
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], UserModel.prototype, "username", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsEmail(),
    tslib_1.__metadata("design:type", String)
], UserModel.prototype, "email", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsMobilePhone('zh-CN'),
    tslib_1.__metadata("design:type", String)
], UserModel.prototype, "mobilePhoneNumber", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsArray(),
    tslib_1.__metadata("design:type", Array)
], UserModel.prototype, "roles", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsUrl(),
    tslib_1.__metadata("design:type", String)
], UserModel.prototype, "avatar", void 0);
exports.UserModel = UserModel;
class UserList {
}
tslib_1.__decorate([
    class_validator_1.IsPositive(),
    tslib_1.__metadata("design:type", Number)
], UserList.prototype, "count", void 0);
tslib_1.__decorate([
    class_validator_1.ValidateNested({ each: true }),
    class_transformer_1.Type(() => UserModel),
    tslib_1.__metadata("design:type", Array)
], UserList.prototype, "data", void 0);
exports.UserList = UserList;
//# sourceMappingURL=User.js.map