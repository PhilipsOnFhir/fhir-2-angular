import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_UserSession_Context } from './R4_1_UserSession_Context'
import { R4_1_UserSession_Status } from './R4_1_UserSession_Status'

export class R4_1_UserSession      extends R4_1_DomainResource
{

   static def : string = 'UserSession';
   identifier : R4_1_Identifier ;
   user : R4_1_Reference ;
   status : R4_1_UserSession_Status ;
   workstation : R4_1_Identifier ;
   focus : R4_1_Reference [];
   created : string ;
   expires : string ;
   context : R4_1_UserSession_Context [];
}
