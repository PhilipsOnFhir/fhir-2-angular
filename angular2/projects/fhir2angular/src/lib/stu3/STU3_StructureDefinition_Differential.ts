import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ElementDefinition } from './STU3_ElementDefinition'

export class STU3_StructureDefinition_Differential      extends STU3_BackboneElement
{

   static def : string = 'StructureDefinition_Differential';
   element : STU3_ElementDefinition [];
}
