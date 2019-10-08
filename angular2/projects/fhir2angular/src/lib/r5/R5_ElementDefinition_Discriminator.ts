import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DiscriminatorTypeEnum } from './R5_DiscriminatorTypeEnum'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_ElementDefinition_Discriminator      extends R5_BackboneElement
{

   static def : string = 'ElementDefinition_Discriminator';
   type : R5_DiscriminatorTypeEnum ;
   path : string ;
}
