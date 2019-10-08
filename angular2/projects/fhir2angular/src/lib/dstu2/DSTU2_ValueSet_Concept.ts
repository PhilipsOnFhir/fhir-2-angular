import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_ValueSet_Designation } from './DSTU2_ValueSet_Designation'

export class DSTU2_ValueSet_Concept      extends DSTU2_BackboneElement
{

   static def : string = 'ValueSet_Concept';
   code : string ;
   abstract : boolean ;
   display : string ;
   definition : string ;
   designation : DSTU2_ValueSet_Designation [];
   concept : DSTU2_ValueSet_Concept [];
}
