import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_UserSessionStatusEnum } from './R4_UserSessionStatusEnum'
import { R4_UserSessionStatusSourceEnum } from './R4_UserSessionStatusSourceEnum'

export class R4_UserSession_Status      extends R4_BackboneElement
{

   static def : string = 'UserSession_Status';
   code : R4_UserSessionStatusEnum ;
   source : R4_UserSessionStatusSourceEnum ;
}
