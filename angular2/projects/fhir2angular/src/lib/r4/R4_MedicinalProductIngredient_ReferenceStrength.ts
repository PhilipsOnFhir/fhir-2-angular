import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Ratio } from './R4_Ratio'

export class R4_MedicinalProductIngredient_ReferenceStrength      extends R4_BackboneElement
{

   static def : string = 'MedicinalProductIngredient_ReferenceStrength';
   substance : R4_CodeableConcept ;
   strength : R4_Ratio ;
   strengthLowLimit : R4_Ratio ;
   measurementPoint : string ;
   country : R4_CodeableConcept [];
}
