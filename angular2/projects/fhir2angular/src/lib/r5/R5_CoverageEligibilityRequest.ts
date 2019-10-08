import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_CoverageEligibilityRequest_Insurance } from './R5_CoverageEligibilityRequest_Insurance'
import { R5_CoverageEligibilityRequest_Item } from './R5_CoverageEligibilityRequest_Item'
import { R5_CoverageEligibilityRequest_SupportingInfo } from './R5_CoverageEligibilityRequest_SupportingInfo'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_EligibilityRequestPurposeEnum } from './R5_EligibilityRequestPurposeEnum'
import { R5_FinancialResourceStatusCodesEnum } from './R5_FinancialResourceStatusCodesEnum'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'

export class R5_CoverageEligibilityRequest      extends R5_DomainResource
{

   static def : string = 'CoverageEligibilityRequest';
   identifier : R5_Identifier [];
   status : R5_FinancialResourceStatusCodesEnum ;
   priority : R5_CodeableConcept ;
   purpose : R5_EligibilityRequestPurposeEnum [];
   patient : R5_Reference ;
   servicedDate : string ;
   servicedPeriod : R5_Period ;
   created : string ;
   enterer : R5_Reference ;
   provider : R5_Reference ;
   insurer : R5_Reference ;
   facility : R5_Reference ;
   supportingInfo : R5_CoverageEligibilityRequest_SupportingInfo [];
   insurance : R5_CoverageEligibilityRequest_Insurance [];
   item : R5_CoverageEligibilityRequest_Item [];
}
