import { R5_DomainResource } from './R5_DomainResource';

export enum R5_IssueTypeEnum{
    BUSINESS_RULE = 'business-rule',
    CODE_INVALID = 'code-invalid',
    CONFLICT = 'conflict',
    DELETED = 'deleted',
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
    MULTIPLE_MATCHES = 'multiple-matches',
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