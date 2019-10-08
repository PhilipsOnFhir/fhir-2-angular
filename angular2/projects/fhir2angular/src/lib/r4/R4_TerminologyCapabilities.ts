import { R4_CapabilityStatementKindEnum } from './R4_CapabilityStatementKindEnum'
import { R4_CodeSearchSupportEnum } from './R4_CodeSearchSupportEnum'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContactDetail } from './R4_ContactDetail'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_PublicationStatusEnum } from './R4_PublicationStatusEnum'
import { R4_TerminologyCapabilities_Closure } from './R4_TerminologyCapabilities_Closure'
import { R4_TerminologyCapabilities_CodeSystem } from './R4_TerminologyCapabilities_CodeSystem'
import { R4_TerminologyCapabilities_Expansion } from './R4_TerminologyCapabilities_Expansion'
import { R4_TerminologyCapabilities_Implementation } from './R4_TerminologyCapabilities_Implementation'
import { R4_TerminologyCapabilities_Software } from './R4_TerminologyCapabilities_Software'
import { R4_TerminologyCapabilities_Translation } from './R4_TerminologyCapabilities_Translation'
import { R4_TerminologyCapabilities_ValidateCode } from './R4_TerminologyCapabilities_ValidateCode'
import { R4_UsageContext } from './R4_UsageContext'

export class R4_TerminologyCapabilities      extends R4_DomainResource
{

   static def : string = 'TerminologyCapabilities';
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
   software : R4_TerminologyCapabilities_Software ;
   implementation : R4_TerminologyCapabilities_Implementation ;
   lockedDate : boolean ;
   codeSystem : R4_TerminologyCapabilities_CodeSystem [];
   expansion : R4_TerminologyCapabilities_Expansion ;
   codeSearch : R4_CodeSearchSupportEnum ;
   validateCode : R4_TerminologyCapabilities_ValidateCode ;
   translation : R4_TerminologyCapabilities_Translation ;
   closure : R4_TerminologyCapabilities_Closure ;
}
