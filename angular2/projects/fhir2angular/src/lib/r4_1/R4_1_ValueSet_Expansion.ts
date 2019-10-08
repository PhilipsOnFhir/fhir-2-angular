import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_ValueSet_Contains } from './R4_1_ValueSet_Contains'
import { R4_1_ValueSet_Parameter } from './R4_1_ValueSet_Parameter'

export class R4_1_ValueSet_Expansion      extends R4_1_BackboneElement
{

   static def : string = 'ValueSet_Expansion';
   identifier : string ;
   timestamp : string ;
   total : string ;
   offset : string ;
   parameter : R4_1_ValueSet_Parameter [];
   contains : R4_1_ValueSet_Contains [];
}
