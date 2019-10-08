import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'
import { R4_UserSession_Context } from './R4_UserSession_Context'
import { R4_UserSession_Status } from './R4_UserSession_Status'

export class R4_UserSession      extends R4_DomainResource
{

   static def : string = 'UserSession';
   identifier : R4_Identifier ;
   user : R4_Reference ;
   status : R4_UserSession_Status ;
   workstation : R4_Identifier ;
   focus : R4_Reference [];
   created : string ;
   expires : string ;
   context : R4_UserSession_Context [];
}
