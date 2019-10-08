import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_ValueSet_Contains      extends DSTU2_BackboneElement
{

   static def : string = 'ValueSet_Contains';
   system : string ;
   abstract : boolean ;
   version : string ;
   code : string ;
   display : string ;
   contains : DSTU2_ValueSet_Contains [];
}
