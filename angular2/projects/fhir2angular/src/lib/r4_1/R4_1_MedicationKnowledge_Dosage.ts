import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Dosage } from './R4_1_Dosage'

export class R4_1_MedicationKnowledge_Dosage      extends R4_1_BackboneElement
{

   static def : string = 'MedicationKnowledge_Dosage';
   type : R4_1_CodeableConcept ;
   dosage : R4_1_Dosage [];
}
