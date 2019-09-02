import * as tslib_1 from "tslib";
var ApiModule_1;
import { NgModule, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from './api/project.service';
import { WorkexperienceService } from './api/workexperience.service';
let ApiModule = ApiModule_1 = class ApiModule {
    constructor(parentModule, http) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                'See also https://github.com/angular/angular/issues/20575');
        }
    }
    static forRoot(configurationFactory) {
        return {
            ngModule: ApiModule_1,
            providers: [{ provide: Configuration, useFactory: configurationFactory }]
        };
    }
};
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
export { ApiModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXNjaHVsZS9va2FoeWFvZ2x1YXBpLyIsInNvdXJjZXMiOlsiYXBpLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUdsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFVckUsSUFBYSxTQUFTLGlCQUF0QixNQUFhLFNBQVM7SUFRbEIsWUFBcUMsWUFBdUIsRUFDbkMsSUFBZ0I7UUFDckMsSUFBSSxZQUFZLEVBQUU7WUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLGtFQUFrRSxDQUFDLENBQUM7U0FDdkY7UUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1AsTUFBTSxJQUFJLEtBQUssQ0FBQywrREFBK0Q7Z0JBQy9FLDBEQUEwRCxDQUFDLENBQUM7U0FDL0Q7SUFDTCxDQUFDO0lBaEJNLE1BQU0sQ0FBQyxPQUFPLENBQUMsb0JBQXlDO1FBQzNELE9BQU87WUFDSCxRQUFRLEVBQUUsV0FBUztZQUNuQixTQUFTLEVBQUUsQ0FBRSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLG9CQUFvQixFQUFFLENBQUU7U0FDOUUsQ0FBQztJQUNOLENBQUM7Q0FZSixDQUFBO0FBbEJZLFNBQVM7SUFSckIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFPLEVBQUU7UUFDaEIsWUFBWSxFQUFFLEVBQUU7UUFDaEIsT0FBTyxFQUFPLEVBQUU7UUFDaEIsU0FBUyxFQUFFO1lBQ1QsY0FBYztZQUNkLHFCQUFxQjtTQUFFO0tBQzFCLENBQUM7SUFTZ0IsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtJQUN0QixtQkFBQSxRQUFRLEVBQUUsQ0FBQTs2Q0FEMkIsU0FBUztRQUM3QixVQUFVO0dBVGhDLFNBQVMsQ0FrQnJCO1NBbEJZLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgU2tpcFNlbGYsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuXHJcbmltcG9ydCB7IFByb2plY3RTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvcHJvamVjdC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgV29ya2V4cGVyaWVuY2VTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvd29ya2V4cGVyaWVuY2Uuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6ICAgICAgW10sXHJcbiAgZGVjbGFyYXRpb25zOiBbXSxcclxuICBleHBvcnRzOiAgICAgIFtdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgUHJvamVjdFNlcnZpY2UsXHJcbiAgICBXb3JrZXhwZXJpZW5jZVNlcnZpY2UgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBpTW9kdWxlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWd1cmF0aW9uRmFjdG9yeTogKCkgPT4gQ29uZmlndXJhdGlvbik6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5nTW9kdWxlOiBBcGlNb2R1bGUsXHJcbiAgICAgICAgICAgIHByb3ZpZGVyczogWyB7IHByb3ZpZGU6IENvbmZpZ3VyYXRpb24sIHVzZUZhY3Rvcnk6IGNvbmZpZ3VyYXRpb25GYWN0b3J5IH0gXVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQXBpTW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgIEBPcHRpb25hbCgpIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuICAgICAgICBpZiAocGFyZW50TW9kdWxlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQXBpTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaW4geW91ciBiYXNlIEFwcE1vZHVsZSBvbmx5LicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWh0dHApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBpbXBvcnQgdGhlIEh0dHBDbGllbnRNb2R1bGUgaW4geW91ciBBcHBNb2R1bGUhIFxcbicgK1xyXG4gICAgICAgICAgICAnU2VlIGFsc28gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjA1NzUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19