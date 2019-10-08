import { R4_1_CapabilityStatementKindEnum } from './R4_1_CapabilityStatementKindEnum'
import { R4_1_CapabilityStatement_Document } from './R4_1_CapabilityStatement_Document'
import { R4_1_CapabilityStatement_Implementation } from './R4_1_CapabilityStatement_Implementation'
import { R4_1_CapabilityStatement_Messaging } from './R4_1_CapabilityStatement_Messaging'
import { R4_1_CapabilityStatement_Rest } from './R4_1_CapabilityStatement_Rest'
import { R4_1_CapabilityStatement_Software } from './R4_1_CapabilityStatement_Software'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_ContactDetail } from './R4_1_ContactDetail'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_FHIRVersionEnum } from './R4_1_FHIRVersionEnum'
import { R4_1_PublicationStatusEnum } from './R4_1_PublicationStatusEnum'
import { R4_1_UsageContext } from './R4_1_UsageContext'

export class R4_1_CapabilityStatement      extends R4_1_DomainResource
{

   static def : string = 'CapabilityStatement';
   url : string ;
   version : string ;
   name : string ;
   title : string ;
   status : R4_1_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : R4_1_ContactDetail [];
   description : string ;
   useContext : R4_1_UsageContext [];
   jurisdiction : R4_1_CodeableConcept [];
   purpose : string ;
   copyright : string ;
   kind : R4_1_CapabilityStatementKindEnum ;
   instantiates : string [];
   imports : string [];
   software : R4_1_CapabilityStatement_Software ;
   implementation : R4_1_CapabilityStatement_Implementation ;
   fhirVersion : R4_1_FHIRVersionEnum ;
   format : string [];
   patchFormat : string [];
   implementationGuide : string [];
   rest : R4_1_CapabilityStatement_Rest [];
   messaging : R4_1_CapabilityStatement_Messaging [];
   document : R4_1_CapabilityStatement_Document [];
}
