import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_NamingSystemIdentifierTypeEnum } from './STU3_NamingSystemIdentifierTypeEnum'
import { STU3_Period } from './STU3_Period'

export class STU3_NamingSystem_UniqueId      extends STU3_BackboneElement
{

   static def : string = 'NamingSystem_UniqueId';
   type : STU3_NamingSystemIdentifierTypeEnum ;
   value : string ;
   preferred : boolean ;
   comment : string ;
   period : STU3_Period ;
}
