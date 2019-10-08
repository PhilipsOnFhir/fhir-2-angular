import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContractResourcePublicationStatusCodesEnum } from './R4_ContractResourcePublicationStatusCodesEnum'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_Contract_ContentDefinition      extends R4_BackboneElement
{

   static def : string = 'Contract_ContentDefinition';
   type : R4_CodeableConcept ;
   subType : R4_CodeableConcept ;
   publisher : R4_Reference ;
   publicationDate : string ;
   publicationStatus : R4_ContractResourcePublicationStatusCodesEnum ;
   copyright : string ;
}
