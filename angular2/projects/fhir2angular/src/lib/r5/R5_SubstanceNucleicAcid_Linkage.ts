import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'

export class R5_SubstanceNucleicAcid_Linkage      extends R5_BackboneElement
{

   static def : string = 'SubstanceNucleicAcid_Linkage';
   connectivity : string ;
   identifier : R5_Identifier ;
   name : string ;
   residueSite : string ;
}
