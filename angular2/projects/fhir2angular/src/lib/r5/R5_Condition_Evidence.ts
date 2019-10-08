import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_Condition_Evidence      extends R5_BackboneElement
{

   static def : string = 'Condition_Evidence';
   code : R5_CodeableConcept [];
   detail : R5_Reference [];
}
