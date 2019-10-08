import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_ValueSet_Concept } from './DSTU2_ValueSet_Concept'

export class DSTU2_ValueSet_CodeSystem      extends DSTU2_BackboneElement
{

   static def : string = 'ValueSet_CodeSystem';
   system : string ;
   version : string ;
   caseSensitive : boolean ;
   concept : DSTU2_ValueSet_Concept [];
}
