import { R5_CapabilityStatementKindEnum } from './R5_CapabilityStatementKindEnum'
import { R5_CapabilityStatement_Document } from './R5_CapabilityStatement_Document'
import { R5_CapabilityStatement_Implementation } from './R5_CapabilityStatement_Implementation'
import { R5_CapabilityStatement_Messaging } from './R5_CapabilityStatement_Messaging'
import { R5_CapabilityStatement_Rest } from './R5_CapabilityStatement_Rest'
import { R5_CapabilityStatement_Software } from './R5_CapabilityStatement_Software'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_ContactDetail } from './R5_ContactDetail'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_FHIRVersionEnum } from './R5_FHIRVersionEnum'
import { R5_PublicationStatusEnum } from './R5_PublicationStatusEnum'
import { R5_UsageContext } from './R5_UsageContext'

export class R5_CapabilityStatement      extends R5_DomainResource
{

   static def : string = 'CapabilityStatement';
   url : string ;
   version : string ;
   name : string ;
   title : string ;
   status : R5_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : R5_ContactDetail [];
   description : string ;
   useContext : R5_UsageContext [];
   jurisdiction : R5_CodeableConcept [];
   purpose : string ;
   copyright : string ;
   kind : R5_CapabilityStatementKindEnum ;
   instantiates : string [];
   imports : string [];
   software : R5_CapabilityStatement_Software ;
   implementation : R5_CapabilityStatement_Implementation ;
   fhirVersion : R5_FHIRVersionEnum ;
   format : string [];
   patchFormat : string [];
   implementationGuide : string [];
   rest : R5_CapabilityStatement_Rest [];
   messaging : R5_CapabilityStatement_Messaging [];
   document : R5_CapabilityStatement_Document [];
}
