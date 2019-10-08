import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_EligibilityResponse_Error } from './STU3_EligibilityResponse_Error'
import { STU3_EligibilityResponse_Insurance } from './STU3_EligibilityResponse_Insurance'
import { STU3_FinancialResourceStatusCodesEnum } from './STU3_FinancialResourceStatusCodesEnum'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'

export class STU3_EligibilityResponse      extends STU3_DomainResource
{

   static def : string = 'EligibilityResponse';
   identifier : STU3_Identifier [];
   status : STU3_FinancialResourceStatusCodesEnum ;
   created : string ;
   requestProvider : STU3_Reference ;
   requestOrganization : STU3_Reference ;
   request : STU3_Reference ;
   outcome : STU3_CodeableConcept ;
   disposition : string ;
   insurer : STU3_Reference ;
   inforce : boolean ;
   insurance : STU3_EligibilityResponse_Insurance [];
   form : STU3_CodeableConcept ;
   error : STU3_EligibilityResponse_Error [];
}
