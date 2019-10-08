import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_ElementDefinition_Discriminator } from './R5_ElementDefinition_Discriminator'
import { R5_SlicingRulesEnum } from './R5_SlicingRulesEnum'

export class R5_ElementDefinition_Slicing      extends R5_BackboneElement
{

   static def : string = 'ElementDefinition_Slicing';
   discriminator : R5_ElementDefinition_Discriminator [];
   description : string ;
   ordered : boolean ;
   rules : R5_SlicingRulesEnum ;
}
