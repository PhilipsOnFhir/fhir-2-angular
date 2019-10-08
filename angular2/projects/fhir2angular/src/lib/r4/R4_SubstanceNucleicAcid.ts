import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_SubstanceNucleicAcid_Subunit } from './R4_SubstanceNucleicAcid_Subunit'

export class R4_SubstanceNucleicAcid      extends R4_DomainResource
{

   static def : string = 'SubstanceNucleicAcid';
   sequenceType : R4_CodeableConcept ;
   numberOfSubunits : string ;
   areaOfHybridisation : string ;
   oligoNucleotideType : R4_CodeableConcept ;
   subunit : R4_SubstanceNucleicAcid_Subunit [];
}
