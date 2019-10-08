import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_IdentityAssuranceLevelEnum } from './R5_IdentityAssuranceLevelEnum'
import { R5_Reference } from './R5_Reference'

export class R5_Person_Link      extends R5_BackboneElement
{

   static def : string = 'Person_Link';
   target : R5_Reference ;
   assurance : R5_IdentityAssuranceLevelEnum ;
}
