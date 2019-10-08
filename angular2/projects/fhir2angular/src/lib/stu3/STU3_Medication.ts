import { STU3_Attachment } from './STU3_Attachment'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_MedicationStatusEnum } from './STU3_MedicationStatusEnum'
import { STU3_Medication_Ingredient } from './STU3_Medication_Ingredient'
import { STU3_Medication_Package } from './STU3_Medication_Package'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Medication      extends STU3_DomainResource
{

   static def : string = 'Medication';
   code : STU3_CodeableConcept ;
   status : STU3_MedicationStatusEnum ;
   isBrand : boolean ;
   isOverTheCounter : boolean ;
   manufacturer : STU3_Reference ;
   form : STU3_CodeableConcept ;
   ingredient : STU3_Medication_Ingredient [];
   package : STU3_Medication_Package ;
   image : STU3_Attachment [];
}
