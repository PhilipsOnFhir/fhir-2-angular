import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_FinancialResourceStatusCodesEnum } from './STU3_FinancialResourceStatusCodesEnum'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'

export class STU3_EnrollmentResponse      extends STU3_DomainResource
{

   static def : string = 'EnrollmentResponse';
   identifier : STU3_Identifier [];
   status : STU3_FinancialResourceStatusCodesEnum ;
   request : STU3_Reference ;
   outcome : STU3_CodeableConcept ;
   disposition : string ;
   created : string ;
   organization : STU3_Reference ;
   requestProvider : STU3_Reference ;
   requestOrganization : STU3_Reference ;
}
