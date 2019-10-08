import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_NamingSystemIdentifierTypeEnum } from './R4_NamingSystemIdentifierTypeEnum'
import { R4_Period } from './R4_Period'

export class R4_NamingSystem_UniqueId      extends R4_BackboneElement
{

   static def : string = 'NamingSystem_UniqueId';
   type : R4_NamingSystemIdentifierTypeEnum ;
   value : string ;
   preferred : boolean ;
   comment : string ;
   period : R4_Period ;
}
