import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DiscriminatorTypeEnum } from './R4_DiscriminatorTypeEnum'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_ElementDefinition_Discriminator      extends R4_BackboneElement
{

   static def : string = 'ElementDefinition_Discriminator';
   type : R4_DiscriminatorTypeEnum ;
   path : string ;
}
