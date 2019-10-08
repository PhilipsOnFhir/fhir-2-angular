import { R4_1_Attachment } from './R4_1_Attachment'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_SubstanceNucleicAcid_Linkage } from './R4_1_SubstanceNucleicAcid_Linkage'
import { R4_1_SubstanceNucleicAcid_Sugar } from './R4_1_SubstanceNucleicAcid_Sugar'

export class R4_1_SubstanceNucleicAcid_Subunit      extends R4_1_BackboneElement
{

   static def : string = 'SubstanceNucleicAcid_Subunit';
   subunit : string ;
   sequence : string ;
   length : string ;
   sequenceAttachment : R4_1_Attachment ;
   fivePrime : R4_1_CodeableConcept ;
   threePrime : R4_1_CodeableConcept ;
   linkage : R4_1_SubstanceNucleicAcid_Linkage [];
   sugar : R4_1_SubstanceNucleicAcid_Sugar [];
}
