import { ConformanceStatementKindEnum } from './ConformanceStatementKindEnum'
import { Conformance_Contact } from './Conformance_Contact'
import { Conformance_Document } from './Conformance_Document'
import { Conformance_Implementation } from './Conformance_Implementation'
import { Conformance_Messaging } from './Conformance_Messaging'
import { Conformance_Rest } from './Conformance_Rest'
import { Conformance_Software } from './Conformance_Software'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'
import { UnknownContentCodeEnum } from './UnknownContentCodeEnum'

export class Conformance      extends DomainResource
{

   static def : string = 'Conformance';
   url : string ;
   version : string ;
   name : string ;
   status : string ;
   experimental : boolean ;
   publisher : string ;
   contact : Conformance_Contact [];
   date : string ;
   description : string ;
   requirements : string ;
   copyright : string ;
   kind : ConformanceStatementKindEnum ;
   software : Conformance_Software ;
   implementation : Conformance_Implementation ;
   fhirVersion : string ;
   acceptUnknown : UnknownContentCodeEnum ;
   format : string [];
   profile : Reference [];
   rest : Conformance_Rest [];
   messaging : Conformance_Messaging [];
   document : Conformance_Document [];
}
