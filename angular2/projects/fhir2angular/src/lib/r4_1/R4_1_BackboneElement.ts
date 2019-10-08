import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Element } from './R4_1_Element'
import { R4_1_Extension } from './R4_1_Extension'

export class R4_1_BackboneElement      extends R4_1_Element
{

   static def : string = 'BackboneElement';
   modifierExtension : R4_1_Extension [];
}
