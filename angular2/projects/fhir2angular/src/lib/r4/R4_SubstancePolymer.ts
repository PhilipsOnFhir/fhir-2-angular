import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_SubstancePolymer_MonomerSet } from './R4_SubstancePolymer_MonomerSet'
import { R4_SubstancePolymer_Repeat } from './R4_SubstancePolymer_Repeat'

export class R4_SubstancePolymer      extends R4_DomainResource
{

   static def : string = 'SubstancePolymer';
   class : R4_CodeableConcept ;
   geometry : R4_CodeableConcept ;
   copolymerConnectivity : R4_CodeableConcept [];
   modification : string [];
   monomerSet : R4_SubstancePolymer_MonomerSet [];
   repeat : R4_SubstancePolymer_Repeat [];
}
