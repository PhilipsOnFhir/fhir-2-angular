import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_MedicationDispense_Substitution      extends R5_BackboneElement
{

   static def : string = 'MedicationDispense_Substitution';
   wasSubstituted : boolean ;
   type : R5_CodeableConcept ;
   reason : R5_CodeableConcept [];
   responsibleParty : R5_Reference [];
}
