import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_Conformance_Endpoint } from './R4_Conformance_Endpoint'
import { R4_Conformance_Event } from './R4_Conformance_Event'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_Conformance_Messaging      extends R4_BackboneElement
{

   static def : string = 'Conformance_Messaging';
   endpoint : R4_Conformance_Endpoint [];
   reliableCache : string ;
   documentation : string ;
   event : R4_Conformance_Event [];
}
