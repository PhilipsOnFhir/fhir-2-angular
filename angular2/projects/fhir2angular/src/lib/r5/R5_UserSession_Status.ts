import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_UserSessionStatusEnum } from './R5_UserSessionStatusEnum'
import { R5_UserSessionStatusSourceEnum } from './R5_UserSessionStatusSourceEnum'

export class R5_UserSession_Status      extends R5_BackboneElement
{

   static def : string = 'UserSession_Status';
   code : R5_UserSessionStatusEnum ;
   source : R5_UserSessionStatusSourceEnum ;
}
