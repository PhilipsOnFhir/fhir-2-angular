import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_CoverageEligibilityResponse_Error } from './R4_CoverageEligibilityResponse_Error'
import { R4_CoverageEligibilityResponse_Insurance } from './R4_CoverageEligibilityResponse_Insurance'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_EligibilityResponsePurposeEnum } from './R4_EligibilityResponsePurposeEnum'
import { R4_FinancialResourceStatusCodesEnum } from './R4_FinancialResourceStatusCodesEnum'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'
import { R4_RemittanceOutcomeEnum } from './R4_RemittanceOutcomeEnum'

export class R4_CoverageEligibilityResponse      extends R4_DomainResource
{

   static def : string = 'CoverageEligibilityResponse';
   identifier : R4_Identifier [];
   status : R4_FinancialResourceStatusCodesEnum ;
   purpose : R4_EligibilityResponsePurposeEnum [];
   patient : R4_Reference ;
   servicedDate : string ;
   servicedPeriod : R4_Period ;
   created : string ;
   requestor : R4_Reference ;
   request : R4_Reference ;
   outcome : R4_RemittanceOutcomeEnum ;
   disposition : string ;
   insurer : R4_Reference ;
   insurance : R4_CoverageEligibilityResponse_Insurance [];
   preAuthRef : string ;
   form : R4_CodeableConcept ;
   error : R4_CoverageEligibilityResponse_Error [];
}
