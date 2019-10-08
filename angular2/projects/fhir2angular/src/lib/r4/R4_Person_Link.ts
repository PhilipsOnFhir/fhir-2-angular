import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_IdentityAssuranceLevelEnum } from './R4_IdentityAssuranceLevelEnum'
import { R4_Reference } from './R4_Reference'

export class R4_Person_Link      extends R4_BackboneElement
{

   static def : string = 'Person_Link';
   target : R4_Reference ;
   assurance : R4_IdentityAssuranceLevelEnum ;
}
