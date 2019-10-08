import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Reference } from './R5_Reference'
import { R5_SubstanceSpecification_Code } from './R5_SubstanceSpecification_Code'
import { R5_SubstanceSpecification_Moiety } from './R5_SubstanceSpecification_Moiety'
import { R5_SubstanceSpecification_MolecularWeight } from './R5_SubstanceSpecification_MolecularWeight'
import { R5_SubstanceSpecification_Name } from './R5_SubstanceSpecification_Name'
import { R5_SubstanceSpecification_Property } from './R5_SubstanceSpecification_Property'
import { R5_SubstanceSpecification_Relationship } from './R5_SubstanceSpecification_Relationship'
import { R5_SubstanceSpecification_Structure } from './R5_SubstanceSpecification_Structure'

export class R5_SubstanceSpecification      extends R5_DomainResource
{

   static def : string = 'SubstanceSpecification';
   identifier : R5_Identifier ;
   type : R5_CodeableConcept ;
   status : R5_CodeableConcept ;
   domain : R5_CodeableConcept ;
   description : string ;
   source : R5_Reference [];
   comment : string ;
   moiety : R5_SubstanceSpecification_Moiety [];
   property : R5_SubstanceSpecification_Property [];
   referenceInformation : R5_Reference ;
   structure : R5_SubstanceSpecification_Structure ;
   code : R5_SubstanceSpecification_Code [];
   name : R5_SubstanceSpecification_Name [];
   molecularWeight : R5_SubstanceSpecification_MolecularWeight [];
   relationship : R5_SubstanceSpecification_Relationship [];
   nucleicAcid : R5_Reference ;
   polymer : R5_Reference ;
   protein : R5_Reference ;
   sourceMaterial : R5_Reference ;
}
