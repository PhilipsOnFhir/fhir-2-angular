import { R4_Attachment } from './R4_Attachment'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContractResourceStatusCodesEnum } from './R4_ContractResourceStatusCodesEnum'
import { R4_Contract_ContentDefinition } from './R4_Contract_ContentDefinition'
import { R4_Contract_Friendly } from './R4_Contract_Friendly'
import { R4_Contract_Legal } from './R4_Contract_Legal'
import { R4_Contract_Rule } from './R4_Contract_Rule'
import { R4_Contract_Signer } from './R4_Contract_Signer'
import { R4_Contract_Term } from './R4_Contract_Term'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_Contract      extends R4_DomainResource
{

   static def : string = 'Contract';
   identifier : R4_Identifier [];
   url : string ;
   version : string ;
   status : R4_ContractResourceStatusCodesEnum ;
   legalState : R4_CodeableConcept ;
   instantiatesCanonical : R4_Reference ;
   instantiatesUri : string ;
   contentDerivative : R4_CodeableConcept ;
   issued : string ;
   applies : R4_Period ;
   expirationType : R4_CodeableConcept ;
   subject : R4_Reference [];
   authority : R4_Reference [];
   domain : R4_Reference [];
   site : R4_Reference [];
   name : string ;
   title : string ;
   subtitle : string ;
   alias : string [];
   author : R4_Reference ;
   scope : R4_CodeableConcept ;
   topicCodeableConcept : R4_CodeableConcept ;
   topicReference : R4_Reference ;
   type : R4_CodeableConcept ;
   subType : R4_CodeableConcept [];
   contentDefinition : R4_Contract_ContentDefinition ;
   term : R4_Contract_Term [];
   supportingInfo : R4_Reference [];
   relevantHistory : R4_Reference [];
   signer : R4_Contract_Signer [];
   friendly : R4_Contract_Friendly [];
   legal : R4_Contract_Legal [];
   rule : R4_Contract_Rule [];
   legallyBindingAttachment : R4_Attachment ;
   legallyBindingReference : R4_Reference ;
}
