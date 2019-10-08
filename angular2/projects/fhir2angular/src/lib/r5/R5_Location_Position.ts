import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_Location_Position      extends R5_BackboneElement
{

   static def : string = 'Location_Position';
   longitude : string ;
   latitude : string ;
   altitude : string ;
}
