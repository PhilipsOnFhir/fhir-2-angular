import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_StructureMap_Parameter      extends R4_BackboneElement
{

   static def : string = 'StructureMap_Parameter';
   valueId : string ;
   valueString : string ;
   valueBoolean : boolean ;
   valueInteger : string ;
   valueDecimal : string ;
}
