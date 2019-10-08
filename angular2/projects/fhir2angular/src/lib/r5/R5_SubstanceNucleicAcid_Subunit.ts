import { R5_Attachment } from './R5_Attachment'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_SubstanceNucleicAcid_Linkage } from './R5_SubstanceNucleicAcid_Linkage'
import { R5_SubstanceNucleicAcid_Sugar } from './R5_SubstanceNucleicAcid_Sugar'

export class R5_SubstanceNucleicAcid_Subunit      extends R5_BackboneElement
{

   static def : string = 'SubstanceNucleicAcid_Subunit';
   subunit : string ;
   sequence : string ;
   length : string ;
   sequenceAttachment : R5_Attachment ;
   fivePrime : R5_CodeableConcept ;
   threePrime : R5_CodeableConcept ;
   linkage : R5_SubstanceNucleicAcid_Linkage [];
   sugar : R5_SubstanceNucleicAcid_Sugar [];
}
