import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_Contract_Context      extends R5_BackboneElement
{

   static def : string = 'Contract_Context';
   reference : R5_Reference ;
   code : R5_CodeableConcept [];
   text : string ;
}
