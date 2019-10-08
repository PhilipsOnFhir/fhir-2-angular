import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Conformance_Operation      extends DSTU2_BackboneElement
{

   static def : string = 'Conformance_Operation';
   name : string ;
   definition : DSTU2_Reference ;
}
