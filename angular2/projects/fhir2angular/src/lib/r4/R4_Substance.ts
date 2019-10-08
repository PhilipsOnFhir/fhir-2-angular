import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_FHIRSubstanceStatusEnum } from './R4_FHIRSubstanceStatusEnum'
import { R4_Identifier } from './R4_Identifier'
import { R4_Substance_Ingredient } from './R4_Substance_Ingredient'
import { R4_Substance_Instance } from './R4_Substance_Instance'

export class R4_Substance      extends R4_DomainResource
{

   static def : string = 'Substance';
   identifier : R4_Identifier [];
   status : R4_FHIRSubstanceStatusEnum ;
   category : R4_CodeableConcept [];
   code : R4_CodeableConcept ;
   description : string ;
   instance : R4_Substance_Instance [];
   ingredient : R4_Substance_Ingredient [];
}
