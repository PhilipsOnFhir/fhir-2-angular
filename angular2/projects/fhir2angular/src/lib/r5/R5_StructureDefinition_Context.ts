import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_ExtensionContextTypeEnum } from './R5_ExtensionContextTypeEnum'

export class R5_StructureDefinition_Context      extends R5_BackboneElement
{

   static def : string = 'StructureDefinition_Context';
   type : R5_ExtensionContextTypeEnum ;
   expression : string ;
}
