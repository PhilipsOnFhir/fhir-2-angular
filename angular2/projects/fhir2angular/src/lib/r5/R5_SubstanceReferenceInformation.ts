import { R5_DomainResource } from './R5_DomainResource'
import { R5_SubstanceReferenceInformation_Classification } from './R5_SubstanceReferenceInformation_Classification'
import { R5_SubstanceReferenceInformation_Gene } from './R5_SubstanceReferenceInformation_Gene'
import { R5_SubstanceReferenceInformation_GeneElement } from './R5_SubstanceReferenceInformation_GeneElement'
import { R5_SubstanceReferenceInformation_Target } from './R5_SubstanceReferenceInformation_Target'

export class R5_SubstanceReferenceInformation      extends R5_DomainResource
{

   static def : string = 'SubstanceReferenceInformation';
   comment : string ;
   gene : R5_SubstanceReferenceInformation_Gene [];
   geneElement : R5_SubstanceReferenceInformation_GeneElement [];
   classification : R5_SubstanceReferenceInformation_Classification [];
   target : R5_SubstanceReferenceInformation_Target [];
}
