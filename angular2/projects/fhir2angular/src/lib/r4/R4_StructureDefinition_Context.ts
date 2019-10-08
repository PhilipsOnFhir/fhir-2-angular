import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ExtensionContextTypeEnum } from './R4_ExtensionContextTypeEnum'

export class R4_StructureDefinition_Context      extends R4_BackboneElement
{

   static def : string = 'StructureDefinition_Context';
   type : R4_ExtensionContextTypeEnum ;
   expression : string ;
}
