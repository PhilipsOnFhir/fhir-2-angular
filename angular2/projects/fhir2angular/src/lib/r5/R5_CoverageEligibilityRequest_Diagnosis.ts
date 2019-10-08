import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_CoverageEligibilityRequest_Diagnosis      extends R5_BackboneElement
{

   static def : string = 'CoverageEligibilityRequest_Diagnosis';
   diagnosisCodeableConcept : R5_CodeableConcept ;
   diagnosisReference : R5_Reference ;
}
