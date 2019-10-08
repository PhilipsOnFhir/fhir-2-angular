import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_SubstancePolymer_MonomerSet } from './R5_SubstancePolymer_MonomerSet'
import { R5_SubstancePolymer_Repeat } from './R5_SubstancePolymer_Repeat'

export class R5_SubstancePolymer      extends R5_DomainResource
{

   static def : string = 'SubstancePolymer';
   class : R5_CodeableConcept ;
   geometry : R5_CodeableConcept ;
   copolymerConnectivity : R5_CodeableConcept [];
   modification : string [];
   monomerSet : R5_SubstancePolymer_MonomerSet [];
   repeat : R5_SubstancePolymer_Repeat [];
}
