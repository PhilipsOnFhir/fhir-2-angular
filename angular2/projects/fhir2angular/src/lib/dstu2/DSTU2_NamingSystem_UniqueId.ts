import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_NamingSystemIdentifierTypeEnum } from './DSTU2_NamingSystemIdentifierTypeEnum'
import { DSTU2_Period } from './DSTU2_Period'

export class DSTU2_NamingSystem_UniqueId      extends DSTU2_BackboneElement
{

   static def : string = 'NamingSystem_UniqueId';
   type : DSTU2_NamingSystemIdentifierTypeEnum ;
   value : string ;
   preferred : boolean ;
   period : DSTU2_Period ;
}
