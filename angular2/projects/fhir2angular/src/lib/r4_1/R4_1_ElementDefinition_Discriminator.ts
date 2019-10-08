import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DiscriminatorTypeEnum } from './R4_1_DiscriminatorTypeEnum'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_ElementDefinition_Discriminator      extends R4_1_BackboneElement
{

   static def : string = 'ElementDefinition_Discriminator';
   type : R4_1_DiscriminatorTypeEnum ;
   path : string ;
}
