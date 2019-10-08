import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Procedure_Performer      extends R4_1_BackboneElement
{

   static def : string = 'Procedure_Performer';
   function : R4_1_CodeableConcept ;
   actor : R4_1_Reference ;
   onBehalfOf : R4_1_Reference ;
}
