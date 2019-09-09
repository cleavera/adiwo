import { SessionSchema } from '@adiwo/domain';
import { Component, Inject } from '@angular/core';
import { Api } from '@skimp/client';

@Component({
    selector: 'host-session-list',
    templateUrl: './session-list.component.html',
    styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent {
    public sessions: Promise<Array<SessionSchema>>;

    constructor(@Inject(Api) api: Api) {
        this.sessions = api.list(SessionSchema);
    }
}
