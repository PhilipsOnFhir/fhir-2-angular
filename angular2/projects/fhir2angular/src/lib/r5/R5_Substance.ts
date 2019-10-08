import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_FHIRSubstanceStatusEnum } from './R5_FHIRSubstanceStatusEnum'
import { R5_Identifier } from './R5_Identifier'
import { R5_Substance_Ingredient } from './R5_Substance_Ingredient'
import { R5_Substance_Instance } from './R5_Substance_Instance'

export class R5_Substance      extends R5_DomainResource
{

   static def : string = 'Substance';
   identifier : R5_Identifier [];
   status : R5_FHIRSubstanceStatusEnum ;
   category : R5_CodeableConcept [];
   code : R5_CodeableConcept ;
   description : string ;
   instance : R5_Substance_Instance [];
   ingredient : R5_Substance_Ingredient [];
}
