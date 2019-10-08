import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_ValueSet_Include } from './DSTU2_ValueSet_Include'

export class DSTU2_ValueSet_Compose      extends DSTU2_BackboneElement
{

   static def : string = 'ValueSet_Compose';
   import : string [];
   include : DSTU2_ValueSet_Include [];
   exclude : DSTU2_ValueSet_Include [];
}
