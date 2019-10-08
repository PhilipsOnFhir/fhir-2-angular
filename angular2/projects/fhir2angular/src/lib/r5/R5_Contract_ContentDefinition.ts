import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_ContractResourcePublicationStatusCodesEnum } from './R5_ContractResourcePublicationStatusCodesEnum'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_Contract_ContentDefinition      extends R5_BackboneElement
{

   static def : string = 'Contract_ContentDefinition';
   type : R5_CodeableConcept ;
   subType : R5_CodeableConcept ;
   publisher : R5_Reference ;
   publicationDate : string ;
   publicationStatus : R5_ContractResourcePublicationStatusCodesEnum ;
   copyright : string ;
}
