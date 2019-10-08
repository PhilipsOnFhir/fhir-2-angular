import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_SubstanceProtein_Subunit } from './R5_SubstanceProtein_Subunit'

export class R5_SubstanceProtein      extends R5_DomainResource
{

   static def : string = 'SubstanceProtein';
   sequenceType : R5_CodeableConcept ;
   numberOfSubunits : string ;
   disulfideLinkage : string [];
   subunit : R5_SubstanceProtein_Subunit [];
}
