import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_FinancialResourceStatusCodesEnum } from './R4_1_FinancialResourceStatusCodesEnum'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_EnrollmentRequest      extends R4_1_DomainResource
{

   static def : string = 'EnrollmentRequest';
   identifier : R4_1_Identifier [];
   status : R4_1_FinancialResourceStatusCodesEnum ;
   created : string ;
   insurer : R4_1_Reference ;
   provider : R4_1_Reference ;
   candidate : R4_1_Reference ;
   coverage : R4_1_Reference ;
}
