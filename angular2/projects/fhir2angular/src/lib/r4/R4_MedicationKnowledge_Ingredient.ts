import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Ratio } from './R4_Ratio'
import { R4_Reference } from './R4_Reference'

export class R4_MedicationKnowledge_Ingredient      extends R4_BackboneElement
{

   static def : string = 'MedicationKnowledge_Ingredient';
   itemCodeableConcept : R4_CodeableConcept ;
   itemReference : R4_Reference ;
   isActive : boolean ;
   strength : R4_Ratio ;
}
