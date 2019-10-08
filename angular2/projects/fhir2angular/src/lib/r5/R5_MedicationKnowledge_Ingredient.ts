import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Ratio } from './R5_Ratio'
import { R5_Reference } from './R5_Reference'

export class R5_MedicationKnowledge_Ingredient      extends R5_BackboneElement
{

   static def : string = 'MedicationKnowledge_Ingredient';
   itemCodeableConcept : R5_CodeableConcept ;
   itemReference : R5_Reference ;
   isActive : boolean ;
   strength : R5_Ratio ;
}
