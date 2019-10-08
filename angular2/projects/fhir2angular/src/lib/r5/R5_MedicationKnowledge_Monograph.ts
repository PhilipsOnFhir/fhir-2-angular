import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_MedicationKnowledge_Monograph      extends R5_BackboneElement
{

   static def : string = 'MedicationKnowledge_Monograph';
   type : R5_CodeableConcept ;
   source : R5_Reference ;
}
