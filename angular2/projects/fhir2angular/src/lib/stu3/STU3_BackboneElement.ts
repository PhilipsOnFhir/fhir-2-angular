import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'
import { STU3_Extension } from './STU3_Extension'

export class STU3_BackboneElement      extends STU3_Element
{

   static def : string = 'BackboneElement';
   modifierExtension : STU3_Extension [];
}
