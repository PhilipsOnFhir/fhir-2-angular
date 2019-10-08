import { R4_DomainResource } from './R4_DomainResource'
import { R4_SubstanceReferenceInformation_Classification } from './R4_SubstanceReferenceInformation_Classification'
import { R4_SubstanceReferenceInformation_Gene } from './R4_SubstanceReferenceInformation_Gene'
import { R4_SubstanceReferenceInformation_GeneElement } from './R4_SubstanceReferenceInformation_GeneElement'
import { R4_SubstanceReferenceInformation_Target } from './R4_SubstanceReferenceInformation_Target'

export class R4_SubstanceReferenceInformation      extends R4_DomainResource
{

   static def : string = 'SubstanceReferenceInformation';
   comment : string ;
   gene : R4_SubstanceReferenceInformation_Gene [];
   geneElement : R4_SubstanceReferenceInformation_GeneElement [];
   classification : R4_SubstanceReferenceInformation_Classification [];
   target : R4_SubstanceReferenceInformation_Target [];
}
