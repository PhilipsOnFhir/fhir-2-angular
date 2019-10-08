import { R5_CapabilityStatementKindEnum } from './R5_CapabilityStatementKindEnum'
import { R5_CodeSearchSupportEnum } from './R5_CodeSearchSupportEnum'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_ContactDetail } from './R5_ContactDetail'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_PublicationStatusEnum } from './R5_PublicationStatusEnum'
import { R5_TerminologyCapabilities_Closure } from './R5_TerminologyCapabilities_Closure'
import { R5_TerminologyCapabilities_CodeSystem } from './R5_TerminologyCapabilities_CodeSystem'
import { R5_TerminologyCapabilities_Expansion } from './R5_TerminologyCapabilities_Expansion'
import { R5_TerminologyCapabilities_Implementation } from './R5_TerminologyCapabilities_Implementation'
import { R5_TerminologyCapabilities_Software } from './R5_TerminologyCapabilities_Software'
import { R5_TerminologyCapabilities_Translation } from './R5_TerminologyCapabilities_Translation'
import { R5_TerminologyCapabilities_ValidateCode } from './R5_TerminologyCapabilities_ValidateCode'
import { R5_UsageContext } from './R5_UsageContext'

export class R5_TerminologyCapabilities      extends R5_DomainResource
{

   static def : string = 'TerminologyCapabilities';
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
   software : R5_TerminologyCapabilities_Software ;
   implementation : R5_TerminologyCapabilities_Implementation ;
   lockedDate : boolean ;
   codeSystem : R5_TerminologyCapabilities_CodeSystem [];
   expansion : R5_TerminologyCapabilities_Expansion ;
   codeSearch : R5_CodeSearchSupportEnum ;
   validateCode : R5_TerminologyCapabilities_ValidateCode ;
   translation : R5_TerminologyCapabilities_Translation ;
   closure : R5_TerminologyCapabilities_Closure ;
}
