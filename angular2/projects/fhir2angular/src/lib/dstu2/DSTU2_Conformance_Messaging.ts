import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_Conformance_Endpoint } from './DSTU2_Conformance_Endpoint'
import { DSTU2_Conformance_Event } from './DSTU2_Conformance_Event'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_Conformance_Messaging      extends DSTU2_BackboneElement
{

   static def : string = 'Conformance_Messaging';
   endpoint : DSTU2_Conformance_Endpoint [];
   reliableCache : string ;
   documentation : string ;
   event : DSTU2_Conformance_Event [];
}
