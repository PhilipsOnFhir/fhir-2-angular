import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_IdentityAssuranceLevelEnum } from './DSTU2_IdentityAssuranceLevelEnum'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Person_Link      extends DSTU2_BackboneElement
{

   static def : string = 'Person_Link';
   target : DSTU2_Reference ;
   assurance : DSTU2_IdentityAssuranceLevelEnum ;
}
