import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Dosage } from './R5_Dosage'

export class R5_MedicationKnowledge_Dosage      extends R5_BackboneElement
{

   static def : string = 'MedicationKnowledge_Dosage';
   type : R5_CodeableConcept ;
   dosage : R5_Dosage [];
}
