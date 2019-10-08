import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ValueSet_Concept } from './R4_ValueSet_Concept'

export class R4_ValueSet_CodeSystem      extends R4_BackboneElement
{

   static def : string = 'ValueSet_CodeSystem';
   system : string ;
   version : string ;
   caseSensitive : boolean ;
   concept : R4_ValueSet_Concept [];
}
