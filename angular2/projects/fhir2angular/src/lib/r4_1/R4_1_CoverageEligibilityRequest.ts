import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_CoverageEligibilityRequest_Insurance } from './R4_1_CoverageEligibilityRequest_Insurance'
import { R4_1_CoverageEligibilityRequest_Item } from './R4_1_CoverageEligibilityRequest_Item'
import { R4_1_CoverageEligibilityRequest_SupportingInfo } from './R4_1_CoverageEligibilityRequest_SupportingInfo'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_EligibilityRequestPurposeEnum } from './R4_1_EligibilityRequestPurposeEnum'
import { R4_1_FinancialResourceStatusCodesEnum } from './R4_1_FinancialResourceStatusCodesEnum'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_CoverageEligibilityRequest      extends R4_1_DomainResource
{

   static def : string = 'CoverageEligibilityRequest';
   identifier : R4_1_Identifier [];
   status : R4_1_FinancialResourceStatusCodesEnum ;
   priority : R4_1_CodeableConcept ;
   purpose : R4_1_EligibilityRequestPurposeEnum [];
   patient : R4_1_Reference ;
   servicedDate : string ;
   servicedPeriod : R4_1_Period ;
   created : string ;
   enterer : R4_1_Reference ;
   provider : R4_1_Reference ;
   insurer : R4_1_Reference ;
   facility : R4_1_Reference ;
   supportingInfo : R4_1_CoverageEligibilityRequest_SupportingInfo [];
   insurance : R4_1_CoverageEligibilityRequest_Insurance [];
   item : R4_1_CoverageEligibilityRequest_Item [];
}
