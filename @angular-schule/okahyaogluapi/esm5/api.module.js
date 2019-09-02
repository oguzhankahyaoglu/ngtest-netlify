import * as tslib_1 from "tslib";
import { NgModule, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from './api/project.service';
import { WorkexperienceService } from './api/workexperience.service';
var ApiModule = /** @class */ (function () {
    function ApiModule(parentModule, http) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                'See also https://github.com/angular/angular/issues/20575');
        }
    }
    ApiModule_1 = ApiModule;
    ApiModule.forRoot = function (configurationFactory) {
        return {
            ngModule: ApiModule_1,
            providers: [{ provide: Configuration, useFactory: configurationFactory }]
        };
    };
    var ApiModule_1;
    ApiModule = ApiModule_1 = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [],
            exports: [],
            providers: [
                ProjectService,
                WorkexperienceService
            ]
        }),
        tslib_1.__param(0, Optional()), tslib_1.__param(0, SkipSelf()),
        tslib_1.__param(1, Optional()),
        tslib_1.__metadata("design:paramtypes", [ApiModule,
            HttpClient])
    ], ApiModule);
    return ApiModule;
}());
export { ApiModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXNjaHVsZS9va2FoeWFvZ2x1YXBpLyIsInNvdXJjZXMiOlsiYXBpLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQVVyRTtJQVFJLG1CQUFxQyxZQUF1QixFQUNuQyxJQUFnQjtRQUNyQyxJQUFJLFlBQVksRUFBRTtZQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsa0VBQWtFLENBQUMsQ0FBQztTQUN2RjtRQUNELElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDUCxNQUFNLElBQUksS0FBSyxDQUFDLCtEQUErRDtnQkFDL0UsMERBQTBELENBQUMsQ0FBQztTQUMvRDtJQUNMLENBQUM7a0JBakJRLFNBQVM7SUFDSixpQkFBTyxHQUFyQixVQUFzQixvQkFBeUM7UUFDM0QsT0FBTztZQUNILFFBQVEsRUFBRSxXQUFTO1lBQ25CLFNBQVMsRUFBRSxDQUFFLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsb0JBQW9CLEVBQUUsQ0FBRTtTQUM5RSxDQUFDO0lBQ04sQ0FBQzs7SUFOUSxTQUFTO1FBUnJCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBTyxFQUFFO1lBQ2hCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLE9BQU8sRUFBTyxFQUFFO1lBQ2hCLFNBQVMsRUFBRTtnQkFDVCxjQUFjO2dCQUNkLHFCQUFxQjthQUFFO1NBQzFCLENBQUM7UUFTZ0IsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtRQUN0QixtQkFBQSxRQUFRLEVBQUUsQ0FBQTtpREFEMkIsU0FBUztZQUM3QixVQUFVO09BVGhDLFNBQVMsQ0FrQnJCO0lBQUQsZ0JBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWxCWSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIFNraXBTZWxmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi9jb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcblxyXG5pbXBvcnQgeyBQcm9qZWN0U2VydmljZSB9IGZyb20gJy4vYXBpL3Byb2plY3Quc2VydmljZSc7XHJcbmltcG9ydCB7IFdvcmtleHBlcmllbmNlU2VydmljZSB9IGZyb20gJy4vYXBpL3dvcmtleHBlcmllbmNlLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiAgICAgIFtdLFxyXG4gIGRlY2xhcmF0aW9uczogW10sXHJcbiAgZXhwb3J0czogICAgICBbXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIFByb2plY3RTZXJ2aWNlLFxyXG4gICAgV29ya2V4cGVyaWVuY2VTZXJ2aWNlIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwaU1vZHVsZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlndXJhdGlvbkZhY3Rvcnk6ICgpID0+IENvbmZpZ3VyYXRpb24pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZ01vZHVsZTogQXBpTW9kdWxlLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBDb25maWd1cmF0aW9uLCB1c2VGYWN0b3J5OiBjb25maWd1cmF0aW9uRmFjdG9yeSB9IF1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IEFwaU1vZHVsZSxcclxuICAgICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgICAgICAgaWYgKHBhcmVudE1vZHVsZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FwaU1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGluIHlvdXIgYmFzZSBBcHBNb2R1bGUgb25seS4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFodHRwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG5lZWQgdG8gaW1wb3J0IHRoZSBIdHRwQ2xpZW50TW9kdWxlIGluIHlvdXIgQXBwTW9kdWxlISBcXG4nICtcclxuICAgICAgICAgICAgJ1NlZSBhbHNvIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzIwNTc1Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==