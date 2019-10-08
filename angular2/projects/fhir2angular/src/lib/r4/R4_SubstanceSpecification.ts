import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'
import { R4_SubstanceSpecification_Code } from './R4_SubstanceSpecification_Code'
import { R4_SubstanceSpecification_Moiety } from './R4_SubstanceSpecification_Moiety'
import { R4_SubstanceSpecification_MolecularWeight } from './R4_SubstanceSpecification_MolecularWeight'
import { R4_SubstanceSpecification_Name } from './R4_SubstanceSpecification_Name'
import { R4_SubstanceSpecification_Property } from './R4_SubstanceSpecification_Property'
import { R4_SubstanceSpecification_Relationship } from './R4_SubstanceSpecification_Relationship'
import { R4_SubstanceSpecification_Structure } from './R4_SubstanceSpecification_Structure'

export class R4_SubstanceSpecification      extends R4_DomainResource
{

   static def : string = 'SubstanceSpecification';
   identifier : R4_Identifier ;
   type : R4_CodeableConcept ;
   status : R4_CodeableConcept ;
   domain : R4_CodeableConcept ;
   description : string ;
   source : R4_Reference [];
   comment : string ;
   moiety : R4_SubstanceSpecification_Moiety [];
   property : R4_SubstanceSpecification_Property [];
   referenceInformation : R4_Reference ;
   structure : R4_SubstanceSpecification_Structure ;
   code : R4_SubstanceSpecification_Code [];
   name : R4_SubstanceSpecification_Name [];
   molecularWeight : R4_SubstanceSpecification_MolecularWeight [];
   relationship : R4_SubstanceSpecification_Relationship [];
   nucleicAcid : R4_Reference ;
   polymer : R4_Reference ;
   protein : R4_Reference ;
   sourceMaterial : R4_Reference ;
}
