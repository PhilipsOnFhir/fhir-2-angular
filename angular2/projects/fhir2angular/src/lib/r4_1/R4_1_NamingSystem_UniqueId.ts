import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_NamingSystemIdentifierTypeEnum } from './R4_1_NamingSystemIdentifierTypeEnum'
import { R4_1_Period } from './R4_1_Period'

export class R4_1_NamingSystem_UniqueId      extends R4_1_BackboneElement
{

   static def : string = 'NamingSystem_UniqueId';
   type : R4_1_NamingSystemIdentifierTypeEnum ;
   value : string ;
   preferred : boolean ;
   comment : string ;
   period : R4_1_Period ;
}
