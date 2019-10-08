import { R4_DomainResource } from './R4_DomainResource'
import { R4_FinancialResourceStatusCodesEnum } from './R4_FinancialResourceStatusCodesEnum'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'
import { R4_RemittanceOutcomeEnum } from './R4_RemittanceOutcomeEnum'

export class R4_EnrollmentResponse      extends R4_DomainResource
{

   static def : string = 'EnrollmentResponse';
   identifier : R4_Identifier [];
   status : R4_FinancialResourceStatusCodesEnum ;
   request : R4_Reference ;
   outcome : R4_RemittanceOutcomeEnum ;
   disposition : string ;
   created : string ;
   organization : R4_Reference ;
   requestProvider : R4_Reference ;
}
