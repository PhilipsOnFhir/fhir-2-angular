import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_MedicationKnowledge_Schedule      extends R4_1_BackboneElement
{

   static def : string = 'MedicationKnowledge_Schedule';
   schedule : R4_1_CodeableConcept ;
}
