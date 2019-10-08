import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_ClaimResponse_ProcessNote      extends STU3_BackboneElement
{

   static def : string = 'ClaimResponse_ProcessNote';
   number : string ;
   type : STU3_CodeableConcept ;
   text : string ;
   language : STU3_CodeableConcept ;
}
