import { STU3_DiscriminatorTypeEnum } from './STU3_DiscriminatorTypeEnum'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'

export class STU3_ElementDefinition_Discriminator      extends STU3_Element
{

   static def : string = 'ElementDefinition_Discriminator';
   type : STU3_DiscriminatorTypeEnum ;
   path : string ;
}
