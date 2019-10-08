import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Dosage } from './R4_Dosage'

export class R4_MedicationKnowledge_Dosage      extends R4_BackboneElement
{

   static def : string = 'MedicationKnowledge_Dosage';
   type : R4_CodeableConcept ;
   dosage : R4_Dosage [];
}
