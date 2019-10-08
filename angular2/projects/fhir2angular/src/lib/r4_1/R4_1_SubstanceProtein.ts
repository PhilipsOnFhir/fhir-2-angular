import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_SubstanceProtein_Subunit } from './R4_1_SubstanceProtein_Subunit'

export class R4_1_SubstanceProtein      extends R4_1_DomainResource
{

   static def : string = 'SubstanceProtein';
   sequenceType : R4_1_CodeableConcept ;
   numberOfSubunits : string ;
   disulfideLinkage : string [];
   subunit : R4_1_SubstanceProtein_Subunit [];
}
