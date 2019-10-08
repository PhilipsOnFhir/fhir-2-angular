import { R4_1_Attachment } from './R4_1_Attachment'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_ContractResourceStatusCodesEnum } from './R4_1_ContractResourceStatusCodesEnum'
import { R4_1_Contract_ContentDefinition } from './R4_1_Contract_ContentDefinition'
import { R4_1_Contract_Friendly } from './R4_1_Contract_Friendly'
import { R4_1_Contract_Legal } from './R4_1_Contract_Legal'
import { R4_1_Contract_Rule } from './R4_1_Contract_Rule'
import { R4_1_Contract_Signer } from './R4_1_Contract_Signer'
import { R4_1_Contract_Term } from './R4_1_Contract_Term'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Contract      extends R4_1_DomainResource
{

   static def : string = 'Contract';
   identifier : R4_1_Identifier [];
   url : string ;
   version : string ;
   status : R4_1_ContractResourceStatusCodesEnum ;
   legalState : R4_1_CodeableConcept ;
   instantiatesCanonical : R4_1_Reference ;
   instantiatesUri : string ;
   contentDerivative : R4_1_CodeableConcept ;
   issued : string ;
   applies : R4_1_Period ;
   expirationType : R4_1_CodeableConcept ;
   subject : R4_1_Reference [];
   authority : R4_1_Reference [];
   domain : R4_1_Reference [];
   site : R4_1_Reference [];
   name : string ;
   title : string ;
   subtitle : string ;
   alias : string [];
   author : R4_1_Reference ;
   scope : R4_1_CodeableConcept ;
   topicCodeableConcept : R4_1_CodeableConcept ;
   topicReference : R4_1_Reference ;
   type : R4_1_CodeableConcept ;
   subType : R4_1_CodeableConcept [];
   contentDefinition : R4_1_Contract_ContentDefinition ;
   term : R4_1_Contract_Term [];
   supportingInfo : R4_1_Reference [];
   relevantHistory : R4_1_Reference [];
   signer : R4_1_Contract_Signer [];
   friendly : R4_1_Contract_Friendly [];
   legal : R4_1_Contract_Legal [];
   rule : R4_1_Contract_Rule [];
   legallyBindingAttachment : R4_1_Attachment ;
   legallyBindingReference : R4_1_Reference ;
}
