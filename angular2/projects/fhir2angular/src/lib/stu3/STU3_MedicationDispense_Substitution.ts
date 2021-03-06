import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_MedicationDispense_Substitution      extends STU3_BackboneElement
{

   static def : string = 'MedicationDispense_Substitution';
   wasSubstituted : boolean ;
   type : STU3_CodeableConcept ;
   reason : STU3_CodeableConcept [];
   responsibleParty : STU3_Reference [];
}
