import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_SubstanceSpecification_Code } from './R4_1_SubstanceSpecification_Code'
import { R4_1_SubstanceSpecification_Moiety } from './R4_1_SubstanceSpecification_Moiety'
import { R4_1_SubstanceSpecification_MolecularWeight } from './R4_1_SubstanceSpecification_MolecularWeight'
import { R4_1_SubstanceSpecification_Name } from './R4_1_SubstanceSpecification_Name'
import { R4_1_SubstanceSpecification_Property } from './R4_1_SubstanceSpecification_Property'
import { R4_1_SubstanceSpecification_Relationship } from './R4_1_SubstanceSpecification_Relationship'
import { R4_1_SubstanceSpecification_Structure } from './R4_1_SubstanceSpecification_Structure'

export class R4_1_SubstanceSpecification      extends R4_1_DomainResource
{

   static def : string = 'SubstanceSpecification';
   identifier : R4_1_Identifier ;
   type : R4_1_CodeableConcept ;
   status : R4_1_CodeableConcept ;
   domain : R4_1_CodeableConcept ;
   description : string ;
   source : R4_1_Reference [];
   comment : string ;
   moiety : R4_1_SubstanceSpecification_Moiety [];
   property : R4_1_SubstanceSpecification_Property [];
   referenceInformation : R4_1_Reference ;
   structure : R4_1_SubstanceSpecification_Structure ;
   code : R4_1_SubstanceSpecification_Code [];
   name : R4_1_SubstanceSpecification_Name [];
   molecularWeight : R4_1_SubstanceSpecification_MolecularWeight [];
   relationship : R4_1_SubstanceSpecification_Relationship [];
   nucleicAcid : R4_1_Reference ;
   polymer : R4_1_Reference ;
   protein : R4_1_Reference ;
   sourceMaterial : R4_1_Reference ;
}
