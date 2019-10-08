import { R4_DomainResource } from './R4_DomainResource'
import { R4_Element } from './R4_Element'
import { R4_Extension } from './R4_Extension'

export class R4_BackboneElement      extends R4_Element
{

   static def : string = 'BackboneElement';
   modifierExtension : R4_Extension [];
}
