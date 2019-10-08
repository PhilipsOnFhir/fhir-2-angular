import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'

export class R4_SubstanceNucleicAcid_Sugar      extends R4_BackboneElement
{

   static def : string = 'SubstanceNucleicAcid_Sugar';
   identifier : R4_Identifier ;
   name : string ;
   residueSite : string ;
}
