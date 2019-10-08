import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_SubstanceNucleicAcid_Subunit } from './R5_SubstanceNucleicAcid_Subunit'

export class R5_SubstanceNucleicAcid      extends R5_DomainResource
{

   static def : string = 'SubstanceNucleicAcid';
   sequenceType : R5_CodeableConcept ;
   numberOfSubunits : string ;
   areaOfHybridisation : string ;
   oligoNucleotideType : R5_CodeableConcept ;
   subunit : R5_SubstanceNucleicAcid_Subunit [];
}
