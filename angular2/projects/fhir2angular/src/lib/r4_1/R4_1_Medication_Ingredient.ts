import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Ratio } from './R4_1_Ratio'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Medication_Ingredient      extends R4_1_BackboneElement
{

   static def : string = 'Medication_Ingredient';
   itemCodeableConcept : R4_1_CodeableConcept ;
   itemReference : R4_1_Reference ;
   isActive : boolean ;
   strength : R4_1_Ratio ;
}
