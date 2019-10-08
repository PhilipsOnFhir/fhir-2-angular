import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_CoverageEligibilityResponse_Error } from './R5_CoverageEligibilityResponse_Error'
import { R5_CoverageEligibilityResponse_Insurance } from './R5_CoverageEligibilityResponse_Insurance'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_EligibilityResponsePurposeEnum } from './R5_EligibilityResponsePurposeEnum'
import { R5_FinancialResourceStatusCodesEnum } from './R5_FinancialResourceStatusCodesEnum'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'
import { R5_RemittanceOutcomeEnum } from './R5_RemittanceOutcomeEnum'

export class R5_CoverageEligibilityResponse      extends R5_DomainResource
{

   static def : string = 'CoverageEligibilityResponse';
   identifier : R5_Identifier [];
   status : R5_FinancialResourceStatusCodesEnum ;
   purpose : R5_EligibilityResponsePurposeEnum [];
   patient : R5_Reference ;
   servicedDate : string ;
   servicedPeriod : R5_Period ;
   created : string ;
   requestor : R5_Reference ;
   request : R5_Reference ;
   outcome : R5_RemittanceOutcomeEnum ;
   disposition : string ;
   insurer : R5_Reference ;
   insurance : R5_CoverageEligibilityResponse_Insurance [];
   preAuthRef : string ;
   form : R5_CodeableConcept ;
   error : R5_CoverageEligibilityResponse_Error [];
}
