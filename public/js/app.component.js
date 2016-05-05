System.register(['angular2/core', 'angular2/router', './navbar.component', './schedule/schedule.component', './speakers/speakers.component', './venue/venue.component', './gallery/gallery.component', './tickets/tickets.component', './faq/faq.component', './users/users.component', './users/user-form.component', './posts/posts.component', './not-found.component', './footer.component'], function(exports_1, context_1) {
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
    var core_1, router_1, navbar_component_1, schedule_component_1, speakers_component_1, venue_component_1, gallery_component_1, tickets_component_1, faq_component_1, users_component_1, user_form_component_1, posts_component_1, not_found_component_1, footer_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (schedule_component_1_1) {
                schedule_component_1 = schedule_component_1_1;
            },
            function (speakers_component_1_1) {
                speakers_component_1 = speakers_component_1_1;
            },
            function (venue_component_1_1) {
                venue_component_1 = venue_component_1_1;
            },
            function (gallery_component_1_1) {
                gallery_component_1 = gallery_component_1_1;
            },
            function (tickets_component_1_1) {
                tickets_component_1 = tickets_component_1_1;
            },
            function (faq_component_1_1) {
                faq_component_1 = faq_component_1_1;
            },
            function (users_component_1_1) {
                users_component_1 = users_component_1_1;
            },
            function (user_form_component_1_1) {
                user_form_component_1 = user_form_component_1_1;
            },
            function (posts_component_1_1) {
                posts_component_1 = posts_component_1_1;
            },
            function (not_found_component_1_1) {
                not_found_component_1 = not_found_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/schedule.html', name: 'Schedule', component: schedule_component_1.ScheduleComponent },
                        { path: '/attendees', name: 'Attendees', component: speakers_component_1.SpeakersComponent },
                        { path: '/venue', name: 'Venue', component: venue_component_1.VenueComponent },
                        { path: '/gallery', name: 'Gallery', component: gallery_component_1.GalleryComponent },
                        { path: '/tickets', name: 'Tickets', component: tickets_component_1.TicketsComponent },
                        { path: '/faq', name: 'Faq', component: faq_component_1.FaqComponent },
                        { path: '/users', name: 'Users', component: users_component_1.UsersComponent },
                        { path: '/users/:id', name: 'EditUser', component: user_form_component_1.UserFormComponent },
                        { path: '/users/new', name: 'NewUser', component: user_form_component_1.UserFormComponent },
                        { path: '/posts', name: 'Posts', component: posts_component_1.PostsComponent },
                        { path: '/not-found', name: 'NotFound', component: not_found_component_1.NotFoundComponent },
                        { path: '/*other', name: 'Other', redirectTo: ['Schedule'] }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <navbar></navbar>\n        <div class=\"container\">\n            <router-outlet></router-outlet>\n        </div>\n\t\t\t \t<footer></footer>\n    ",
                        directives: [navbar_component_1.NavBarComponent, footer_component_1.FooterComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=app.component.js.map
