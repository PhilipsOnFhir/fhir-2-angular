import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ElementDefinition_Discriminator } from './R4_ElementDefinition_Discriminator'
import { R4_SlicingRulesEnum } from './R4_SlicingRulesEnum'

export class R4_ElementDefinition_Slicing      extends R4_BackboneElement
{

   static def : string = 'ElementDefinition_Slicing';
   discriminator : R4_ElementDefinition_Discriminator [];
   description : string ;
   ordered : boolean ;
   rules : R4_SlicingRulesEnum ;
}
