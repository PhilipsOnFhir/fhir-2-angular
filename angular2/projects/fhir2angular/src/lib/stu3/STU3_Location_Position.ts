import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_Location_Position      extends STU3_BackboneElement
{

   static def : string = 'Location_Position';
   longitude : string ;
   latitude : string ;
   altitude : string ;
}
