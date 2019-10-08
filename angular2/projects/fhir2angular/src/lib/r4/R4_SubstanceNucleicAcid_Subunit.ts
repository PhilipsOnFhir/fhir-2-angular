import { R4_Attachment } from './R4_Attachment'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_SubstanceNucleicAcid_Linkage } from './R4_SubstanceNucleicAcid_Linkage'
import { R4_SubstanceNucleicAcid_Sugar } from './R4_SubstanceNucleicAcid_Sugar'

export class R4_SubstanceNucleicAcid_Subunit      extends R4_BackboneElement
{

   static def : string = 'SubstanceNucleicAcid_Subunit';
   subunit : string ;
   sequence : string ;
   length : string ;
   sequenceAttachment : R4_Attachment ;
   fivePrime : R4_CodeableConcept ;
   threePrime : R4_CodeableConcept ;
   linkage : R4_SubstanceNucleicAcid_Linkage [];
   sugar : R4_SubstanceNucleicAcid_Sugar [];
}
