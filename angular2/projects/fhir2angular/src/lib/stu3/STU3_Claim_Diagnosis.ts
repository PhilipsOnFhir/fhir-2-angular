import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Claim_Diagnosis      extends STU3_BackboneElement
{

   static def : string = 'Claim_Diagnosis';
   sequence : string ;
   diagnosisCodeableConcept : STU3_CodeableConcept ;
   diagnosisReference : STU3_Reference ;
   type : STU3_CodeableConcept [];
   packageCode : STU3_CodeableConcept ;
}
