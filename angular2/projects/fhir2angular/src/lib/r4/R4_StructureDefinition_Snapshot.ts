import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ElementDefinition } from './R4_ElementDefinition'

export class R4_StructureDefinition_Snapshot      extends R4_BackboneElement
{

   static def : string = 'StructureDefinition_Snapshot';
   element : R4_ElementDefinition [];
}
