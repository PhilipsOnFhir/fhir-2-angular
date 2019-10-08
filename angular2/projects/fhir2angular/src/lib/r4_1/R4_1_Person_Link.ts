import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_IdentityAssuranceLevelEnum } from './R4_1_IdentityAssuranceLevelEnum'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Person_Link      extends R4_1_BackboneElement
{

   static def : string = 'Person_Link';
   target : R4_1_Reference ;
   assurance : R4_1_IdentityAssuranceLevelEnum ;
}
