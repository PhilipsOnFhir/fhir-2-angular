import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_Procedure_Performer      extends R5_BackboneElement
{

   static def : string = 'Procedure_Performer';
   function : R5_CodeableConcept ;
   actor : R5_Reference ;
   onBehalfOf : R5_Reference ;
}
