import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_FinancialResourceStatusCodesEnum } from './STU3_FinancialResourceStatusCodesEnum'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'

export class STU3_EnrollmentRequest      extends STU3_DomainResource
{

   static def : string = 'EnrollmentRequest';
   identifier : STU3_Identifier [];
   status : STU3_FinancialResourceStatusCodesEnum ;
   created : string ;
   insurer : STU3_Reference ;
   provider : STU3_Reference ;
   organization : STU3_Reference ;
   subject : STU3_Reference ;
   coverage : STU3_Reference ;
}
