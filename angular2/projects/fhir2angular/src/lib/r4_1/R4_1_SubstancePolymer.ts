import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_SubstancePolymer_MonomerSet } from './R4_1_SubstancePolymer_MonomerSet'
import { R4_1_SubstancePolymer_Repeat } from './R4_1_SubstancePolymer_Repeat'

export class R4_1_SubstancePolymer      extends R4_1_DomainResource
{

   static def : string = 'SubstancePolymer';
   class : R4_1_CodeableConcept ;
   geometry : R4_1_CodeableConcept ;
   copolymerConnectivity : R4_1_CodeableConcept [];
   modification : string [];
   monomerSet : R4_1_SubstancePolymer_MonomerSet [];
   repeat : R4_1_SubstancePolymer_Repeat [];
}
