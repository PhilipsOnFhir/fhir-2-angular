import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_MedicationKnowledge_MedicineClassification      extends R4_1_BackboneElement
{

   static def : string = 'MedicationKnowledge_MedicineClassification';
   type : R4_1_CodeableConcept ;
   classification : R4_1_CodeableConcept [];
}
