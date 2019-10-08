import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_ClaimResponse_Adjudication      extends STU3_BackboneElement
{

   static def : string = 'ClaimResponse_Adjudication';
   category : STU3_CodeableConcept ;
   reason : STU3_CodeableConcept ;
   amount : string ;
   value : string ;
}
