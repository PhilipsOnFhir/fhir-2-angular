import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_UserSessionStatusEnum } from './R4_1_UserSessionStatusEnum'
import { R4_1_UserSessionStatusSourceEnum } from './R4_1_UserSessionStatusSourceEnum'

export class R4_1_UserSession_Status      extends R4_1_BackboneElement
{

   static def : string = 'UserSession_Status';
   code : R4_1_UserSessionStatusEnum ;
   source : R4_1_UserSessionStatusSourceEnum ;
}
