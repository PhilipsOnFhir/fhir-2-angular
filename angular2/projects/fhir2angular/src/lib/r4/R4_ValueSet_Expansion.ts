import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ValueSet_Contains } from './R4_ValueSet_Contains'
import { R4_ValueSet_Parameter } from './R4_ValueSet_Parameter'

export class R4_ValueSet_Expansion      extends R4_BackboneElement
{

   static def : string = 'ValueSet_Expansion';
   identifier : string ;
   timestamp : string ;
   total : string ;
   offset : string ;
   parameter : R4_ValueSet_Parameter [];
   contains : R4_ValueSet_Contains [];
}
