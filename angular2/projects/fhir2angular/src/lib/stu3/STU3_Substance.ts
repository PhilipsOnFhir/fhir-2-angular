import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_FHIRSubstanceStatusEnum } from './STU3_FHIRSubstanceStatusEnum'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Substance_Ingredient } from './STU3_Substance_Ingredient'
import { STU3_Substance_Instance } from './STU3_Substance_Instance'

export class STU3_Substance      extends STU3_DomainResource
{

   static def : string = 'Substance';
   identifier : STU3_Identifier [];
   status : STU3_FHIRSubstanceStatusEnum ;
   category : STU3_CodeableConcept [];
   code : STU3_CodeableConcept ;
   description : string ;
   instance : STU3_Substance_Instance [];
   ingredient : STU3_Substance_Ingredient [];
}
