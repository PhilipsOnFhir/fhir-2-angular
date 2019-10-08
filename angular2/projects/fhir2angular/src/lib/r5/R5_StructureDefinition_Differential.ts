import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_ElementDefinition } from './R5_ElementDefinition'

export class R5_StructureDefinition_Differential      extends R5_BackboneElement
{

   static def : string = 'StructureDefinition_Differential';
   element : R5_ElementDefinition [];
}
