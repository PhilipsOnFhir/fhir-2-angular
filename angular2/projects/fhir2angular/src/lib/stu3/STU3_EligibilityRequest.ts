import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_FinancialResourceStatusCodesEnum } from './STU3_FinancialResourceStatusCodesEnum'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'

export class STU3_EligibilityRequest      extends STU3_DomainResource
{

   static def : string = 'EligibilityRequest';
   identifier : STU3_Identifier [];
   status : STU3_FinancialResourceStatusCodesEnum ;
   priority : STU3_CodeableConcept ;
   patient : STU3_Reference ;
   servicedDate : string ;
   servicedPeriod : STU3_Period ;
   created : string ;
   enterer : STU3_Reference ;
   provider : STU3_Reference ;
   organization : STU3_Reference ;
   insurer : STU3_Reference ;
   facility : STU3_Reference ;
   coverage : STU3_Reference ;
   businessArrangement : string ;
   benefitCategory : STU3_CodeableConcept ;
   benefitSubCategory : STU3_CodeableConcept ;
}
