import { R5_DomainResource } from './R5_DomainResource'
import { R5_FinancialResourceStatusCodesEnum } from './R5_FinancialResourceStatusCodesEnum'
import { R5_Identifier } from './R5_Identifier'
import { R5_Reference } from './R5_Reference'

export class R5_EnrollmentRequest      extends R5_DomainResource
{

   static def : string = 'EnrollmentRequest';
   identifier : R5_Identifier [];
   status : R5_FinancialResourceStatusCodesEnum ;
   created : string ;
   insurer : R5_Reference ;
   provider : R5_Reference ;
   candidate : R5_Reference ;
   coverage : R5_Reference ;
}
