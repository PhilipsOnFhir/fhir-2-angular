import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_ValueSet_Designation      extends DSTU2_BackboneElement
{

   static def : string = 'ValueSet_Designation';
   language : string ;
   use : DSTU2_Coding ;
   value : string ;
}
