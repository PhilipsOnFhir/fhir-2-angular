import { R5_DomainResource } from './R5_DomainResource'
import { R5_Element } from './R5_Element'
import { R5_Extension } from './R5_Extension'

export class R5_BackboneElement      extends R5_Element
{

   static def : string = 'BackboneElement';
   modifierExtension : R5_Extension [];
}
