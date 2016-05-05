System.register(['angular2/core', './venue.service', '../shared/spinner.component'], function(exports_1, context_1) {
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
    var core_1, venue_service_1, spinner_component_1;
    var VenueComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (venue_service_1_1) {
                venue_service_1 = venue_service_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            }],
        execute: function() {
            VenueComponent = (function () {
                function VenueComponent(_service) {
                    this._service = _service;
                    this.isLoading = true;
                }
                VenueComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getEventInfo()
                        .subscribe(function (event) { return _this.event = event; }, null, function () { return _this.isLoading = false; });
                    this._service.getEventVenue()
                        .subscribe(function (venue) { return _this.venue = venue; }, null, function () { return _this.isLoading = false; });
                };
                VenueComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'templates/venue.component.html',
                        providers: [venue_service_1.VenueService],
                        directives: [spinner_component_1.SpinnerComponent]
                    }), 
                    __metadata('design:paramtypes', [venue_service_1.VenueService])
                ], VenueComponent);
                return VenueComponent;
            }());
            exports_1("VenueComponent", VenueComponent);
        }
    }
});

//# sourceMappingURL=venue.component.js.map
