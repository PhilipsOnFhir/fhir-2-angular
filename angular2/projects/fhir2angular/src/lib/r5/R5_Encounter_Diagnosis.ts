import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_Encounter_Diagnosis      extends R5_BackboneElement
{

   static def : string = 'Encounter_Diagnosis';
   condition : R5_Reference ;
   use : R5_CodeableConcept ;
   rank : string ;
}
