import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Composition_Event      extends R4_1_BackboneElement
{

   static def : string = 'Composition_Event';
   code : R4_1_CodeableConcept [];
   period : R4_1_Period ;
   detail : R4_1_Reference [];
}
