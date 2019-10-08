import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_SubstanceNucleicAcid_Subunit } from './R4_1_SubstanceNucleicAcid_Subunit'

export class R4_1_SubstanceNucleicAcid      extends R4_1_DomainResource
{

   static def : string = 'SubstanceNucleicAcid';
   sequenceType : R4_1_CodeableConcept ;
   numberOfSubunits : string ;
   areaOfHybridisation : string ;
   oligoNucleotideType : R4_1_CodeableConcept ;
   subunit : R4_1_SubstanceNucleicAcid_Subunit [];
}
