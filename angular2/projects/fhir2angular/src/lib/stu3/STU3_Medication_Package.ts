import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Medication_Batch } from './STU3_Medication_Batch'
import { STU3_Medication_Content } from './STU3_Medication_Content'

export class STU3_Medication_Package      extends STU3_BackboneElement
{

   static def : string = 'Medication_Package';
   container : STU3_CodeableConcept ;
   content : STU3_Medication_Content [];
   batch : STU3_Medication_Batch [];
}
