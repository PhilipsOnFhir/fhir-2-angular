import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_MedicationDispense_Substitution      extends R4_BackboneElement
{

   static def : string = 'MedicationDispense_Substitution';
   wasSubstituted : boolean ;
   type : R4_CodeableConcept ;
   reason : R4_CodeableConcept [];
   responsibleParty : R4_Reference [];
}
