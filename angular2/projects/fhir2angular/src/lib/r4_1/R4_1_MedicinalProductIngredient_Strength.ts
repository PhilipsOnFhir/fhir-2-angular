import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_MedicinalProductIngredient_ReferenceStrength } from './R4_1_MedicinalProductIngredient_ReferenceStrength'
import { R4_1_Ratio } from './R4_1_Ratio'

export class R4_1_MedicinalProductIngredient_Strength      extends R4_1_BackboneElement
{

   static def : string = 'MedicinalProductIngredient_Strength';
   presentation : R4_1_Ratio ;
   presentationLowLimit : R4_1_Ratio ;
   concentration : R4_1_Ratio ;
   concentrationLowLimit : R4_1_Ratio ;
   measurementPoint : string ;
   country : R4_1_CodeableConcept [];
   referenceStrength : R4_1_MedicinalProductIngredient_ReferenceStrength [];
}
