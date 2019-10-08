import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_FinancialResourceStatusCodesEnum } from './R4_1_FinancialResourceStatusCodesEnum'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_RemittanceOutcomeEnum } from './R4_1_RemittanceOutcomeEnum'

export class R4_1_EnrollmentResponse      extends R4_1_DomainResource
{

   static def : string = 'EnrollmentResponse';
   identifier : R4_1_Identifier [];
   status : R4_1_FinancialResourceStatusCodesEnum ;
   request : R4_1_Reference ;
   outcome : R4_1_RemittanceOutcomeEnum ;
   disposition : string ;
   created : string ;
   organization : R4_1_Reference ;
   requestProvider : R4_1_Reference ;
}
