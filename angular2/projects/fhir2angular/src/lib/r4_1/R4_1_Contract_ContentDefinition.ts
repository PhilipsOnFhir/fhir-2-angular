import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_ContractResourcePublicationStatusCodesEnum } from './R4_1_ContractResourcePublicationStatusCodesEnum'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Contract_ContentDefinition      extends R4_1_BackboneElement
{

   static def : string = 'Contract_ContentDefinition';
   type : R4_1_CodeableConcept ;
   subType : R4_1_CodeableConcept ;
   publisher : R4_1_Reference ;
   publicationDate : string ;
   publicationStatus : R4_1_ContractResourcePublicationStatusCodesEnum ;
   copyright : string ;
}
