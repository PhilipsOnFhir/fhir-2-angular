import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_MedicationKnowledge_MedicineClassification      extends R4_BackboneElement
{

   static def : string = 'MedicationKnowledge_MedicineClassification';
   type : R4_CodeableConcept ;
   classification : R4_CodeableConcept [];
}
