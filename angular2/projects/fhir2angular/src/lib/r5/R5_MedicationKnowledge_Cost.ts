import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Money } from './R5_Money'

export class R5_MedicationKnowledge_Cost      extends R5_BackboneElement
{

   static def : string = 'MedicationKnowledge_Cost';
   type : R5_CodeableConcept ;
   source : string ;
   cost : R5_Money ;
}
