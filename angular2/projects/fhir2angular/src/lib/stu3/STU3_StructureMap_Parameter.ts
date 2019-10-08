import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_StructureMap_Parameter      extends STU3_BackboneElement
{

   static def : string = 'StructureMap_Parameter';
   valueId : string ;
   valueString : string ;
   valueBoolean : boolean ;
   valueInteger : string ;
   valueDecimal : string ;
}
