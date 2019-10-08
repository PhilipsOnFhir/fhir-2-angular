import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_ElementDefinition } from './DSTU2_ElementDefinition'

export class DSTU2_StructureDefinition_Snapshot      extends DSTU2_BackboneElement
{

   static def : string = 'StructureDefinition_Snapshot';
   element : DSTU2_ElementDefinition [];
}
