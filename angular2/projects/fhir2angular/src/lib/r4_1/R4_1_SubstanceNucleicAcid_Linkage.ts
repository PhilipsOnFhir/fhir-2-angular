import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'

export class R4_1_SubstanceNucleicAcid_Linkage      extends R4_1_BackboneElement
{

   static def : string = 'SubstanceNucleicAcid_Linkage';
   connectivity : string ;
   identifier : R4_1_Identifier ;
   name : string ;
   residueSite : string ;
}
