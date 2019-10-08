import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_NamingSystemIdentifierTypeEnum } from './R5_NamingSystemIdentifierTypeEnum'
import { R5_Period } from './R5_Period'

export class R5_NamingSystem_UniqueId      extends R5_BackboneElement
{

   static def : string = 'NamingSystem_UniqueId';
   type : R5_NamingSystemIdentifierTypeEnum ;
   value : string ;
   preferred : boolean ;
   comment : string ;
   period : R5_Period ;
}
