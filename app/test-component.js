System.register(['@angular/core', './services/logging.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, logging_service_1;
    var TestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logging_service_1_1) {
                logging_service_1 = logging_service_1_1;
            }],
        execute: function() {
            TestComponent = (function () {
                function TestComponent(_loggingService) {
                    this._loggingService = _loggingService;
                }
                TestComponent.prototype.onLog = function (message) {
                    this._loggingService.log(message);
                };
                TestComponent = __decorate([
                    core_1.Component({
                        selector: 'test-component',
                        template: "<h1\n\t\t\t\t[class.highlight]=\"localVarible.value === 'yes'\">\n\t\t\t\t\tLook at some cool data binding\n\t\t\t\t</h1>\n\t\t\t\t<input type=\"text\" #localVarible (keyup)=\"onLog(localVarible.value)\"/>",
                        styleUrls: ['src/css/test-component.css'],
                        providers: [logging_service_1.LoggingService]
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService])
                ], TestComponent);
                return TestComponent;
            }());
            exports_1("TestComponent", TestComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBQ0MsdUJBQW9CLGVBQStCO29CQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7Z0JBQUcsQ0FBQztnQkFFdkQsNkJBQUssR0FBTCxVQUFNLE9BQWU7b0JBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQWhCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFFBQVEsRUFBRSwrTUFJZ0U7d0JBQzFFLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO3dCQUN6QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO3FCQUMzQixDQUFDOztpQ0FBQTtnQkFRRixvQkFBQztZQUFELENBTkEsQUFNQyxJQUFBO1lBTkQseUNBTUMsQ0FBQSIsImZpbGUiOiJ0ZXN0LWNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtMb2dnaW5nU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9sb2dnaW5nLnNlcnZpY2UnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAndGVzdC1jb21wb25lbnQnLFxyXG5cdHRlbXBsYXRlOiBgPGgxXHJcblx0XHRcdFx0W2NsYXNzLmhpZ2hsaWdodF09XCJsb2NhbFZhcmlibGUudmFsdWUgPT09ICd5ZXMnXCI+XHJcblx0XHRcdFx0XHRMb29rIGF0IHNvbWUgY29vbCBkYXRhIGJpbmRpbmdcclxuXHRcdFx0XHQ8L2gxPlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiICNsb2NhbFZhcmlibGUgKGtleXVwKT1cIm9uTG9nKGxvY2FsVmFyaWJsZS52YWx1ZSlcIi8+YCxcclxuXHRzdHlsZVVybHM6IFsnc3JjL2Nzcy90ZXN0LWNvbXBvbmVudC5jc3MnXSxcclxuXHRwcm92aWRlcnM6IFtMb2dnaW5nU2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXN0Q29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2dnaW5nU2VydmljZTogTG9nZ2luZ1NlcnZpY2UpIHt9XHJcblxyXG5cdG9uTG9nKG1lc3NhZ2U6IHN0cmluZykge1xyXG5cdFx0dGhpcy5fbG9nZ2luZ1NlcnZpY2UubG9nKG1lc3NhZ2UpO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
