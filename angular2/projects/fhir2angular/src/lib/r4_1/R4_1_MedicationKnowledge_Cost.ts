import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Money } from './R4_1_Money'

export class R4_1_MedicationKnowledge_Cost      extends R4_1_BackboneElement
{

   static def : string = 'MedicationKnowledge_Cost';
   type : R4_1_CodeableConcept ;
   source : string ;
   cost : R4_1_Money ;
}
