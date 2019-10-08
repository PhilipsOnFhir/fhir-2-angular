import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Composition_Event      extends DSTU2_BackboneElement
{

   static def : string = 'Composition_Event';
   code : DSTU2_CodeableConcept [];
   period : DSTU2_Period ;
   detail : DSTU2_Reference [];
}
