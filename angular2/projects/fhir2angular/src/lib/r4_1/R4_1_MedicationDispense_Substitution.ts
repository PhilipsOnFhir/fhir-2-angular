import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_MedicationDispense_Substitution      extends R4_1_BackboneElement
{

   static def : string = 'MedicationDispense_Substitution';
   wasSubstituted : boolean ;
   type : R4_1_CodeableConcept ;
   reason : R4_1_CodeableConcept [];
   responsibleParty : R4_1_Reference [];
}
