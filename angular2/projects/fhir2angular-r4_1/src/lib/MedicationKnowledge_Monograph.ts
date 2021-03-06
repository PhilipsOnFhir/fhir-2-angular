import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class MedicationKnowledge_Monograph      extends BackboneElement
{

   static def : string = 'MedicationKnowledge_Monograph';
   type : CodeableConcept ;
   source : Reference ;
}
