import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_ValueSet_Designation } from './DSTU2_ValueSet_Designation'

export class DSTU2_ValueSet_Concept1      extends DSTU2_BackboneElement
{

   static def : string = 'ValueSet_Concept1';
   code : string ;
   display : string ;
   designation : DSTU2_ValueSet_Designation [];
}
