import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Ratio } from './R5_Ratio'

export class R5_MedicinalProductIngredient_ReferenceStrength      extends R5_BackboneElement
{

   static def : string = 'MedicinalProductIngredient_ReferenceStrength';
   substance : R5_CodeableConcept ;
   strength : R5_Ratio ;
   strengthLowLimit : R5_Ratio ;
   measurementPoint : string ;
   country : R5_CodeableConcept [];
}
