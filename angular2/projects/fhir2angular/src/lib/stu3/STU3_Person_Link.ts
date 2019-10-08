import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_IdentityAssuranceLevelEnum } from './STU3_IdentityAssuranceLevelEnum'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Person_Link      extends STU3_BackboneElement
{

   static def : string = 'Person_Link';
   target : STU3_Reference ;
   assurance : STU3_IdentityAssuranceLevelEnum ;
}
