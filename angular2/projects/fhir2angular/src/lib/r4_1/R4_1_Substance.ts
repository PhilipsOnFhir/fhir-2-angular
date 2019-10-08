import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_FHIRSubstanceStatusEnum } from './R4_1_FHIRSubstanceStatusEnum'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Substance_Ingredient } from './R4_1_Substance_Ingredient'
import { R4_1_Substance_Instance } from './R4_1_Substance_Instance'

export class R4_1_Substance      extends R4_1_DomainResource
{

   static def : string = 'Substance';
   identifier : R4_1_Identifier [];
   status : R4_1_FHIRSubstanceStatusEnum ;
   category : R4_1_CodeableConcept [];
   code : R4_1_CodeableConcept ;
   description : string ;
   instance : R4_1_Substance_Instance [];
   ingredient : R4_1_Substance_Ingredient [];
}
