import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_MedicationPrescription_Substitution      extends STU3_BackboneElement
{

   static def : string = 'MedicationPrescription_Substitution';
   type : STU3_CodeableConcept ;
   reason : STU3_CodeableConcept ;
}
