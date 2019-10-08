import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_MedicationKnowledge_Substitution      extends R4_1_BackboneElement
{

   static def : string = 'MedicationKnowledge_Substitution';
   type : R4_1_CodeableConcept ;
   allowed : boolean ;
}
