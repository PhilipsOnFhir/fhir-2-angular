import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_SubstanceReferenceInformation_Classification } from './R4_1_SubstanceReferenceInformation_Classification'
import { R4_1_SubstanceReferenceInformation_Gene } from './R4_1_SubstanceReferenceInformation_Gene'
import { R4_1_SubstanceReferenceInformation_GeneElement } from './R4_1_SubstanceReferenceInformation_GeneElement'
import { R4_1_SubstanceReferenceInformation_Target } from './R4_1_SubstanceReferenceInformation_Target'

export class R4_1_SubstanceReferenceInformation      extends R4_1_DomainResource
{

   static def : string = 'SubstanceReferenceInformation';
   comment : string ;
   gene : R4_1_SubstanceReferenceInformation_Gene [];
   geneElement : R4_1_SubstanceReferenceInformation_GeneElement [];
   classification : R4_1_SubstanceReferenceInformation_Classification [];
   target : R4_1_SubstanceReferenceInformation_Target [];
}
