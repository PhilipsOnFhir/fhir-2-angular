import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_CoverageEligibilityResponse_Error } from './R4_1_CoverageEligibilityResponse_Error'
import { R4_1_CoverageEligibilityResponse_Insurance } from './R4_1_CoverageEligibilityResponse_Insurance'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_EligibilityResponsePurposeEnum } from './R4_1_EligibilityResponsePurposeEnum'
import { R4_1_FinancialResourceStatusCodesEnum } from './R4_1_FinancialResourceStatusCodesEnum'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_RemittanceOutcomeEnum } from './R4_1_RemittanceOutcomeEnum'

export class R4_1_CoverageEligibilityResponse      extends R4_1_DomainResource
{

   static def : string = 'CoverageEligibilityResponse';
   identifier : R4_1_Identifier [];
   status : R4_1_FinancialResourceStatusCodesEnum ;
   purpose : R4_1_EligibilityResponsePurposeEnum [];
   patient : R4_1_Reference ;
   servicedDate : string ;
   servicedPeriod : R4_1_Period ;
   created : string ;
   requestor : R4_1_Reference ;
   request : R4_1_Reference ;
   outcome : R4_1_RemittanceOutcomeEnum ;
   disposition : string ;
   insurer : R4_1_Reference ;
   insurance : R4_1_CoverageEligibilityResponse_Insurance [];
   preAuthRef : string ;
   form : R4_1_CodeableConcept ;
   error : R4_1_CoverageEligibilityResponse_Error [];
}
