import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Claim_Diagnosis      extends R4_1_BackboneElement
{

   static def : string = 'Claim_Diagnosis';
   sequence : string ;
   diagnosisCodeableConcept : R4_1_CodeableConcept ;
   diagnosisReference : R4_1_Reference ;
   type : R4_1_CodeableConcept [];
   onAdmission : R4_1_CodeableConcept ;
   packageCode : R4_1_CodeableConcept ;
}
