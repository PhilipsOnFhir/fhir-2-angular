import { R4_ConformanceStatementKindEnum } from './R4_ConformanceStatementKindEnum'
import { R4_Conformance_Contact } from './R4_Conformance_Contact'
import { R4_Conformance_Document } from './R4_Conformance_Document'
import { R4_Conformance_Implementation } from './R4_Conformance_Implementation'
import { R4_Conformance_Messaging } from './R4_Conformance_Messaging'
import { R4_Conformance_Rest } from './R4_Conformance_Rest'
import { R4_Conformance_Software } from './R4_Conformance_Software'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'
import { R4_UnknownContentCodeEnum } from './R4_UnknownContentCodeEnum'

export class R4_Conformance      extends R4_DomainResource
{

   static def : string = 'Conformance';
   url : string ;
   version : string ;
   name : string ;
   status : string ;
   experimental : boolean ;
   publisher : string ;
   contact : R4_Conformance_Contact [];
   date : string ;
   description : string ;
   requirements : string ;
   copyright : string ;
   kind : R4_ConformanceStatementKindEnum ;
   software : R4_Conformance_Software ;
   implementation : R4_Conformance_Implementation ;
   fhirVersion : string ;
   acceptUnknown : R4_UnknownContentCodeEnum ;
   format : string [];
   profile : R4_Reference [];
   rest : R4_Conformance_Rest [];
   messaging : R4_Conformance_Messaging [];
   document : R4_Conformance_Document [];
}
