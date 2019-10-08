import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_StructureMap_Parameter      extends R5_BackboneElement
{

   static def : string = 'StructureMap_Parameter';
   valueId : string ;
   valueString : string ;
   valueBoolean : boolean ;
   valueInteger : string ;
   valueDecimal : string ;
}
