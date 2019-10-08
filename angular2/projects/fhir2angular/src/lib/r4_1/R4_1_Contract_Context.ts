import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Contract_Context      extends R4_1_BackboneElement
{

   static def : string = 'Contract_Context';
   reference : R4_1_Reference ;
   code : R4_1_CodeableConcept [];
   text : string ;
}
