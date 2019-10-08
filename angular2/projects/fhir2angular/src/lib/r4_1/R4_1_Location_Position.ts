import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_Location_Position      extends R4_1_BackboneElement
{

   static def : string = 'Location_Position';
   longitude : string ;
   latitude : string ;
   altitude : string ;
}
