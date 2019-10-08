import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_ExtensionContextTypeEnum } from './R4_1_ExtensionContextTypeEnum'

export class R4_1_StructureDefinition_Context      extends R4_1_BackboneElement
{

   static def : string = 'StructureDefinition_Context';
   type : R4_1_ExtensionContextTypeEnum ;
   expression : string ;
}
