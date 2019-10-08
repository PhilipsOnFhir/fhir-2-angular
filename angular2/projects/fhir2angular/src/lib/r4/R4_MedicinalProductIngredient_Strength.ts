import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_MedicinalProductIngredient_ReferenceStrength } from './R4_MedicinalProductIngredient_ReferenceStrength'
import { R4_Ratio } from './R4_Ratio'

export class R4_MedicinalProductIngredient_Strength      extends R4_BackboneElement
{

   static def : string = 'MedicinalProductIngredient_Strength';
   presentation : R4_Ratio ;
   presentationLowLimit : R4_Ratio ;
   concentration : R4_Ratio ;
   concentrationLowLimit : R4_Ratio ;
   measurementPoint : string ;
   country : R4_CodeableConcept [];
   referenceStrength : R4_MedicinalProductIngredient_ReferenceStrength [];
}
