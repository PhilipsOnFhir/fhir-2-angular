import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_MedicinalProductIngredient_ReferenceStrength } from './R5_MedicinalProductIngredient_ReferenceStrength'
import { R5_Ratio } from './R5_Ratio'

export class R5_MedicinalProductIngredient_Strength      extends R5_BackboneElement
{

   static def : string = 'MedicinalProductIngredient_Strength';
   presentation : R5_Ratio ;
   presentationLowLimit : R5_Ratio ;
   concentration : R5_Ratio ;
   concentrationLowLimit : R5_Ratio ;
   measurementPoint : string ;
   country : R5_CodeableConcept [];
   referenceStrength : R5_MedicinalProductIngredient_ReferenceStrength [];
}
