import { DSTU2_ConformanceStatementKindEnum } from './DSTU2_ConformanceStatementKindEnum'
import { DSTU2_Conformance_Contact } from './DSTU2_Conformance_Contact'
import { DSTU2_Conformance_Document } from './DSTU2_Conformance_Document'
import { DSTU2_Conformance_Implementation } from './DSTU2_Conformance_Implementation'
import { DSTU2_Conformance_Messaging } from './DSTU2_Conformance_Messaging'
import { DSTU2_Conformance_Rest } from './DSTU2_Conformance_Rest'
import { DSTU2_Conformance_Software } from './DSTU2_Conformance_Software'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'
import { DSTU2_UnknownContentCodeEnum } from './DSTU2_UnknownContentCodeEnum'

export class DSTU2_Conformance      extends DSTU2_DomainResource
{

   static def : string = 'Conformance';
   url : string ;
   version : string ;
   name : string ;
   status : string ;
   experimental : boolean ;
   publisher : string ;
   contact : DSTU2_Conformance_Contact [];
   date : string ;
   description : string ;
   requirements : string ;
   copyright : string ;
   kind : DSTU2_ConformanceStatementKindEnum ;
   software : DSTU2_Conformance_Software ;
   implementation : DSTU2_Conformance_Implementation ;
   fhirVersion : string ;
   acceptUnknown : DSTU2_UnknownContentCodeEnum ;
   format : string [];
   profile : DSTU2_Reference [];
   rest : DSTU2_Conformance_Rest [];
   messaging : DSTU2_Conformance_Messaging [];
   document : DSTU2_Conformance_Document [];
}
