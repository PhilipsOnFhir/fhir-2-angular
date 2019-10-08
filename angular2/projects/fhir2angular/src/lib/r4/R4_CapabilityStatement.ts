import { R4_CapabilityStatementKindEnum } from './R4_CapabilityStatementKindEnum'
import { R4_CapabilityStatement_Document } from './R4_CapabilityStatement_Document'
import { R4_CapabilityStatement_Implementation } from './R4_CapabilityStatement_Implementation'
import { R4_CapabilityStatement_Messaging } from './R4_CapabilityStatement_Messaging'
import { R4_CapabilityStatement_Rest } from './R4_CapabilityStatement_Rest'
import { R4_CapabilityStatement_Software } from './R4_CapabilityStatement_Software'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContactDetail } from './R4_ContactDetail'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_FHIRVersionEnum } from './R4_FHIRVersionEnum'
import { R4_PublicationStatusEnum } from './R4_PublicationStatusEnum'
import { R4_UsageContext } from './R4_UsageContext'

export class R4_CapabilityStatement      extends R4_DomainResource
{

   static def : string = 'CapabilityStatement';
   url : string ;
   version : string ;
   name : string ;
   title : string ;
   status : R4_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : R4_ContactDetail [];
   description : string ;
   useContext : R4_UsageContext [];
   jurisdiction : R4_CodeableConcept [];
   purpose : string ;
   copyright : string ;
   kind : R4_CapabilityStatementKindEnum ;
   instantiates : string [];
   imports : string [];
   software : R4_CapabilityStatement_Software ;
   implementation : R4_CapabilityStatement_Implementation ;
   fhirVersion : R4_FHIRVersionEnum ;
   format : string [];
   patchFormat : string [];
   implementationGuide : string [];
   rest : R4_CapabilityStatement_Rest [];
   messaging : R4_CapabilityStatement_Messaging [];
   document : R4_CapabilityStatement_Document [];
}
