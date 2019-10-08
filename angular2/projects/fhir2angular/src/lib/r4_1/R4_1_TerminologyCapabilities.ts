import { R4_1_CapabilityStatementKindEnum } from './R4_1_CapabilityStatementKindEnum'
import { R4_1_CodeSearchSupportEnum } from './R4_1_CodeSearchSupportEnum'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_ContactDetail } from './R4_1_ContactDetail'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_PublicationStatusEnum } from './R4_1_PublicationStatusEnum'
import { R4_1_TerminologyCapabilities_Closure } from './R4_1_TerminologyCapabilities_Closure'
import { R4_1_TerminologyCapabilities_CodeSystem } from './R4_1_TerminologyCapabilities_CodeSystem'
import { R4_1_TerminologyCapabilities_Expansion } from './R4_1_TerminologyCapabilities_Expansion'
import { R4_1_TerminologyCapabilities_Implementation } from './R4_1_TerminologyCapabilities_Implementation'
import { R4_1_TerminologyCapabilities_Software } from './R4_1_TerminologyCapabilities_Software'
import { R4_1_TerminologyCapabilities_Translation } from './R4_1_TerminologyCapabilities_Translation'
import { R4_1_TerminologyCapabilities_ValidateCode } from './R4_1_TerminologyCapabilities_ValidateCode'
import { R4_1_UsageContext } from './R4_1_UsageContext'

export class R4_1_TerminologyCapabilities      extends R4_1_DomainResource
{

   static def : string = 'TerminologyCapabilities';
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
   software : R4_1_TerminologyCapabilities_Software ;
   implementation : R4_1_TerminologyCapabilities_Implementation ;
   lockedDate : boolean ;
   codeSystem : R4_1_TerminologyCapabilities_CodeSystem [];
   expansion : R4_1_TerminologyCapabilities_Expansion ;
   codeSearch : R4_1_CodeSearchSupportEnum ;
   validateCode : R4_1_TerminologyCapabilities_ValidateCode ;
   translation : R4_1_TerminologyCapabilities_Translation ;
   closure : R4_1_TerminologyCapabilities_Closure ;
}
