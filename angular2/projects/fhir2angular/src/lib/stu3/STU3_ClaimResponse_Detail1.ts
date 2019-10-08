import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_ClaimResponse_Adjudication } from './STU3_ClaimResponse_Adjudication'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_ClaimResponse_Detail1      extends STU3_BackboneElement
{

   static def : string = 'ClaimResponse_Detail1';
   revenue : STU3_CodeableConcept ;
   category : STU3_CodeableConcept ;
   service : STU3_CodeableConcept ;
   modifier : STU3_CodeableConcept [];
   fee : string ;
   noteNumber : string [];
   adjudication : STU3_ClaimResponse_Adjudication [];
}
