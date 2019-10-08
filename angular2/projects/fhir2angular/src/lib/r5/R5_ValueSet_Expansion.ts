import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_ValueSet_Contains } from './R5_ValueSet_Contains'
import { R5_ValueSet_Parameter } from './R5_ValueSet_Parameter'

export class R5_ValueSet_Expansion      extends R5_BackboneElement
{

   static def : string = 'ValueSet_Expansion';
   identifier : string ;
   timestamp : string ;
   total : string ;
   offset : string ;
   parameter : R5_ValueSet_Parameter [];
   contains : R5_ValueSet_Contains [];
}
