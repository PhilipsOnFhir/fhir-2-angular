import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Element } from './DSTU2_Element'
import { DSTU2_SlicingRulesEnum } from './DSTU2_SlicingRulesEnum'

export class DSTU2_ElementDefinition_Slicing      extends DSTU2_Element
{

   static def : string = 'ElementDefinition_Slicing';
   discriminator : string [];
   description : string ;
   ordered : boolean ;
   rules : DSTU2_SlicingRulesEnum ;
}
