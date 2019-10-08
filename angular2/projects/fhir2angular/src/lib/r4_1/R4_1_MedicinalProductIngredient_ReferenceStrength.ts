import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Ratio } from './R4_1_Ratio'

export class R4_1_MedicinalProductIngredient_ReferenceStrength      extends R4_1_BackboneElement
{

   static def : string = 'MedicinalProductIngredient_ReferenceStrength';
   substance : R4_1_CodeableConcept ;
   strength : R4_1_Ratio ;
   strengthLowLimit : R4_1_Ratio ;
   measurementPoint : string ;
   country : R4_1_CodeableConcept [];
}
