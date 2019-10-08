import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_ValueSet_Contains } from './DSTU2_ValueSet_Contains'
import { DSTU2_ValueSet_Parameter } from './DSTU2_ValueSet_Parameter'

export class DSTU2_ValueSet_Expansion      extends DSTU2_BackboneElement
{

   static def : string = 'ValueSet_Expansion';
   identifier : string ;
   timestamp : string ;
   total : string ;
   offset : string ;
   parameter : DSTU2_ValueSet_Parameter [];
   contains : DSTU2_ValueSet_Contains [];
}
