import { CapabilityStatement2_Implementation } from './CapabilityStatement2_Implementation'
import { CapabilityStatement2_Rest } from './CapabilityStatement2_Rest'
import { CapabilityStatement2_Software } from './CapabilityStatement2_Software'
import { CapabilityStatementKindEnum } from './CapabilityStatementKindEnum'
import { CodeableConcept } from './CodeableConcept'
import { ContactDetail } from './ContactDetail'
import { DomainResource } from './DomainResource'
import { FHIRVersionEnum } from './FHIRVersionEnum'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { UsageContext } from './UsageContext'

export class CapabilityStatement2      extends DomainResource
{

   static def : string = 'CapabilityStatement2';
   url : string ;
   version : string ;
   name : string ;
   title : string ;
   status : PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : ContactDetail [];
   description : string ;
   useContext : UsageContext [];
   jurisdiction : CodeableConcept [];
   purpose : string ;
   copyright : string ;
   kind : CapabilityStatementKindEnum ;
   instantiates : string [];
   imports : string [];
   software : CapabilityStatement2_Software ;
   implementation : CapabilityStatement2_Implementation ;
   fhirVersion : FHIRVersionEnum ;
   format : string [];
   patchFormat : string [];
   implementationGuide : string [];
   rest : CapabilityStatement2_Rest [];
}
