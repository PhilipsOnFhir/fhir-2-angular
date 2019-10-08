import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ValueSet_Contains } from './STU3_ValueSet_Contains'
import { STU3_ValueSet_Parameter } from './STU3_ValueSet_Parameter'

export class STU3_ValueSet_Expansion      extends STU3_BackboneElement
{

   static def : string = 'ValueSet_Expansion';
   identifier : string ;
   timestamp : string ;
   total : string ;
   offset : string ;
   parameter : STU3_ValueSet_Parameter [];
   contains : STU3_ValueSet_Contains [];
}
