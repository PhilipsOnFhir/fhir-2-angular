import { STU3_CapabilityStatementKindEnum } from './STU3_CapabilityStatementKindEnum'
import { STU3_CapabilityStatement_Document } from './STU3_CapabilityStatement_Document'
import { STU3_CapabilityStatement_Implementation } from './STU3_CapabilityStatement_Implementation'
import { STU3_CapabilityStatement_Messaging } from './STU3_CapabilityStatement_Messaging'
import { STU3_CapabilityStatement_Rest } from './STU3_CapabilityStatement_Rest'
import { STU3_CapabilityStatement_Software } from './STU3_CapabilityStatement_Software'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_ContactDetail } from './STU3_ContactDetail'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_PublicationStatusEnum } from './STU3_PublicationStatusEnum'
import { STU3_Reference } from './STU3_Reference'
import { STU3_UnknownContentCodeEnum } from './STU3_UnknownContentCodeEnum'
import { STU3_UsageContext } from './STU3_UsageContext'

export class STU3_CapabilityStatement      extends STU3_DomainResource
{

   static def : string = 'CapabilityStatement';
   url : string ;
   version : string ;
   name : string ;
   title : string ;
   status : STU3_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : STU3_ContactDetail [];
   description : string ;
   useContext : STU3_UsageContext [];
   jurisdiction : STU3_CodeableConcept [];
   purpose : string ;
   copyright : string ;
   kind : STU3_CapabilityStatementKindEnum ;
   instantiates : string [];
   software : STU3_CapabilityStatement_Software ;
   implementation : STU3_CapabilityStatement_Implementation ;
   fhirVersion : string ;
   acceptUnknown : STU3_UnknownContentCodeEnum ;
   format : string [];
   patchFormat : string [];
   implementationGuide : string [];
   profile : STU3_Reference [];
   rest : STU3_CapabilityStatement_Rest [];
   messaging : STU3_CapabilityStatement_Messaging [];
   document : STU3_CapabilityStatement_Document [];
}
