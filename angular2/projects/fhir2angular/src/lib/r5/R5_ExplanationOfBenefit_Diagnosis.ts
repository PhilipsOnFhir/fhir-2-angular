import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_ExplanationOfBenefit_Diagnosis      extends R5_BackboneElement
{

   static def : string = 'ExplanationOfBenefit_Diagnosis';
   sequence : string ;
   diagnosisCodeableConcept : R5_CodeableConcept ;
   diagnosisReference : R5_Reference ;
   type : R5_CodeableConcept [];
   onAdmission : R5_CodeableConcept ;
   packageCode : R5_CodeableConcept ;
}
