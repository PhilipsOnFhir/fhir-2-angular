import { STU3_Attachment } from './STU3_Attachment'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_Coding } from './STU3_Coding'
import { STU3_ContractResourceStatusCodesEnum } from './STU3_ContractResourceStatusCodesEnum'
import { STU3_Contract_Agent } from './STU3_Contract_Agent'
import { STU3_Contract_Friendly } from './STU3_Contract_Friendly'
import { STU3_Contract_Legal } from './STU3_Contract_Legal'
import { STU3_Contract_Rule } from './STU3_Contract_Rule'
import { STU3_Contract_Signer } from './STU3_Contract_Signer'
import { STU3_Contract_Term } from './STU3_Contract_Term'
import { STU3_Contract_ValuedItem } from './STU3_Contract_ValuedItem'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Contract      extends STU3_DomainResource
{

   static def : string = 'Contract';
   identifier : STU3_Identifier ;
   status : STU3_ContractResourceStatusCodesEnum ;
   issued : string ;
   applies : STU3_Period ;
   subject : STU3_Reference [];
   topic : STU3_Reference [];
   authority : STU3_Reference [];
   domain : STU3_Reference [];
   type : STU3_CodeableConcept ;
   subType : STU3_CodeableConcept [];
   action : STU3_CodeableConcept [];
   actionReason : STU3_CodeableConcept [];
   decisionType : STU3_CodeableConcept ;
   contentDerivative : STU3_CodeableConcept ;
   securityLabel : STU3_Coding [];
   agent : STU3_Contract_Agent [];
   signer : STU3_Contract_Signer [];
   valuedItem : STU3_Contract_ValuedItem [];
   term : STU3_Contract_Term [];
   bindingAttachment : STU3_Attachment ;
   bindingReference : STU3_Reference ;
   friendly : STU3_Contract_Friendly [];
   legal : STU3_Contract_Legal [];
   rule : STU3_Contract_Rule [];
}
