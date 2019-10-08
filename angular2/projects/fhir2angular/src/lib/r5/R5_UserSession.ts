import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Reference } from './R5_Reference'
import { R5_UserSession_Context } from './R5_UserSession_Context'
import { R5_UserSession_Status } from './R5_UserSession_Status'

export class R5_UserSession      extends R5_DomainResource
{

   static def : string = 'UserSession';
   identifier : R5_Identifier ;
   user : R5_Reference ;
   status : R5_UserSession_Status ;
   workstation : R5_Identifier ;
   focus : R5_Reference [];
   created : string ;
   expires : string ;
   context : R5_UserSession_Context [];
}
