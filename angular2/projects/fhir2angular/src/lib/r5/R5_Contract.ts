import { R5_Attachment } from './R5_Attachment'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_ContractResourceStatusCodesEnum } from './R5_ContractResourceStatusCodesEnum'
import { R5_Contract_ContentDefinition } from './R5_Contract_ContentDefinition'
import { R5_Contract_Friendly } from './R5_Contract_Friendly'
import { R5_Contract_Legal } from './R5_Contract_Legal'
import { R5_Contract_Rule } from './R5_Contract_Rule'
import { R5_Contract_Signer } from './R5_Contract_Signer'
import { R5_Contract_Term } from './R5_Contract_Term'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'

export class R5_Contract      extends R5_DomainResource
{

   static def : string = 'Contract';
   identifier : R5_Identifier [];
   url : string ;
   version : string ;
   status : R5_ContractResourceStatusCodesEnum ;
   legalState : R5_CodeableConcept ;
   instantiatesCanonical : R5_Reference ;
   instantiatesUri : string ;
   contentDerivative : R5_CodeableConcept ;
   issued : string ;
   applies : R5_Period ;
   expirationType : R5_CodeableConcept ;
   subject : R5_Reference [];
   authority : R5_Reference [];
   domain : R5_Reference [];
   site : R5_Reference [];
   name : string ;
   title : string ;
   subtitle : string ;
   alias : string [];
   author : R5_Reference ;
   scope : R5_CodeableConcept ;
   topicCodeableConcept : R5_CodeableConcept ;
   topicReference : R5_Reference ;
   type : R5_CodeableConcept ;
   subType : R5_CodeableConcept [];
   contentDefinition : R5_Contract_ContentDefinition ;
   term : R5_Contract_Term [];
   supportingInfo : R5_Reference [];
   relevantHistory : R5_Reference [];
   signer : R5_Contract_Signer [];
   friendly : R5_Contract_Friendly [];
   legal : R5_Contract_Legal [];
   rule : R5_Contract_Rule [];
   legallyBindingAttachment : R5_Attachment ;
   legallyBindingReference : R5_Reference ;
}
