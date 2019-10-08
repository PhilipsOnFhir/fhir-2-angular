import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_Composition_Event      extends R4_BackboneElement
{

   static def : string = 'Composition_Event';
   code : R4_CodeableConcept [];
   period : R4_Period ;
   detail : R4_Reference [];
}
