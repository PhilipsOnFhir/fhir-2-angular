import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_Claim_Diagnosis      extends R4_BackboneElement
{

   static def : string = 'Claim_Diagnosis';
   sequence : string ;
   diagnosisCodeableConcept : R4_CodeableConcept ;
   diagnosisReference : R4_Reference ;
   type : R4_CodeableConcept [];
   onAdmission : R4_CodeableConcept ;
   packageCode : R4_CodeableConcept ;
}
