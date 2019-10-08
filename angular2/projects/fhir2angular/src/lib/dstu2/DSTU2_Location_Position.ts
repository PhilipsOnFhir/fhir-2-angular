import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_Location_Position      extends DSTU2_BackboneElement
{

   static def : string = 'Location_Position';
   longitude : string ;
   latitude : string ;
   altitude : string ;
}
