import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_StructureDefinition_Mapping      extends STU3_BackboneElement
{

   static def : string = 'StructureDefinition_Mapping';
   identity : string ;
   uri : string ;
   name : string ;
   comment : string ;
}
