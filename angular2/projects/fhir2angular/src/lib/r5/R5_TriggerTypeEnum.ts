import { R5_DomainResource } from './R5_DomainResource';

export enum R5_TriggerTypeEnum{
    DATA_ACCESS_ENDED = 'data-access-ended',
    DATA_ACCESSED = 'data-accessed',
    DATA_ADDED = 'data-added',
    DATA_CHANGED = 'data-changed',
    DATA_MODIFIED = 'data-modified',
    DATA_REMOVED = 'data-removed',
    NAMED_EVENT = 'named-event',
    PERIODIC = 'periodic',
}
