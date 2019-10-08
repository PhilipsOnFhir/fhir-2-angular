import { DomainResource } from './DomainResource';

export enum EncounterStatusEnum{
    CANCELLED = 'cancelled',
    COMPLETED = 'completed',
    ENTERED_IN_ERROR = 'entered-in-error',
    IN_PROGRESS = 'in-progress',
    ONHOLD = 'onhold',
    PLANNED = 'planned',
    UNKNOWN = 'unknown',
}
