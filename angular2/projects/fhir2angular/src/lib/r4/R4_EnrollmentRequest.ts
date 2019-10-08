import { R4_DomainResource } from './R4_DomainResource'
import { R4_FinancialResourceStatusCodesEnum } from './R4_FinancialResourceStatusCodesEnum'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'

export class R4_EnrollmentRequest      extends R4_DomainResource
{

   static def : string = 'EnrollmentRequest';
   identifier : R4_Identifier [];
   status : R4_FinancialResourceStatusCodesEnum ;
   created : string ;
   insurer : R4_Reference ;
   provider : R4_Reference ;
   candidate : R4_Reference ;
   coverage : R4_Reference ;
}
