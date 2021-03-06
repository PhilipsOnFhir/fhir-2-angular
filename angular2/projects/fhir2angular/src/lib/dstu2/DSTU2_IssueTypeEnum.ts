import { DSTU2_DomainResource } from './DSTU2_DomainResource';

export enum DSTU2_IssueTypeEnum{
    BUSINESS_RULE = 'business-rule',
    CODE_INVALID = 'code-invalid',
    CONFLICT = 'conflict',
    DUPLICATE = 'duplicate',
    EXCEPTION = 'exception',
    EXPIRED = 'expired',
    EXTENSION = 'extension',
    FORBIDDEN = 'forbidden',
    INCOMPLETE = 'incomplete',
    INFORMATIONAL = 'informational',
    INVALID = 'invalid',
    INVARIANT = 'invariant',
    LOCK_ERROR = 'lock-error',
    LOGIN = 'login',
    NO_STORE = 'no-store',
    NOT_FOUND = 'not-found',
    NOT_SUPPORTED = 'not-supported',
    PROCESSING = 'processing',
    REQUIRED = 'required',
    SECURITY = 'security',
    STRUCTURE = 'structure',
    SUPPRESSED = 'suppressed',
    THROTTLED = 'throttled',
    TIMEOUT = 'timeout',
    TOO_COSTLY = 'too-costly',
    TOO_LONG = 'too-long',
    TRANSIENT = 'transient',
    UNKNOWN = 'unknown',
    VALUE = 'value',
}
