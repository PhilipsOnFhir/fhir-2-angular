import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_ProcessResponse_ProcessNote      extends STU3_BackboneElement
{

   static def : string = 'ProcessResponse_ProcessNote';
   type : STU3_CodeableConcept ;
   text : string ;
}
