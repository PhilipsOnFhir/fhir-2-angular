import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_Invoice_Participant      extends R5_BackboneElement
{

   static def : string = 'Invoice_Participant';
   role : R5_CodeableConcept ;
   actor : R5_Reference ;
}
