import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_MedicationKnowledge_Monograph      extends R4_BackboneElement
{

   static def : string = 'MedicationKnowledge_Monograph';
   type : R4_CodeableConcept ;
   source : R4_Reference ;
}
