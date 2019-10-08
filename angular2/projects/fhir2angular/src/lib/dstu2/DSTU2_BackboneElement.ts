import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Element } from './DSTU2_Element'
import { DSTU2_Extension } from './DSTU2_Extension'

export class DSTU2_BackboneElement      extends DSTU2_Element
{

   static def : string = 'BackboneElement';
   modifierExtension : DSTU2_Extension [];
}
