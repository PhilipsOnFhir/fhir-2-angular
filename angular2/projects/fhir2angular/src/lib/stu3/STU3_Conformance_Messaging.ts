import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_Conformance_Endpoint } from './STU3_Conformance_Endpoint'
import { STU3_Conformance_Event } from './STU3_Conformance_Event'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_Conformance_Messaging      extends STU3_BackboneElement
{

   static def : string = 'Conformance_Messaging';
   endpoint : STU3_Conformance_Endpoint [];
   reliableCache : string ;
   documentation : string ;
   event : STU3_Conformance_Event [];
}
