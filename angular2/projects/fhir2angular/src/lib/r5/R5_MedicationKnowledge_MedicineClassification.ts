import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_MedicationKnowledge_MedicineClassification      extends R5_BackboneElement
{

   static def : string = 'MedicationKnowledge_MedicineClassification';
   type : R5_CodeableConcept ;
   classification : R5_CodeableConcept [];
}
