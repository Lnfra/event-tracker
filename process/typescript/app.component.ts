import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {NavBarComponent} from './navbar.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {SpeakersComponent} from './speakers/speakers.component';
import {VenueComponent} from './venue/venue.component';
import {GalleryComponent} from './gallery/gallery.component';
import {TicketsComponent} from './tickets/tickets.component';
import {FaqComponent} from './faq/faq.component';
import {UsersComponent} from './users/users.component';
import {UserFormComponent} from './users/user-form.component';
import {PostsComponent} from './posts/posts.component';
import {NotFoundComponent} from './not-found.component';
import {FooterComponent} from './footer.component';

@RouteConfig([
	{ path: '/schedule.html', name: 'Schedule', component: ScheduleComponent },
	{ path: '/attendees', name: 'Attendees', component: SpeakersComponent },
	{ path: '/venue', name: 'Venue', component: VenueComponent },
	{ path: '/gallery', name: 'Gallery', component: GalleryComponent },
	{ path: '/tickets', name: 'Tickets', component: TicketsComponent },
	{ path: '/faq', name: 'Faq', component: FaqComponent },
	{ path: '/users', name: 'Users', component: UsersComponent },
	{ path: '/users/:id', name: 'EditUser', component: UserFormComponent },
	{ path: '/users/new', name: 'NewUser', component: UserFormComponent },
	{ path: '/posts', name: 'Posts', component: PostsComponent },
	{ path: '/not-found', name: 'NotFound', component: NotFoundComponent },
	{ path: '/*other', name: 'Other', redirectTo: ['Schedule'] }
])

@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
			 	<footer></footer>
    `,
    directives: [NavBarComponent, FooterComponent, ROUTER_DIRECTIVES]
})
export class AppComponent { }
