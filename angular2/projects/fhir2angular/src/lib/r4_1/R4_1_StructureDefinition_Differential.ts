import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_ElementDefinition } from './R4_1_ElementDefinition'

export class R4_1_StructureDefinition_Differential      extends R4_1_BackboneElement
{

   static def : string = 'StructureDefinition_Differential';
   element : R4_1_ElementDefinition [];
}
