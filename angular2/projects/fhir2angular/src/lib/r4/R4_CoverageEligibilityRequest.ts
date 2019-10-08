import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_CoverageEligibilityRequest_Insurance } from './R4_CoverageEligibilityRequest_Insurance'
import { R4_CoverageEligibilityRequest_Item } from './R4_CoverageEligibilityRequest_Item'
import { R4_CoverageEligibilityRequest_SupportingInfo } from './R4_CoverageEligibilityRequest_SupportingInfo'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_EligibilityRequestPurposeEnum } from './R4_EligibilityRequestPurposeEnum'
import { R4_FinancialResourceStatusCodesEnum } from './R4_FinancialResourceStatusCodesEnum'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_CoverageEligibilityRequest      extends R4_DomainResource
{

   static def : string = 'CoverageEligibilityRequest';
   identifier : R4_Identifier [];
   status : R4_FinancialResourceStatusCodesEnum ;
   priority : R4_CodeableConcept ;
   purpose : R4_EligibilityRequestPurposeEnum [];
   patient : R4_Reference ;
   servicedDate : string ;
   servicedPeriod : R4_Period ;
   created : string ;
   enterer : R4_Reference ;
   provider : R4_Reference ;
   insurer : R4_Reference ;
   facility : R4_Reference ;
   supportingInfo : R4_CoverageEligibilityRequest_SupportingInfo [];
   insurance : R4_CoverageEligibilityRequest_Insurance [];
   item : R4_CoverageEligibilityRequest_Item [];
}
