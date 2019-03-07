import { Pipe } from '@angular/core';
import { Model } from '@skimp/client';
import { ResourceLocation } from '@skimp/core';
import { $isNull, Maybe } from '@cleavera/utils';

@Pipe({ name: 'id' })
export class IdPipe {
    public transform(model: Maybe<unknown>): string {
        if ($isNull(model)) {
            throw new Error('No model');
        }

        const location: Maybe<ResourceLocation> = Model.getLocation(model);

        if ($isNull(location)) {
            throw new Error('Model does not exist');
        }

        return location.toString();
    }
}
