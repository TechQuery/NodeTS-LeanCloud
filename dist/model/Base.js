"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseQuery = exports.CoordinateModel = exports.FileModel = exports.BaseModel = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class BaseModel {
}
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsUUID(),
    tslib_1.__metadata("design:type", String)
], BaseModel.prototype, "objectId", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsDateString(),
    tslib_1.__metadata("design:type", String)
], BaseModel.prototype, "createdAt", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsDateString(),
    tslib_1.__metadata("design:type", String)
], BaseModel.prototype, "updatedAt", void 0);
exports.BaseModel = BaseModel;
class FileModel extends BaseModel {
}
tslib_1.__decorate([
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], FileModel.prototype, "provider", void 0);
tslib_1.__decorate([
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], FileModel.prototype, "bucket", void 0);
tslib_1.__decorate([
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], FileModel.prototype, "name", void 0);
tslib_1.__decorate([
    class_validator_1.IsUrl(),
    tslib_1.__metadata("design:type", String)
], FileModel.prototype, "url", void 0);
exports.FileModel = FileModel;
class CoordinateModel {
}
tslib_1.__decorate([
    class_validator_1.IsPositive(),
    tslib_1.__metadata("design:type", Number)
], CoordinateModel.prototype, "latitude", void 0);
tslib_1.__decorate([
    class_validator_1.IsPositive(),
    tslib_1.__metadata("design:type", Number)
], CoordinateModel.prototype, "longitude", void 0);
exports.CoordinateModel = CoordinateModel;
class BaseQuery {
}
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsPositive(),
    tslib_1.__metadata("design:type", Number)
], BaseQuery.prototype, "pageSize", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsPositive(),
    tslib_1.__metadata("design:type", Number)
], BaseQuery.prototype, "pageIndex", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], BaseQuery.prototype, "keyword", void 0);
exports.BaseQuery = BaseQuery;
//# sourceMappingURL=Base.js.map