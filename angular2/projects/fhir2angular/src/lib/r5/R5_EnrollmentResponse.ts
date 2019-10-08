import { R5_DomainResource } from './R5_DomainResource'
import { R5_FinancialResourceStatusCodesEnum } from './R5_FinancialResourceStatusCodesEnum'
import { R5_Identifier } from './R5_Identifier'
import { R5_Reference } from './R5_Reference'
import { R5_RemittanceOutcomeEnum } from './R5_RemittanceOutcomeEnum'

export class R5_EnrollmentResponse      extends R5_DomainResource
{

   static def : string = 'EnrollmentResponse';
   identifier : R5_Identifier [];
   status : R5_FinancialResourceStatusCodesEnum ;
   request : R5_Reference ;
   outcome : R5_RemittanceOutcomeEnum ;
   disposition : string ;
   created : string ;
   organization : R5_Reference ;
   requestProvider : R5_Reference ;
}
