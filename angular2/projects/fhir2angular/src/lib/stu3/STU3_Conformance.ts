import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_ConformanceStatementKindEnum } from './STU3_ConformanceStatementKindEnum'
import { STU3_Conformance_Contact } from './STU3_Conformance_Contact'
import { STU3_Conformance_Document } from './STU3_Conformance_Document'
import { STU3_Conformance_Implementation } from './STU3_Conformance_Implementation'
import { STU3_Conformance_Messaging } from './STU3_Conformance_Messaging'
import { STU3_Conformance_Rest } from './STU3_Conformance_Rest'
import { STU3_Conformance_Software } from './STU3_Conformance_Software'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'
import { STU3_UnknownContentCodeEnum } from './STU3_UnknownContentCodeEnum'

export class STU3_Conformance      extends STU3_DomainResource
{

   static def : string = 'Conformance';
   url : string ;
   version : string ;
   name : string ;
   status : string ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : STU3_Conformance_Contact [];
   description : string ;
   useContext : STU3_CodeableConcept [];
   requirements : string ;
   copyright : string ;
   kind : STU3_ConformanceStatementKindEnum ;
   instantiates : string [];
   software : STU3_Conformance_Software ;
   implementation : STU3_Conformance_Implementation ;
   fhirVersion : string ;
   acceptUnknown : STU3_UnknownContentCodeEnum ;
   format : string [];
   profile : STU3_Reference [];
   rest : STU3_Conformance_Rest [];
   messaging : STU3_Conformance_Messaging [];
   document : STU3_Conformance_Document [];
}
