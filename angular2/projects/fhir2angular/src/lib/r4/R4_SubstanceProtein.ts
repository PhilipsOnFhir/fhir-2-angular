import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_SubstanceProtein_Subunit } from './R4_SubstanceProtein_Subunit'

export class R4_SubstanceProtein      extends R4_DomainResource
{

   static def : string = 'SubstanceProtein';
   sequenceType : R4_CodeableConcept ;
   numberOfSubunits : string ;
   disulfideLinkage : string [];
   subunit : R4_SubstanceProtein_Subunit [];
}
